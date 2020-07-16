import React, { useState, useRef, useEffect } from 'react';
import { Select } from '@rebass/forms';

function TokenSelector({ tokens, onTokenSelect, selectedToken }) {
  const handleTokenSelect = e => {
    onTokenSelect(tokens[e.target.value]);
  };

  return (
    <Select
      id='token'
      name='token'
      onChange={handleTokenSelect}
      defaultValue={selectedToken.symbol}>
      { Object.entries(tokens).map(([name, address]) => (
        <option
          value={name}
          key={name}
        >
          {name}
        </option>
      ))}
    </Select>
  );
}

export default TokenSelector;
