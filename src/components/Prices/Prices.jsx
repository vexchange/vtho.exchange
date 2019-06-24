import React, { Component } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';
import { isEmpty, isEqual } from 'lodash';

import CustomCard from '../CustomCard';

const Label = styled.small`
  text-transform: uppercase;
`;

const Wrapper = styled.div`
  margin-bottom: 30px;
`;

const Price = styled.div`
  color: #fff;
  font-size: 3em;
  font-weight: 300;
  line-height: 1;

  &::after {
    content: '¢';
    font-size: 2rem;
  }
`;

const Fee = styled.div`
  color: #fff;
  font-size: 3em;
  font-weight: 300;
  line-height: 1;

  small {
    font-size: 2rem;
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
    const { balances, tickers = {} } = this.state;
    const { token } = this.props;
    const { ticker } = tickers[token.name];

    return (((balances[token.name] / balances.VET) * (ticker || {}).last) * 100 || 0);
  }

  getExchangePrice() {
    const { balances, tickers } = this.state;
    const { token } = this.props;
    const { ticker } = tickers[token.name];
    
    return (ticker || {}).last;
  }

  render() {
    const { tickers } = this.state;
    const { intl, token, fees } = this.props;

    return (
      <Wrapper>
        <Row gutter={30} type="flex">
          <Col sm={24} md={12} lg={12} xl={12}>

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
          <Col sm={24} md={12} lg={12} xl={12}>

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
