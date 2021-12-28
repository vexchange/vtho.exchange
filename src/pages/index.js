import React, { useRef, useEffect, useState } from 'react';
import { Box, Flex, Text } from 'rebass';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import ClipboardJS from 'clipboard';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useTheme } from 'emotion-theming';
import QRCode from 'qrcode';
import { isMobile } from "react-device-detect";


import styles from '../styles'

const SiteTitle = styled.div`
  background: #f5a78814;
  border-radius: 8px;
  color: #f5a788;
  display: inline-block;
  font-family: VCR, sans-serif;
  font-size: 12px;
  letter-spacing: 1.5px;
  margin-bottom: 20px;
  padding: 8px;
  text-transform: uppercase;
`;

const Canvas = styled.canvas`
  cursor: pointer;
  text-align: center;
  transition: all 0.1s ease-in;

  &:hover {
    transform: scale(1.01);
  }
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.heading};
  text-align: center;
  height: 300px;
  font-size: 3rem;
  margin: 0;
  margin-left: 20px;

  writing-mode: vertical-rl;
  text-orientation: upright;
  padding: 0 34px;
  position: relative;

  &::after {
    content: "exchange";
    font-size: 0.7rem;
    left: 7px;
    bottom: 0;
    writing-mode: horizontal-tb;
    text-orientation: sideways;
    position: absolute;
  }
`;

const CanvasWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Card = styled.div`
  border-radius: 8px;
  padding: 20px;
  background: #121218;
`;

const TokenSelector = styled(Flex)`
  background: #121218;
  border-radius: 8px 8px 0 0;
  padding: 20px;
  background-image: linear-gradient(
    96.84deg,
    #f5a7880A 1.04%,
    #f5a78802 98.99%
  );

`;

const AddressWrapper = styled.div`
  cursor: pointer;
  background: #121218;
  border-radius: 0 0 8px 8px;
  border-top: 1px solid #1C1C22;
  padding: 16px;
  text-align: center;
  font-family: VCR, sans-serif;
  text-transform: uppercase;
`;

const Address = styled.span`
`;

const VTHO = {
  symbol: "VTHO",
  token: "0x0000000000000000000000000000456e65726779",
  address: "0x012345403c589a51b02ee27bd41339f6114aac6a",
  exchange: "0xf9F99f982f3Ea9020f0A0afd4D4679dFEe1B63cf"
}

function Home() {
  const theme = useTheme();
  const ref = useRef(null);

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const clipboard = new ClipboardJS(ref.current);

    clipboard.on('success', (e) => {
      alert('copied');
      e.clearSelection();
    });

  }, []);

  useEffect(() => {
    QRCode.toCanvas(ref.current, VTHO.address, {
      width: isMobile ? 250 : 300,
      margin: 0,
      color: {
        dark: theme.colors.primary,
        light: theme.colors.background,
      }
    });
  }, [ theme.colors ]);

  const onCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  }

  return (
    <Box
      sx={{
        height: '100%',
        maxWidth: 481,
        mx: 'auto',
        pt: isMobile ? 50 : 150,
        px: 3,
      }}
    >
      <SiteTitle>
        vtho.exchange
      </SiteTitle>
      <Box
        sx={{
          marginBottom: '20px'
        }}
      >
        <Box
          sx={{
            display: 'inline-block'

          }}
        >
          <TokenSelector
            alignItems="center"
            flexDirection={isMobile ? 'column' : 'row'}
          >
            <CanvasWrapper>
              <Canvas ref={ref} data-clipboard-text={VTHO.address} />
            </CanvasWrapper>
            {!isMobile ? <Title>{ VTHO.symbol }</Title> : null }
          </TokenSelector>
          <AddressWrapper>
            <Text
              isMobile={isMobile}
              sx={{
                wordBreak: 'break-all',
                letterSpacing: '0.09rem',
                color: theme.colors.primary
              }}
            >
              { copied ? (
                <span>copied!</span>
              ) : (
                <CopyToClipboard text={VTHO.address} onCopy={onCopy}>
                  <Address>{ VTHO.address }</Address>
                </CopyToClipboard>
              )}
            </Text>
          </AddressWrapper>
        </Box>
      </Box>

      <Card>
        <Box px={2}>
          <ol>
            <li>Select VET or VTHO in your VeChain mobile wallet and press transfer.</li>
            <li>Open the QR code scanner (top right corner) and scan the QR code to the right.</li>
            <li>Enter the amount you would like to swap (must be higher than minimum) and complete the transaction.</li>
          </ol>
          <ul>
            <li>
              <small>Save the exchange address to your contacts for convenient access and better security in the event the web interface gets compromised.</small>
            </li>
            <li>
              <small>Price changes with trade size, keep your trades below 1% of the staked assets you see on <a href="https://info.vexchange.io" target="_blank" rel="noopener noreferrer">info.vexchange.io</a>.</small>
            </li>
            <li>
              <small>Do not send funds directly from an exchange.</small>
            </li>
          </ul>
          <Text sx={{ marginTop: '30px' }}>
            <small>
              Got any issues? Join our <a href="https://discord.gg/bzvUNqTENp" target="_blank" rel="noopener noreferrer">Discord</a>
            </small>
          </Text>
        </Box>
      </Card>

      <Global styles={styles} />
    </Box>
  );
}

export default Home;
