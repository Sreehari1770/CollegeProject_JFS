// cartReducer.js

// Create a function to save cart state to localStorage
const saveToLocalStorage = cartItems => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const updatedCartItemsAdd = [...state.cartItems, action.payload];
      saveToLocalStorage(updatedCartItemsAdd);
      return {
        ...state,
        cartItems: updatedCartItemsAdd,
      };
    case 'REMOVE_FROM_CART':
      const indexToRemove = state.cartItems.findIndex(item => item.id === action.payload);
      if (indexToRemove !== -1) {
        const updatedCartItemsRemove = [...state.cartItems];
        updatedCartItemsRemove.splice(indexToRemove, 1);
        saveToLocalStorage(updatedCartItemsRemove);
        return {
          ...state,
          cartItems: updatedCartItemsRemove,
        };
      }
      return state;
    case 'INCREMENT_QUANTITY':
      const updatedCartItemsIncrement = state.cartItems.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      saveToLocalStorage(updatedCartItemsIncrement);
      return {
        ...state,
        cartItems: updatedCartItemsIncrement,
      };
    case 'DECREMENT_QUANTITY':
      const updatedCartItemsDecrement = state.cartItems.map(item => {
        if (item.id === action.payload && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
      saveToLocalStorage(updatedCartItemsDecrement);
      return {
        ...state,
        cartItems: updatedCartItemsDecrement,
      };
    default:
      return state;
  }
};

export default cartReducer;
