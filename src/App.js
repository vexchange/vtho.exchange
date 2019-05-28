import React, { Component } from 'react';
import { Layout } from 'antd';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { Home } from './scenes';

import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
  }

  .ant-card-head-title {
    text-transform: uppercase;
  }

  .ant-card {
    margin-bottom: 30px !important;
  }
`;

class App extends Component {
  render() {
    return (
      <Router>

        <Layout>

          <Switch>
            <Redirect from='/' exact to='/VTHO'/>
            <Route path="/:token" component={Home} />
          </Switch>

          <Footer />

          <GlobalStyle />
        </Layout>

      </Router>
    );
  }
}

export default App;
