const initialState = {
  items: [
    {
      username: 'Vash',
      password: '1234'
    }
  ],
  isAuth: true
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'AUTH_SET_FORM':
      return {
        ...state,
        items: payload,
        isAuth: true
      };
    default:
      return state;
  }
}