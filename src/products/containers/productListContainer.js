import { connect } from 'react-redux';
import actions from '../../shopping-cart/actions';
import ProductList from '../components/productList';
import selectors from '../selectors';

function mapStateToProps(state) {
  return {
    products: selectors.filterProducts(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddClick(product) {
      dispatch(actions.addToCart(product));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductList);
