import React, { useState, useRef, useEffect } from 'react';
import { Box, Flex, Text } from 'rebass';
import styled from '@emotion/styled';
import ClipboardJS from 'clipboard';
import { useTheme } from 'emotion-theming';
import QRCode from 'qrcode';
import { useParams, useHistory } from "react-router-dom";

import tokens from '../../constants/tokens.json';

import TokenSelector from '../../components/TokenSelector';
import Steps from '../../components/Steps';
import Calculator from '../../components/Calculator';
import NoConnex from '../../components/NoConnex';

const Canvas = styled.canvas`
  cursor: pointer;
  text-align: center;
  transition: all 0.1s ease-in;

  &:hover {
    transform: scale(1.01);
  }
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.green};
  font-family: ${props => props.theme.fonts.heading};
  text-align: center;

  span {
    color: ${props => props.theme.colors.black};
    font-family: ${props => props.theme.fonts.body};
    font-size: 1.2rem;
  }
`;

const CanvasWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  p {
  }
`;

function Token() {
  const theme = useTheme();
  const params = useParams();
  const history = useHistory();
  const ref = useRef(null);
  const [token, setToken] = useState(tokens[params.token.toUpperCase()]);

  const onTokenSelect = selectedToken => {
    history.push(selectedToken.symbol)
  };

  useEffect(() => {
    const clipboard = new ClipboardJS(ref.current);

    clipboard.on('success', (e) => {
      alert('copied');
      e.clearSelection();
    });

  }, []);

  useEffect(() => {
    QRCode.toCanvas(ref.current, tokens[params.token.toUpperCase()].address, {
      width: 200,
      margin: 0,
      color: {
        dark: theme.colors.black,
        light: theme.colors.background,
      }
    });

    setToken(tokens[params.token.toUpperCase()]);
  }, [ params ]);

  return (
    <div>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        sx={{
          marginBottom: '40px',
        }}
      >
        <Box>
          <Title>
            { token.symbol }
            <span>.exchange</span>
          </Title>
        </Box>
        <Box
          width="150px"
        >
          <TokenSelector
            onTokenSelect={onTokenSelect}
            selectedToken={token}
            tokens={tokens}
          />
        </Box>
      </Flex>
      
      <Box
        sx={{
          mx: 'auto',
          px: 3,
          marginBottom: '20px'
        }}
      >
        <CanvasWrapper>
          <Canvas
            ref={ref}
            data-clipboard-text={token.address} />
          <small>click to copy</small>
        </CanvasWrapper>
        <Text
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: '40px',
            marginTop: '20px',
          }}>
          { tokens[params.token.toUpperCase()].address }
        </Text>
      </Box>
      <Steps />
      {/* <Prices token={token} /> */}
      {window.connex ? (
        <Calculator token={token} />
      ) : (
        <NoConnex />
      )}
      <Text sx={{ marginTop: '40px' }}>
        <small>Got any issues? Contact @Raleigh_CA on Twitter, Telegram, or email ken.u.diggitt@gmail.com</small>
      </Text>
    </div>
  );
}

export default Token;
