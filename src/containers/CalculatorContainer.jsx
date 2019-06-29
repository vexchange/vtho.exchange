import { connect } from 'react-redux';

import { calculateVETThunk, calculateTokenThunk } from '../actions';
import Calculator from '../components/Calculator';

const mapStateToProps = ({ calculations, token }) => ({ calculations, token });

const FeesContainer = connect(mapStateToProps, { calculateVETThunk, calculateTokenThunk })(Calculator);

export default FeesContainer;
