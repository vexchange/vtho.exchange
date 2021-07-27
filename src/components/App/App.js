import React  from 'react';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import { isMobile } from "react-device-detect";
import { Box } from 'rebass';
import { Global, css } from '@emotion/core';
import Token from '../../pages/Token';

const styles = props => css`
  html,
  body,
  #root {
    height: 100%;
  }

  body {
    background: #FEF2E0;
    font-family: ${props.fonts.body};
    font-size: 14px;
    line-height: 21px;
  }

  a {
    color: ${props.colors.primary};
    text-decoration: none;
    font-weight: 700;
  }
  
  ol, ul {
    list-style-position:inside;
    padding: 0;
    margin: 0;
  }

  ol li {
    margin-bottom: 10px;
  }
`;

function App() {
  return (
    <Box
      sx={{
        height: '100%',
        maxWidth: 441,
        mx: 'auto',
        pt: isMobile ? 50 : 150,
        px: 3,
      }}
    >
      <Router>
        <Switch>
          <Route path="/:token" component={Token} />
          <Redirect from='/' exact to='/VTHO'/>
        </Switch>
      </Router>
      <Global styles={styles} />
    </Box>
  );
}

export default App;
