import { handleActions } from 'redux-actions';
import { List } from 'immutable';
import actions from '../actions';

function resetProducts(products, action) {
  return List(action.payload);
}

export default handleActions(
  {
    [actions.resetProducts]: resetProducts,
  },
  List(),
);
