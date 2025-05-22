import React, { useState } from 'react';
import './assets/Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    travelers: '',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
   
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h2>Plan Your Dream Vacation</h2>
        <p>Fill out the form below and we'll help you plan your perfect trip!</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Desired Destination"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              name="travelers"
              value={formData.travelers}
              onChange={handleChange}
              placeholder="Number of Travelers"
              min="1"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Additional Information"
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
