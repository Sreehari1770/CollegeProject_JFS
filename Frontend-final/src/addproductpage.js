import React, { useState } from 'react';
import axios from 'axios';
import './addproductpage.css'; // Import your CSS file
import Navbar from './NabBar';
import Footer from './footer';

const AddProductPage = () => {
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    image: '',
    description: '',
    type: '', // Add a type property
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate form inputs here (e.g., check if all required fields are filled)

      // Send the product data to the backend
      const response = await axios.post('http://localhost:8080/products/addproducts', productData);
      console.log('Product added:', response.data);

      // Show feedback to the user (e.g., a success message)
      alert('Product added successfully');

      // Optionally, reset the form after successful submission
      setProductData({
        name: '',
        price: '',
        image: '',
        description: '',
        type: '', // Reset type field too
      });
    } catch (error) {
      console.error('Error adding product:', error);
      // Show an error message to the user
      alert('Error adding product');
    }
  };

  return (
    <>
    <Navbar/>
    <div className='add-product-space'>
    <div className="add-product-container">
      <h2>Sell Your Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={productData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="url"
            id="image"
            name="image"
            value={productData.image}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={productData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <input
            type="text"
            id="type"
            name="type"
            value={productData.type}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" id='btn1'>Add Product</button>
      </form>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default AddProductPage;
