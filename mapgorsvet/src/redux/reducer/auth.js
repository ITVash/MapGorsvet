const initialState = {
  items: [
    {
      username: 'Vash',
      password: '1234'
    }
  ]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'AUTH_SET_FORM':
      return {
        ...state,
        items: payload
      };
    default:
      return state;
  }
}