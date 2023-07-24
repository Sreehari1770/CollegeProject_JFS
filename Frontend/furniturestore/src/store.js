// Create a new file called 'store.js'

import { createStore, combineReducers } from 'redux';
import cartReducer from './cartReducer';
import userReducer from '../src/Redux/useerSlice'
// Combine reducers if needed
const rootReducer = combineReducers({
  cart: cartReducer,
  user:userReducer,
  // Other reducers...
});

// Create the store
// const store = createStore(rootReducer);
// Load state from localStorage (if available)
const persistedCartState = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

// Merge the persisted cart state with the initial state for the cart reducer
const initialCartState = {
  cartItems: persistedCartState,
};

// Create the store
const store = createStore(
  rootReducer,
  { cart: initialCartState, user: {} }, // Initial state for all reducers
);

// Subscribe to the store to save cart state to localStorage whenever it changes
store.subscribe(() => {
  const { cart } = store.getState();
  localStorage.setItem('cartItems', JSON.stringify(cart.cartItems));
});

export default store;
