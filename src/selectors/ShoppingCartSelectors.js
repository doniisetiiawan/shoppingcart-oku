function addPrice(totalPrice, line) {
  return totalPrice + line.price * line.quantity;
}

function toCartView({ shoppingCart }) {
  const list = shoppingCart.valueSeq();
  return Object.freeze({
    list,
    total: list.reduce(addPrice, 0),
  });
}

export default { toCartView };
