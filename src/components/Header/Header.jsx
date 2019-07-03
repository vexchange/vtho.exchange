import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container';
import styled from 'styled-components';

import LocaleChangerContainer from '../../containers/LocaleChangerContainer';
import TokenSelectorContainer from '../../containers/TokenSelectorContainer';

const Wrapper = styled.header`
  background: linear-gradient(35deg, #116366, #1bbc78);
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  padding: 24px 0;
  justify-content: space-between;

  @media all and (max-width: 768px) {
    flex-direction: column;
  }
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

const Actions = styled.div`
  align-items: center;
  display: flex;

  TokenSelectorContainer {
    margin-right: 20px;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Link to="/">
            <Title>
              Vexchange
              <small>beta</small>
            </Title>
          </Link>
          <Actions>
            <TokenSelectorContainer />
            <LocaleChangerContainer />
          </Actions>
        </Content>
      </Container>
    </Wrapper>
  );
}

export default Header;
