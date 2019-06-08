import React, { Component, Fragment } from 'react';
import { Layout } from 'antd';

import CalculatorContainer from '../containers/CalculatorContainer';
import BalancesContainer from '../containers/BalancesContainer';
import PricesContainer from '../containers/PricesContainer';
import FeesContainer from '../containers/FeesContainer';

import Container from '../components/Container';
import Header from '../components/Header';
import Info from '../components/Info';

const { Content } = Layout;

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <Content>
          <BalancesContainer />

          <Container>

            <Info />

            <PricesContainer />

            <CalculatorContainer />

          </Container>

        </Content>
      </Fragment>
    );
  }
}

export default Home;
