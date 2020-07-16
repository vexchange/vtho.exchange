import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Flex, Text } from 'rebass';

function Prices({ token }) {
  const [vexchangePrice, setVexchangePrice] = useState(0);
  useEffect(() => {
    axios.get(`https://vexchange-api.com/api/current/${token.token}`).then(({ data }) => {
      setVexchangePrice(data.buy.vet)
    });
  }, []);
  return (
    <Flex
      justifyContent="space-between"
      sx={{
        marginTop: '40px'
      }}
    >
      <Box>
        <Text
          fontSize={[1]}
          sx={{
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}
        >
          VexChange price
        </Text>
        <Text
          fontSize={[3]}
          fontFamily="monospace"
        >
          { vexchangePrice }
        </Text>
      </Box>
      <Box>
        <Text
          fontSize={[1]}
          sx={{
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}
        >
          Exchange price
        </Text>
        <Text
          fontSize={[3]}
          fontFamily="monospace"
        >
          0.0043
        </Text>
      </Box>
    </Flex>
  );
}

export default Prices;
