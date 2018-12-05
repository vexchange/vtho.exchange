import React, { Component, Fragment } from 'react';
import { Layout } from 'antd';

import CalculatorContainer from '../containers/CalculatorContainer';
import BalancesContainer from '../containers/BalancesContainer';
import PricesContainer from '../containers/PricesContainer';
import FeesContainer from '../containers/FeesContainer';

import Container from '../components/Container';
import Info from '../components/Info';

const { Content } = Layout;

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Content>
          <BalancesContainer />

          <Container>
            <Info />

            <PricesContainer />

            <FeesContainer />

            <CalculatorContainer />

          </Container>

        </Content>
      </Fragment>
    );
  }
}

export default Home;
