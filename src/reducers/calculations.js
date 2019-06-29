const initialState = {
  VET: 0,
  VTHO: 0,
  OCE: 0,
  PLA: 0,
  TIC: 0,
  SHA: 0,
  DBET: 0,
};

export default function calculations(state = initialState, action) {
  const { type, payload, meta } = action;

  switch (type) {
    case 'CALCULATE_TOKEN':
      const { token } = meta;

      return {
        ...state,
        [token.name]: meta.web3.utils.fromWei(payload)
      }
    case 'CALCULATE_VET':
      return {
        ...state,
        VET: meta.web3.utils.fromWei(payload)
      }
    default:
      return state;
  }
}
