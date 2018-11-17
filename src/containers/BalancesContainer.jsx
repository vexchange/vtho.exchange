import { connect } from 'react-redux';

import { fetchBalances } from '../actions';
import Balances from '../components/Balances';

const mapStateToProps = ({ balances, tickers }) => ({ balances, tickers });

const BalancesContainer = connect(mapStateToProps, { onLoad: fetchBalances })(Balances);

export default BalancesContainer;
