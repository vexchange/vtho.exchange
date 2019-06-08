import { connect } from 'react-redux';

import { changeLanguage } from '../actions';
import LocaleChanger from '../components/LocaleChanger';

const mapStateToProps = (state, props) => {
  const locale = state.locale || props.locale;
  return { locale };
};

const LocaleChangerContainer = connect(mapStateToProps, {
  onClick: changeLanguage,
})(LocaleChanger);

export default LocaleChangerContainer;
