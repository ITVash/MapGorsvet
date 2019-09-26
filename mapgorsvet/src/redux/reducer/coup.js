const initialState = {
  items: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_COUP':
      return {
        ...state,
        items: payload
      };
    case 'UPP_COUP':
      return {
        ...state,
        items: [
          ...state,
          payload
        ]
      };
    default:
      return state;
  }
}