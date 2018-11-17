import React, { Component } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import _ from 'lodash';

import CustomCard from '../CustomCard';

const Label = styled.small`
  text-transform: uppercase;
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

class Prices extends Component {
  static conversion = (num, multiplier) => (num * multiplier).toFixed(3);
  static format = (num, multiplier = true) => multiplier ? num.toFixed(3) : (num / 10).toFixed(3);

  constructor() {
    super();

    this.state = {
      tickers: {},
      balances: {},
    };

    this.getVETPrice = this.getVETPrice.bind(this);
    this.getVTHOPrice = this.getVTHOPrice.bind(this);
  }

  componentDidMount() {
    this.props.onLoad();
  }

  componentWillReceiveProps({ tickers, balances }) {
    if (!_.isEmpty(tickers)) {
      this.setState({ tickers });
    }

    if (!_.isEmpty(balances)) {
      this.setState({ balances });
    }
  }

  getVETPrice() {
    const { balances, tickers } = this.state;
    return (((balances.vtho / balances.vet) * tickers.vtho) * 100 || 0);
  }

  getVTHOPrice() {
    const { balances, tickers } = this.state;
    return (((balances.vet / balances.vtho) * tickers.vet) * 100 || 0);
  }

  render() {
    const { tickers } = this.state;

    return (
        <Row type="flex" justify="space-between" gutter={30}>
          <Col span={12}>

            <CustomCard title="Vexchange Price">
              <Row type="flex" justify="space-between" gutter={30}>
                <Col>
                  <Label>VET Price</Label>
                  <Price>
                    { Prices.format(this.getVETPrice()) }
                  </Price>
                </Col>
                <Col>
                  <Label>VTHO Price</Label>
                  <Price>
                    { Prices.format(this.getVTHOPrice()) }
                  </Price>
                </Col>
              </Row>
            </CustomCard>

          </Col>
          <Col span={12}>

            <CustomCard title="Coinmarketcap Price">
              <Row type="flex" justify="space-between" gutter={30}>
                <Col>
                  <div>
                    <Label>VET Price</Label>
                  </div>
                  <Price>
                    { Prices.conversion(tickers.vet, 100) }
                  </Price>
                </Col>
                <Col>
                  <div>
                    <Label>VTHO Price</Label>
                  </div>
                  <Price>
                    { Prices.conversion(tickers.vtho, 100) }
                  </Price>
                </Col>
              </Row>
            </CustomCard>

          </Col>
        </Row>
    );
  }
}

export default Prices;
