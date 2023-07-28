import React, { useState } from 'react';
import '../src/feedback.css';
import Navbar from './NabBar';
import Footer from './footer';
import axios from 'axios';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(5);

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const customerSupportData = {
        name,
        email,
        description,
      };
  
      try {
        const response = await axios.post('http://localhost:8081/addsupport', customerSupportData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.status === 200) {
          console.log('Feedback Submitted:', customerSupportData);
          // Clear the form after successful submission
          setName('');
          setEmail('');
          setDescription('');
          alert("Thanks for the feedback");
        } else {
          console.log('Failed to submit feedback');
          // Handle error if needed
        }
      } catch (error) {
        console.error('Error submitting feedback:', error);
        // Handle error if needed
      }
    };
  return (
    <>
    <Navbar/>
    <div className='feedback-space'>
    <div className="feedback-form">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            required
          >
            <option value="5">5 (Excellent)</option>
            <option value="4">4 (Good)</option>
            <option value="3">3 (Average)</option>
            <option value="2">2 (Fair)</option>
            <option value="1">1 (Poor)</option>
          </select>
        </div>
        <button id='btn2' type="submit">Submit Feedback</button>
      </form>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default FeedbackForm;