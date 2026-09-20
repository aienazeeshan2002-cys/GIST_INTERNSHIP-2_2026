import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="page-container contact-page">
      <h2>Contact Incident Command</h2>
      {submitted && <div className="alert-success">✓ Transmission received successfully!</div>}
      
      <form onSubmit={handleSubmit} className="contact-form">
        <label>Operator Name</label>
        <input 
          type="text" 
          required 
          value={formData.name} 
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
          className="input-field"
        />

        <label>Operator Email</label>
        <input 
          type="email" 
          required 
          value={formData.email} 
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
          className="input-field"
        />

        <label>Telemetry Message</label>
        <textarea 
          rows="4" 
          required 
          value={formData.message} 
          onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
          className="input-field"
        ></textarea>

        <button type="submit" className="btn btn-primary">Submit Form</button>
      </form>
    </div>
  );
}