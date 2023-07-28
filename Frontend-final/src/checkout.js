import React, { useState } from 'react';
import { FaCreditCard, FaUser, FaEnvelope, FaMapMarkerAlt, FaCheck, FaCalendarAlt } from 'react-icons/fa';
import './checkout.css';
import Navbar from './NabBar';
import Footer from './footer';

const CheckoutPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Here, you can implement the logic to process the payment and complete the checkout.

    console.log('Order submitted:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('State:', state);
    console.log('Pin Code:', pinCode);
    console.log('Zip Code:', zipCode);
    console.log('Payment Method:', paymentMethod);
    console.log('Expiry Date:', expiryDate);
    alert("order have been placed")
  };

  return (
    <>
    <Navbar/>
    <div className='checkout-space'>
    <div className="checkout-container">
      <h2 id='h2'><FaCreditCard /> Checkout Page</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="checkout-formGroup">
          <FaUser className="icon" />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="checkout-formGroup">
          <FaEnvelope className="icon" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="checkout-formGroup">
          <FaMapMarkerAlt className="icon" />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="checkout-formGroup">
          <FaMapMarkerAlt className="icon" />
          <input
            type="text"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>
        <div className="checkout-formGroup">
          <FaMapMarkerAlt className="icon" />
          <input
            type="text"
            placeholder="Pin Code"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
            required
          />
        </div>
        <div className="checkout-formGroup">
          <FaMapMarkerAlt className="icon" />
          <input
            type="text"
            placeholder="Zip Code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
          />
        </div>
        <div className="checkout-formGroup">
          <FaCreditCard className="icon" />
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            {/* Add more payment options as needed */}
          </select>
        </div>
        {paymentMethod === 'creditCard' && (
          <div className="checkout-formGroup">
            <FaCalendarAlt className="icon" />
            <input
              type="text"
              placeholder="Expiry Date (MM/YY)"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
          </div>
        )}
        <button id='checkout-btn'type="submit"><FaCheck /> Place Order</button>
      </form>
    </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default CheckoutPage;
