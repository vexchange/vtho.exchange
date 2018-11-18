import React from 'react';
import Container from '../Container';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fff;
  border-top: 1px solid #e8e8e8;
  margin-top: 64px;
  padding: 24px;
`;

const Title = styled.h3`
  margin: 1em 0;
  letter-spacing: 5px;
  text-transform: uppercase;
`;

const Subtitle = styled.h5`
  margin: 1.67em 0;
  letter-spacing: 5px;
  text-transform: uppercase;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.9em;

  a {
    margin-bottom: 5px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media all and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <div>
            <Title>Vexchange</Title>
          </div>
          <div>
            <Subtitle>Community</Subtitle>

            <Links>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://t.me/montifinance">Telegram Announcements</a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://t.me/montichat">Telegram Chat</a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://discord.gg/UamcJ8t">Discord</a>
            </Links>

          </div>

          <div>
            <Subtitle>Social</Subtitle>

            <Links>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/MontiFinance">Twitter</a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://medium.com/montifinance">Medium</a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Monti/">Github</a>
            </Links>

          </div>

          <div>
            <Subtitle>About</Subtitle>

            <Links>
              <a href="mailto:careers@monti.finance">Careers</a>
              <a href="mailto:contact@monti.finance">Contact</a>
            </Links>

          </div>
        </Content>

      </Container>
    </Wrapper>
  );
}

export default Footer;
