import { connect } from 'react-redux';
import actions from '../actions';
import selectors from '../selectors';
import ShoppingCart from '../components/shoppingCart';

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
