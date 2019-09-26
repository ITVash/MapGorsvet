import data from './../../api/coup';

const actions = {
  setAuth: items => ({
    type: 'AUTH_SET_FORM',
    payload: items
  }),
  fetchAuth: () => dispatch => {
    dispatch(actions.setAuth(data));
  }
};

export default actions;