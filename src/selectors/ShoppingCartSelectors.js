function addPrice(totalPrice, line) {
  return totalPrice + line.price * line.quantity;
}

function toCartView({ shoppingCart }) {
  const list = Object.values(shoppingCart);
  return Object.freeze({
    list,
    total: list.reduce(addPrice, 0),
  });
}

export { toCartView };
