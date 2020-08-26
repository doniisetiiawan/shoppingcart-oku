import { connect } from 'react-redux';
import actions from '../actions/ShoppingCartActions';
import selectors from '../selectors/ShoppingCartSelectors';
import ShoppingCart from '../shoppingCart';

function mapStateToProps(state) {
  return {
    cart: selectors.toCartView(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onRemoveClick(product) {
      dispatch(actions.removeFromCart(product));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShoppingCart);
