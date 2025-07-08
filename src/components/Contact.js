import React, { useState } from 'react';
import { ArrowRight, Facebook, Linkedin, Instagram, Github } from 'lucide-react';
import './ContactForm.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState(''); // New state for submission message

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    console.log('Validation errors:', newErrors);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
    setSubmitMessage(''); // Clear any previous submission message
  };

  const handleSubmit = async (e) => { // Made handleSubmit async
    e.preventDefault();
    console.log('Submit button clicked, form data:', formData);

    if (validateForm()) {
      setSubmitMessage("Sending...."); // Set loading message
      console.log('Form is valid, attempting submission to Web3Forms');

      const dataToSend = new FormData();
      dataToSend.append("fullName", formData.fullName);
      dataToSend.append("email", formData.email);
      dataToSend.append("phone", formData.phone);
      dataToSend.append("message", formData.message);
      dataToSend.append("access_key", "3c479ba8-47b0-4488-9153-cc6ad1603602"); // **IMPORTANT: Replace with your actual Web3Forms Access Key**

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: dataToSend
        });
        const result = await response.json();

        if (result.success) {
          setSubmitMessage("Form Submitted Successfully!");
          setShowSuccessPopup(true);
          // Reset form after submission
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            message: ''
          });
          setErrors({});
        } else {
          console.error("Web3Forms Error:", result);
          setSubmitMessage(`Submission failed: ${result.message || 'An unknown error occurred.'}`);
        }
      } catch (error) {
        console.error("Network or Fetch Error:", error);
        setSubmitMessage("Failed to connect to the server. Please try again.");
      }
    } else {
      setSubmitMessage("Please correct the errors in the form.");
      console.log('Form validation failed');
    }
  };

  const closePopup = () => {
    console.log('Closing popup');
    setShowSuccessPopup(false);
    setSubmitMessage(''); // Clear message after closing popup
  };

  return (
    <div id="contact-container">
      <h2 className="page-heading">Contact</h2>
      <div className="contact-content">
        {/* Left Section - Title and Decorative Elements */}
        <div className="left-section">
          <div className="title-container">
            <h1 className="main-title">
              <div className="div-one">LET'S</div>
              <div className="div-two">``GET IN</div>
              <div className="div-three">TOUCH</div>
            </h1>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="right-section">
          <form onSubmit={handleSubmit} className="form-container">
            {/* Full Name Field */}
            <div className="input-group">
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder=" "
                value={formData.fullName}
                onChange={handleChange}
                className={`form-input ${errors.fullName ? 'error' : ''}`}
                required
              />
              <label className="form-label" htmlFor="fullName">FULL NAME</label>
              <span className="required-asterisk">*</span>
              {errors.fullName && <span className="error-message">{errors.fullName}</span>}
            </div>

            {/* Email and Phone Row */}
            <div className="input-row">
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  required
                />
                <label className="form-label" htmlFor="email">EMAIL</label>
                <span className="required-asterisk">*</span>
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              <div className="input-group">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder=" "
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                />
                <label className="form-label" htmlFor="phone">PHONE</label>
              </div>
            </div>

            {/* Message Field */}
            <div className="input-group">
              <textarea
                name="message"
                id="message"
                placeholder=" "
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`form-textarea ${errors.message ? 'error' : ''}`}
                required
              ></textarea>
              <label className="form-label" htmlFor="message">MESSAGE</label>
              <span className="required-asterisk">*</span>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            {/* Submission Message */}
            {submitMessage && <p className="submission-status-message">{submitMessage}</p>}

            {/* Submit Arrow and Social Icons */}
            <div className="submit-container">
              <div className="social-icons">
                <a href="https://github.com/Prashanth9492" target="_blank" rel="noopener noreferrer">
                  <Github className="social-icon" />
                </a>
                <a href="https://linkedin.com/in/ponamandi-prashanth-2a27b0345/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="social-icon" />
                </a>
                <a href="https://www.instagram.com/_prashanth__02_/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="social-icon" />
                </a>
                <a href="https://www.facebook.com/ponamandi.prashanth" target="_blank" rel="noopener noreferrer">
                  <Facebook className="social-icon" />
                </a>
              </div>
              <button type="submit" className="submit-button">
                <ArrowRight className="arrow-icon" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Message Sent Successfully!</h3>
            <p>Thank you for contacting us. We'll get back to you soon.</p>
            <button onClick={closePopup} className="close-popup-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}