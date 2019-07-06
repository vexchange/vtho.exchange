const tokenMap = {
  VTHO: {
    exchangeAddress: '0xf9F99f982f3Ea9020f0A0afd4D4679dFEe1B63cf',
    address: '0x012345403c589A51b02Ee27BD41339f6114aac6A',
    tokenAddress: '0x0000000000000000000000000000456e65726779',
    name: 'VTHO',
    market: 'vthovet',
  },
  OCE: {
    exchangeAddress: '0xDC391a5dbB89a3F768c41Cfa0e85dcaAF3A91f91',
    address: '0x114E1C8CA8f63B7C5692daFC8CFeB4112e9Ff7b4',
    tokenAddress: '0x0CE6661b4ba86a0EA7cA2Bd86a0De87b0B860F14',
    name: 'OCE',
    market: 'ocevet',
  },
  PLA: {
    exchangeAddress: '0xD293f479254D5F6494c66A4982C7cA514A53D7C4',
    address: '0x84497d7E46F671092f3AC8455f0F7F30890Df5A1',
    tokenAddress: '0x89827F7bB951Fd8A56f8eF13C5bFEE38522F2E1F',
    name: 'PLA',
    market: 'plavet',
  },
  SHA: {
    exchangeAddress: '0xC19cf5Dfb71374b920F786078D37b5225CFcF30E',
    address: '0xD18e5F2cd1012b28fB0007A578089EC6fFB6e2a3',
    tokenAddress: '0x5db3C8A942333f6468176a870dB36eEf120a34DC',
    name: 'SHA',
    market: 'shavet',
  },
  TIC: {
    exchangeAddress: '0x992cd19c2F33d5F5569F17fF047063B3b0ff1adA',
    address: '0x39df9f3aE0FaAfeF6B12330930900707aca7fF1A',
    tokenAddress: '0xa94A33f776073423E163088a5078feac31373990',
    name: 'TIC',
    market: 'ticvet',
  },
  DBET: {
    exchangeAddress: '0x18C2385481cDf28779aC271272398dD61cc8CF3E',
    address: '0x71bE6131a9213b2e333766304B31F88ce3B8721f',
    tokenAddress: '0x1b8EC6C2A45ccA481Da6F243Df0d7A5744aFc1f8',
    name: 'DBET',
    market: 'dbetvet',
  }
};

export default function(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case "SET_TOKEN":
      return tokenMap[payload]
    default:
      return state;
  }
};
