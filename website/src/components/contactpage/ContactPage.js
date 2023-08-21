import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import './ContactPage.css';

const ContactPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Configure EmailJS with your user ID
    emailjs.init('A0LWzMy74GZ_WOTG9');

    // Send the email using EmailJS
    try {
      const templateParams = {
        email: email,
        first_name: firstName,
        last_name: lastName,
        message: message,
      };

      const response = await emailjs.send(
        'service_w5xvsqa',
        'template_leknuck',
        templateParams
      );

      console.log('Email sent:', response);

      // Show success toast
      toast.success('Email sent successfully!', {
        position: 'top-center',
        autoClose: 3000, // Auto-close after 3 seconds
        hideProgressBar: true,
      });

    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('An error occurred while sending the email.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

  return (
    <div className="contact-form">

      <h2>Contact</h2>
<form onSubmit={handleSubmit}>
  <input
    className="i1"
    type="text"
    placeholder="First Name"
    value={firstName}
    onChange={(e) => setFirstName(e.target.value)}
  />
  <input
    className="i1"
    type="text"
    placeholder="Last Name"
    value={lastName}
    onChange={(e) => setLastName(e.target.value)}
  />
  <input
    className="i1"
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <textarea
    className="ta1"
    placeholder="Message"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
  />
        <button className="btn" type="submit">Submit</button>
      </form>
      <ToastContainer /> {/* This component renders the toast notifications */}
    </div>
  );
};

export default ContactPage;



