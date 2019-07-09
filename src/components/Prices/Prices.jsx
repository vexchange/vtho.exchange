import React, { Component } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';
import { isEmpty, isEqual, get } from 'lodash';

import CustomCard from '../CustomCard';

const Wrapper = styled.div`
  margin-bottom: 30px;

  @media all and (max-width: 768px) {
    > .row {
      flex-direction: column;
    }

    .column:last-of-type {
      margin-top: 20px;
    }
  }
`;

const Price = styled.div`
  color: #fff;
  font-size: 3em;
  font-weight: 300;
  line-height: 1;

  &:after {
    content: 'vet';
    font-size: 1rem;
    text-transform: uppercase;
  }
`;

const Fee = styled.div`
  color: #fff;
  font-size: 3em;
  font-weight: 300;
  line-height: 1;

  small {
    font-size: 1rem;
    text-transform: uppercase;
  }
`;

const Title = styled.div`
  font-size: 1rem;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

class Prices extends Component {
  static conversion = (num, multiplier) => (num * multiplier).toFixed(3);
  static format = (num, multiplier = true) => multiplier ? num.toFixed(3) : (num / 10).toFixed(3);

  constructor() {
    super();

    this.state = {
      tickers: {},
      balances: {},
    };

    this.getVexchangePrice = this.getVexchangePrice.bind(this);
    this.getExchangePrice = this.getExchangePrice.bind(this);
  }

  componentWillReceiveProps(props) {
    if (!isEqual(this.props.token, props.token) ) {
      this.props.onLoad(props.token);
    }

    if (!isEqual(this.props.tickers, props.tickers)) {
      this.setState({ tickers: props.tickers });
    }

    if (!isEqual(this.props.balances, props.balances)) {
      this.setState({ balances: props.balances });
    }
  }

  getVexchangePrice() {
    const { balances } = this.state;
    const { token } = this.props;

    return (balances.VET / balances[token.name]).toFixed(4);
  }

  getExchangePrice() {
    const { tickers } = this.state;
    const { token } = this.props;

    return get(tickers[token.name], 'ticker.last', 0);
  }

  render() {
    const { tickers } = this.state;
    const { intl, token, fees } = this.props;

    return (
      <Wrapper>
        <Row gutter={30} type="flex" className="row">
          <Col sm={24} md={14} lg={14} xl={14} className="column">

            <CustomCard>
              <Row type="flex" justify="space-between" gutter={30}>
                <Col>
                  <Title>Vexchange { intl.formatMessage({ id: 'price' }) }</Title>
                  { (!isEmpty(tickers) && !isEmpty(token)) &&
                    <Price>
                      { this.getVexchangePrice() }
                    </Price>
                  }
                </Col>
                <Col>
                  <Title>Exchange { intl.formatMessage({ id: 'price' }) } </Title>
                  { (!isEmpty(tickers) && !isEmpty(token)) &&
                    <Price>
                      {  this.getExchangePrice() }
                    </Price>
                  }
                </Col>
              </Row>
            </CustomCard>

          </Col>
          <Col sm={24} md={10} lg={10} xl={10} className="column">

            <CustomCard> 
              <Title>Gas { intl.formatMessage({ id: 'fees.label' }) }</Title>

              <Row type="flex" justify="space-between" gutter={30}>
                <Col>
                  { (!isEmpty(tickers) && !isEmpty(token)) &&
                    <Fee>
                      { fees[token.name].vetTradeFee }
                      <small>vet</small>
                    </Fee>
                  }
                </Col>
                <Col>
                  { (!isEmpty(tickers) && !isEmpty(token)) &&
                    <Fee>
                      { fees[token.name].tokenTradeFee }
                      <small>{ token.name }</small>
                    </Fee>
                  }
                </Col>
              </Row>
            </CustomCard>

          </Col>
        </Row>
      </Wrapper>
    );
  }
}

export default injectIntl(Prices);
