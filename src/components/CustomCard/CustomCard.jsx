import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: linear-gradient(35deg, #116366, #1bbc78);
  border-radius: 2px;
  color: #fff;
  font-weight: 500;
  height: 100%;
`;

const Body = styled.div`
  padding: 24px;
`;

class CustomCard extends Component {
  render() {
    const { children } = this.props

    return (
      <Wrapper>
        <Body>
          { children }
        </Body>
      </Wrapper>
    );
  }
}

export default CustomCard;
