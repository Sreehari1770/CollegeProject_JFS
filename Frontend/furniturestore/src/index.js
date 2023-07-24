// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import LoginPage from './LoginPage';
// import Register from './RegisiterPage';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//     {/* <LoginPage/> */}
//     {/* <Register/> */}
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import Register from './RegisiterPage';

import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './homepage';
import TablePage from './Tablepage';
import AboutUs from './AboutUspage';
import ContactUs from './ContactUs';
import Bedpage from './Bedpage';
import SofaPage from './SofaPage';
import ChairPage from './ChairPage';
import ShelvesPage from './ShelvesPage';
import Cart from './Cart';
import Profile from './Profile';
import { Provider } from 'react-redux'; // Import the Provider component
import store from './store'; // Import the Redux store
import { SearchProvider } from './searchContext';
import AddProductPage from './addproductpage';
// import { Provider } from 'react-redux'
// import store1 from './Redux/store.js'

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <SearchProvider>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/tables" element={<TablePage/>} />
        <Route path="/beds" element={<Bedpage/>} />
        <Route path="/sofa" element={<SofaPage/>} />
        <Route path="/chairs" element={<ChairPage/>} />
        <Route path="/shelves" element={<ShelvesPage/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/AddProduct" element={<AddProductPage/>} />

      </Routes>
    </React.StrictMode>
    </SearchProvider>
  </Router>,
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();