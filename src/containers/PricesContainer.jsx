import { connect } from 'react-redux';

import { fetchTickers } from '../actions';
import Prices from '../components/Prices';

const mapStateToProps = ({
  fees,
  token,
  tickers,
  balances
}) => {
  return {
    fees,
    token,
    tickers,
    balances,
  }
};

const PricesContainer = connect(mapStateToProps, { onLoad: fetchTickers })(Prices);

export default PricesContainer;
