import React  from 'react';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import { Box } from 'rebass';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import Token from '../../pages/Token';

const styles = props => css`
  html,
  body,
  #root {
    height: 100%;
  }

  body {
    background: ${props.colors.background};
    font-family: ${props.fonts.body};
    font-size: 14px;
  }

  a {
    color: ${props.colors.green};
    text-decoration: none;
  }
  
  ol, ul {
    list-style-position:inside;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
  }
`;

const Spacer = styled.div`
  height: 200px;
  width: 100%;
`;

function App() {
  return (
    <Box
      sx={{
        height: '100%',
        maxWidth: 630,
        mx: 'auto',
        px: 3,
      }}
    >
      <Router>
        <Switch>
          <Route path="/:token" component={Token} />
          <Redirect from='/' exact to='/VTHO'/>
        </Switch>
      </Router>
      <Spacer />
      <Global styles={styles} />
    </Box>
  );
}

export default App;
