import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: linear-gradient(35deg, #116366, #1bbc78);
  border-radius: 2px;
  color: #fff;
  font-weight: 500;
  margin-bottom: 30px;
`;

const Title = styled.div`
  font-size: 1rem;
  text-transform: uppercase;
  padding: 16px 24px;
`;

const Body = styled.div`
  padding: 0 24px 24px 24px;
`;

class CustomCard extends Component {
  render() {
    const { title, children } = this.props
    return (
      <Wrapper>
        <Title>
          { title }
        </Title>
        <Body>
          { children }
        </Body>
      </Wrapper>
    );
  }
}

export default CustomCard;
