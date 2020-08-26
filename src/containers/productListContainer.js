import { connect } from 'react-redux';
import actions from '../actions/ShoppingCartActions';
import ProductList from '../productList';

function mapDispatchToProps(dispatch) {
  return {
    onAddClick(product) {
      dispatch(actions.addToCart(product));
    },
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(ProductList);
