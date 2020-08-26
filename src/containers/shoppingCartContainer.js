import { connect } from 'react-redux';
import { toCartView } from '../selectors/ShoppingCartSelectors';
import { removeFromCart } from '../actions/ShoppingCartActions';
import ShoppingCart from '../shoppingCart';

function mapStateToProps(state) {
  return {
    cart: toCartView(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onRemoveClick(product) {
      dispatch(removeFromCart(product));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShoppingCart);
