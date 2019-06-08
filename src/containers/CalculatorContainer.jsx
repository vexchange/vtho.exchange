import { connect } from 'react-redux';

import { calculateVET, calculateVTHO } from '../actions';
import Calculator from '../components/Calculator';

const mapStateToProps = ({ calculations, token }) => ({ ...calculations, token });

const FeesContainer = connect(mapStateToProps, { calculateVET, calculateVTHO })(Calculator);

export default FeesContainer;
