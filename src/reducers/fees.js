const initialState = {
  vet: {
    refund: 7,
    deposit: 15,
    cost: 5,
    gas: 10,
  },
  vtho: {
    refund: 50,
    deposit: 100,
    cost: 40,
    gas: 95,
  }
};

export default function fees(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'FETCH_FEES_PENDING':
      return { ...state, ...payload };
    case 'FETCH_FEES_FULFILLED':
      return { 
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}
