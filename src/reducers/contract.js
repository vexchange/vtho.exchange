export default function(state = '', action) {
  const { type, payload } = action;

  switch (type) {
    case "SET_CONTRACT":
      return payload;
    default:
      return state;
  }
};
