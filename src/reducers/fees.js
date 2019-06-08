const initialState = {
  VTHO: {
    tokenTradeFee: 95,
    vetTradeFee: 10,
  },
  OCE: {
    tokenTradeFee: 16,
    vetTradeFee: 10,
  },
  PLA: {
    tokenTradeFee: 850,
    vetTradeFee: 10,
  },
  SHA: {
    tokenTradeFee: 85,
    vetTradeFee: 15,
  },
  TIC: {
    tokenTradeFee: 27,
    vetTradeFee: 10,
  },
  DBET: {
    tokenTradeFee: 4,
    vetTradeFee: 10,
  }
};

export default function fees(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'FETCH_FEES_PENDING':
      return {
        ...state, 
        ...payload,
      };
    case 'FETCH_FEES_FULFILLED':
      return { 
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}
