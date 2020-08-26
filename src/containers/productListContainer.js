import { connect } from 'react-redux';
import { addToCart } from '../actions/ShoppingCartActions';
import ProductList from '../productList';

function mapDispatchToProps(dispatch) {
  return {
    onAddClick(product) {
      dispatch(addToCart(product));
    },
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(ProductList);
