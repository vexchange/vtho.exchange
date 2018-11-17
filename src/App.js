import React, { Component } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { Home } from './scenes';

import { PriceProvider } from './context/PriceProvider';

import Header from './components/Header';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
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

          <PriceProvider>

            <Layout>

              <Header />

              <Route path="/" exact component={Home} />

              <Footer />

              <GlobalStyle />
            </Layout>

          </PriceProvider>

      </Router>
    );
  }
}

export default App;
