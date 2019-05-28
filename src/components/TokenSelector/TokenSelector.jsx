import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Button, Icon } from 'antd';
import styled from 'styled-components';
import { isEqual } from 'lodash';

import tokens from '../../tokens.json';

const Wrapper = styled.div`
  margin-right: 20px;
`;

const menu = (
  <Menu>
    { tokens.splice(1).map(token => (
      <Menu.Item key={token}>
        <Link to={token}>{token}</Link>
      </Menu.Item>
    ))}
  </Menu>
);

class TokenSelector extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { token } = this.props.match.params;
    this.props.setTokenAndAddress(token);
  }

  componentWillReceiveProps({ match }) {
    if (!isEqual(this.props.match, match)) {
      this.props.setTokenAndAddress(match.params.token);
    }
  }

  render() { 
    return (
      <Wrapper>
        <Dropdown overlay={menu} placement="bottomLeft">
          <Button size="small" ghost>
            { this.props.match.params.token }
            <Icon type="down" />
          </Button>
        </Dropdown>
      </Wrapper>
    );
  }
}
 
export default TokenSelector;
