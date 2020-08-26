import { connect } from 'react-redux';
import actions from '../actions/ShoppingCartActions';
import ProductList from '../productList';
import selectors from '../selectors/productsSelectors';

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
