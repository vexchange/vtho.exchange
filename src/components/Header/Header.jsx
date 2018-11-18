import React from 'react';
import Container from '../Container';
import styled from 'styled-components';

import LocaleChangerContainer from '../../containers/LocaleChangerContainer';

const Wrapper = styled.header`
  background: linear-gradient(35deg, #116366, #1bbc78);
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  padding: 24px 0;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: #fff;
  letter-spacing: 5px;
  text-transform: uppercase;
  margin: 0;

  small {
    font-size: 0.7rem;
    text-transform: lowercase;
    letter-spacing: 0;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Title>
            Vexchange
            <small>beta</small>
          </Title>
          <LocaleChangerContainer />
        </Content>
      </Container>
    </Wrapper>
  );
}

export default Header;
