import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'patient',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your ${formData.type} request has been submitted. Jarurat Care will contact you soon.`);
    setFormData({ name: '', email: '', type: 'patient', message: '' });
  };

  return (
    <div className="App">
      <h1>Jarurat Care Support</h1>
      <p>Concept prototype for patient/volunteer intake</p>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Full Name" 
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required 
        />
        <select 
          value={formData.type}
          onChange={(e) => setFormData({...formData, type: e.target.value})}
        >
          <option value="patient">I am a Patient</option>
          <option value="volunteer">I want to Volunteer</option>
        </select>
        <textarea 
          placeholder="How can we help you?"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          required
        />
        <button type="submit">Submit Request</button>
      </form>

      <div className="chatbot-concept">
        <h3>AI Chatbot Concept</h3>
        <p>This app can include a rule-based FAQ chatbot to answer queries on visiting hours, registration, and emergency contact, reducing manual work for NGO staff.</p>
      </div>
    </div>
  );
}

export default App;
