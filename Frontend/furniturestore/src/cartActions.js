// cartActions.js

export const addToCart = item => {
  return {
    type: 'ADD_TO_CART',
    payload: item,
  };
};

export const removeFromCart = itemId => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: itemId,
  };
};

export const incrementQuantity = itemId => {
  return {
    type: 'INCREMENT_QUANTITY',
    payload: itemId,
  };
};

export const decrementQuantity = itemId => {
  return {
    type: 'DECREMENT_QUANTITY',
    payload: itemId,
  };
};

export const incrementPrice = itemId => {
  return {
    type: 'INCREMENT_PRICE',
    payload: itemId,
  };
};

export const decrementPrice = itemId => {
  return {
    type: 'DECREMENT_PRICE',
    payload: itemId,
  };
};
