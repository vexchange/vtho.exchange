import React from 'react';
import { Box as BaseBox, Heading, Text } from 'rebass';
import styled from '@emotion/styled';

const Box = styled(BaseBox)`
  color: #FFFFFF;
  background: #E78383;
  border-radius: 4px;
  margin-top: 40px;
  padding: 12px;
  font-weight: bold;
`;

function NoConnex() {
  return (
    <Box>
      <Heading fontSize={[3, 4, 5]}>
        Connex not detected!
      </Heading>
      <Text
        fontSize={[1]}
      >
        To access the calculator please use <a href="https://chrome.google.com/webstore/detail/comet/jpkkakbelpcambmhdcaoidiejaikiemn?hl=en-US" rel="noopener noreferrer" target="_blank">Comet</a> or <a href="https://env.vechain.org/" target="_blank" rel="noopener noreferrer">Sync</a>.
      </Text>
    </Box>
  )
}

export default NoConnex;
