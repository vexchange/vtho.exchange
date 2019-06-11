const initialState = {
  OCE: 0,
  DBET: 0,
  VTHO: 0,
  TIC: 0,
  PLA: 0,
  SHA: 0,
  VET: 0,
};

export default function tickers(state = initialState, action) {
  const { type, payload, meta } = action;

  switch (type) {
    case 'FETCH_TICKERS_PENDING':
      return { ...state, ...payload };
    case 'FETCH_TICKERS_FULFILLED':
      const { data } = payload;
      const { token } = meta;

      return { 
        ...state,
        VET: data[0],
        [token.name]: data[1]
      };
    default:
      return state;
  }
}
