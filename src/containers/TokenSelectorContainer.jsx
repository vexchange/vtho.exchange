import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setTokenAndAddress } from '../actions';
import TokenSelector from '../components/TokenSelector';

const mapStateToProps = ({ token }) => ({ token });

const TokenSelectorContainer = withRouter(connect(mapStateToProps, { setTokenAndAddress })(TokenSelector));

export default TokenSelectorContainer;
