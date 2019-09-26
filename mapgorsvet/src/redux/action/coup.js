import { coup } from './../../api';

const actions = {
  setCoup: items => ({
    type: 'SET_COUP',
    payload: items
  }),
  fetchCoup: () => dispatch => {
    coup.getAll().then(({data}) => {
      dispatch(actions.setCoup(data));
    });
  }
};

export default actions;