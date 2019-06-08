import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';

import translations from '../../translations.js';

class Locale extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: props.locale,
    };
  }

  componentDidMount() {
    this.props.onLoad(this.props.locale);
  }

  componentWillReceiveProps({ locale }) {
    if (this.props.locale !== locale) {
      this.setState({ locale });
    }
  }

  render() {
    const { locale } = this.state;
    const messages = translations[locale];

    return (
      <IntlProvider
        locale={locale}
        messages={messages}
        key={locale}>

        { this.props.children }

      </IntlProvider>
    );
  }
}

export default Locale;
