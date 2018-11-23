import { connect } from 'react-redux';
import Locale from '../components/Locale';
import _ from 'lodash';

import { changeLanguage } from '../actions';

import translations from '../translations.js';

const mapStateToProps = (state, props) => {
  const supportedLanguages = _.keys(translations);
  let locale = state.locale || props.locale;

  if (!supportedLanguages.includes(locale)) {
    locale = 'en'
  };

  return { locale };
}

const LocaleContainer = connect(mapStateToProps, {
  onLoad: changeLanguage,
})(Locale);

export default LocaleContainer;
