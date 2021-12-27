import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './pages/';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'emotion-theming';
import WebFont from 'webfontloader';
import theme from './theme';

import ContractContext from './contexts/Contract';

import './fonts.css';

WebFont.load({
  google: {
    families: [
      'Rubik Mono One',
      'Poppins:400,700',
      'Source Code Pro:700'
    ]
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ContractContext>
        <App />
      </ContractContext>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
