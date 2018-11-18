export default function(state = '', action) {
  const { type, payload } = action;

  switch (type) {
    case "CHANGE_LOCALE":
      return payload;
    default:
      return state;
  }
};
