const initialState = {
  VET: 0,
  VTHO: 0,
};

export default function calculations(state = initialState, action) {
  const { type, payload, meta } = action;

  switch (type) {
    case 'CALCULATE_VTHO_PENDING':
      return { ...state, ...payload };
    case 'CALCULATE_VET_PENDING':
      return { ...state, ...payload };
    case 'CALCULATE_VTHO_FULFILLED':
      return { ...state, vtho: meta.web3.utils.fromWei(payload) };
    case 'CALCULATE_VET_FULFILLED':
      return { ...state, vet: meta.web3.utils.fromWei(payload) };
    default:
      return state;
  }
}
