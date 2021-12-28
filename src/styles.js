
import { css } from '@emotion/core';

const styles = props => css`
  html,
  body,
  #root {
    height: 100%;
  }

  body {
    background-color: #030309;
    color: white;
    font-family: ${props.fonts.body};
    font-size: 14px;
    line-height: 21px;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a {
    color: ${props.colors.primary};
    text-decoration: none;
    font-weight: 700;
  }

  ol, ul {
    padding-left: 10px;
    margin: 0;
  }

  ol li {
    margin-bottom: 10px;
  }

  ul li {
    &::marker {
      color: ${props.colors.primary};
    }
  }
`;

export default styles;
