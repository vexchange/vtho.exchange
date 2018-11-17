import { connect } from 'react-redux';

import { fetchFees } from '../actions';
import Fees from '../components/Fees';

const mapStateToProps = ({ fees }) => ({ ...fees });

const FeesContainer = connect(mapStateToProps, { onLoad: fetchFees })(Fees);

export default FeesContainer;
