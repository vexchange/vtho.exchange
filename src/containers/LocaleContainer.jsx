import { connect } from 'react-redux';
import Locale from '../components/Locale';

import { changeLanguage } from '../actions';

const mapStateToProps = (state, props) => {
  const locale = state.locale || props.locale;
  return { locale };
}

const LocaleContainer = connect(mapStateToProps, {
  onLoad: changeLanguage,
})(Locale);

export default LocaleContainer;
