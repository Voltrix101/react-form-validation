import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Success.css';

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state;

  if (!formData) {
    return (
      <div className="success-container">
        <h2>No Data Available</h2>
        <button onClick={() => navigate('/')} className="back-button">
          Go Back to Form
        </button>
      </div>
    );
  }

  return (
    <div className="success-container">
      <h2>Registration Successful!</h2>
      <div className="data-display">
        <h3>Submitted Information:</h3>
        <div className="data-grid">
          <div className="data-item">
            <span className="label">First Name:</span>
            <span className="value">{formData.firstName}</span>
          </div>
          <div className="data-item">
            <span className="label">Last Name:</span>
            <span className="value">{formData.lastName}</span>
          </div>
          <div className="data-item">
            <span className="label">Username:</span>
            <span className="value">{formData.username}</span>
          </div>
          <div className="data-item">
            <span className="label">Email:</span>
            <span className="value">{formData.email}</span>
          </div>
          <div className="data-item">
            <span className="label">Phone Number:</span>
            <span className="value">{`${formData.phoneCode} ${formData.phoneNumber}`}</span>
          </div>
          <div className="data-item">
            <span className="label">Country:</span>
            <span className="value">{formData.country}</span>
          </div>
          <div className="data-item">
            <span className="label">City:</span>
            <span className="value">{formData.city}</span>
          </div>
          <div className="data-item">
            <span className="label">PAN Number:</span>
            <span className="value">{formData.panNumber}</span>
          </div>
          <div className="data-item">
            <span className="label">Aadhar Number:</span>
            <span className="value">{formData.aadharNumber}</span>
          </div>
        </div>
      </div>
      <button onClick={() => navigate('/')} className="back-button">
        Go Back to Form
      </button>
    </div>
  );
};

export default Success; 