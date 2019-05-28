import { connect } from 'react-redux';

import QRCode from '../components/QRCode';

const mapStateToProps = ({ token }) => ({ token });

const QRContainer = connect(mapStateToProps)(QRCode);

export default QRContainer;
