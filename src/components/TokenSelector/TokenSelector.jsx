import React from 'react';
import { Link as BaseLink, Box } from 'rebass';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Link = styled(BaseLink)`
  position: relative;

  ${props => props.isActive && css`
    &::before {
      background: black;
      color: black;
      content: "";
      display: block;
      height: 2px;
      width: 50px;
      pointer-events: none;
      position: absolute;
      top: 50%;
      left: 0;
  
      transform: translate(0, -50%);
    } 
  `}
`

function TokenSelector({ tokens, onTokenSelect, selectedToken }) {
  const handleTokenSelect = name => {
    onTokenSelect(tokens[name]);
  };

  return (
    <>
      { Object.entries(tokens).map(([name]) => (
        <Box key={name} sx={{ marginBottom: '10px' }}>
          <Link
            isActive={(selectedToken.symbol.toLowerCase() === name.toLocaleLowerCase())}
            variant='nav'
            onClick={() => handleTokenSelect(name)}
            sx={{
              display: 'block',
              cursor: 'pointer',
            }}
          >
            {name}
          </Link>
        </Box>
      ))}
    </>
  );
}

export default TokenSelector;
