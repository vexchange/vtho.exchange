import React, { Component, Fragment } from 'react';
import { Button } from 'antd';

class LocaleChanger extends Component {
  constructor() {
    super();

    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage(lang) {
    this.props.onClick(lang);
  }

  render() {
    return (
      <Fragment>
        { (this.props.locale === 'en') ?
          <Button
            ghost
            size="small"
            onClick={() => this.changeLanguage('zh')}>
              中文
          </Button> :
          <Button
            ghost
            size="small"
            onClick={() => this.changeLanguage('en')}>
              English
          </Button>
        }
      </Fragment>
    );
  }
}

export default LocaleChanger;
