const initialState = {
  vet: 0,
  vtho: 0,
};

export default function tickers(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'FETCH_TICKERS_PENDING':
      return { ...state, ...payload };
    case 'FETCH_TICKERS_FULFILLED':

      return { 
        ...state,
        vet: payload[1].USD,
        vtho: payload[0].USD,
      };
    default:
      return state;
  }
}
