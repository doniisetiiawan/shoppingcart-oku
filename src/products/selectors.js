function isInQuery(query) {
  return function (product) {
    return product.name.includes(query.text);
  };
}

function filterProducts({ products, query }) {
  return products.filter(isInQuery(query));
}

export default { filterProducts };
