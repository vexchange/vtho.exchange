import React, { Component, Fragment } from 'react';
import { Layout } from 'antd';
import axios from 'axios';

import CalculatorContainer from '../containers/CalculatorContainer';
import BalancesContainer from '../containers/BalancesContainer';
import PricesContainer from '../containers/PricesContainer';
import FeesContainer from '../containers/FeesContainer';

import Container from '../components/Container';
import Info from '../components/Info';

const { Content } = Layout;

const vthoTicker = 'https://api.coinmarketcap.com/v2/ticker/3012/';
const vetTicker = 'https://api.coinmarketcap.com/v2/ticker/3077/';

const getVtho = () => axios.get(vthoTicker);
const getVet = () => axios.get(vetTicker);

class Home extends Component {
  constructor() {
    super();

    this.state = {
      prices: {
        vet: 0,
        vtho: 0,
      }
    };

    this.fetchPrices = this.fetchPrices.bind(this);
  }

  componentDidMount() {
    this.fetchPrices();
  }

  fetchPrices() {
    axios.all([getVtho(), getVet()])
      .then(axios.spread((vtho, vet) => {
        const { data: { data: vthoData } } = vtho;
        const { data: { data: vetData } } = vet;

        const prices = {
          vet: vetData.quotes.USD.price,
          vtho: vthoData.quotes.USD.price,
        };

        this.setState({ prices });
    }));
  }

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
