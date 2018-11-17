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
    const { data: { data: vet } } = payload[1];
    const { data: { data: vtho } } = payload[0];

      return { 
        ...state,
        vet: vet.quotes.USD.price,
        vtho: vtho.quotes.USD.price,
      };
    default:
      return state;
  }
}
