const initialState = {
  items: [],
  currentID: null
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
      case 'SET_CURRENT_ID':
        return {
          ...state,
          currentID: payload
      };
    default:
      return state;
  }
}