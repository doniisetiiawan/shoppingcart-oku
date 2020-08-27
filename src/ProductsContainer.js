import { connect } from 'react-redux';
import thunks from './products/thunks';
import Products from './products';

function mapDispatch(dispatch) {
  return {
    onLoad() {
      dispatch(thunks.fetchProducts());
    },
  };
}

export default connect(
  null,
  mapDispatch,
)(Products);
