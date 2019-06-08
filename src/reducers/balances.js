import tokens from '../tokens.json';

const initialState = {};

for (const key of tokens) {
  initialState[key] = 0;
}

export default function balances(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'FETCH_BALANCES_PENDING':
      return { ...state, ...payload };
    case 'FETCH_BALANCES_FULFILLED':
      return { 
        ...state,
        VET: payload[0],
        VTHO: payload[1],
      };
    default:
      return state;
  }
}
