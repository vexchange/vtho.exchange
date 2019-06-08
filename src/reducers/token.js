const tokenMap = {
  VTHO: {
    exchangeAddress: '0xf9F99f982f3Ea9020f0A0afd4D4679dFEe1B63cf',
    address: '0x012345403c589A51b02Ee27BD41339f6114aac6A',
    name: 'VTHO',
    market: 'vthovet',
  },
  OCE: {
    exchangeAddress: '0xD293f479254D5F6494c66A4982C7cA514A53D7C4',
    address: '0x114E1C8CA8f63B7C5692daFC8CFeB4112e9Ff7b4',
    name: 'OCE',
    market: 'ocevet',
  },
  PLA: {
    exchangeAddress: '0x18C2385481cDf28779aC271272398dD61cc8CF3E',
    address: '0x84497d7E46F671092f3AC8455f0F7F30890Df5A1',
    name: 'PLA',
    market: 'plavet',
  },
  SHA: {
    exchangeAddress: '0xC19cf5Dfb71374b920F786078D37b5225CFcF30E',
    address: '0xD18e5F2cd1012b28fB0007A578089EC6fFB6e2a3',
    name: 'SHA',
    market: 'shavet',
  },
  TIC: {
    exchangeAddress: '0x992cd19c2F33d5F5569F17fF047063B3b0ff1adA',
    address: '0x39df9f3aE0FaAfeF6B12330930900707aca7fF1A',
    name: 'TIC',
    market: 'ticvet',
  },
  DBET: {
    exchangeAddress: '0xDC391a5dbB89a3F768c41Cfa0e85dcaAF3A91f91',
    address: '0x71bE6131a9213b2e333766304B31F88ce3B8721f',
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
