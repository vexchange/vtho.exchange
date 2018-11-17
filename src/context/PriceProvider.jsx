import React, { Component, createContext } from 'react';
import axios from 'axios';

const vthoTicker = 'https://api.coinmarketcap.com/v2/ticker/3012/';
const vetTicker = 'https://api.coinmarketcap.com/v2/ticker/3077/';

const getVtho = () => axios.get(vthoTicker);
const getVet = () => axios.get(vetTicker);

const PriceContext = createContext();

export class PriceProvider extends Component {
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
        }

        this.setState({ prices });
      }));
  }

  render() {
    const { prices } = this.state;
    return (
      <PriceContext.Provider value={prices}>
        { this.props.children }
      </PriceContext.Provider>
    );
  }
}

export const PriceContextConsumer = PriceContext.Consumer;
