// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// // import React from 'react';
// // import { Provider } from 'react-redux';
// // import store from './store';
// // import CartPage from './cartpage1';
// // const App = () => {
// //   return (
// //     <Provider store={store}>
// //       <CartPage />
// //     </Provider>
// //   );
// // };

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ShelvesPage from './ShelvesPage';

function App() {
  return (
    <Provider store={store}>
      <ShelvesPage />
    </Provider>
  );
}

export default App;








