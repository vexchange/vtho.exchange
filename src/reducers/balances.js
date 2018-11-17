const initialState = {
  vet: 0,
  vtho: 0,
};

export default function balances(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'FETCH_BALANCES_PENDING':
      return { ...state, ...payload };
    case 'FETCH_BALANCES_FULFILLED':
      return { 
        ...state,
        vet: payload[0],
        vtho: payload[1],
      };
    default:
      return state;
  }
}
