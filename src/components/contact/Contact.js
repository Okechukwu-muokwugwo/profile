import React, { useRef } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaTwitter, FaLinkedinIn, FaAngellist, FaMedium,
} from 'react-icons/fa';
import './contact.css';

const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_da2e4jk', 'template_6ccvsqf', form.current, 'JBKhcxFN8lQ9stRBR')
      .then(() => {
        navigate('/mailsent');
      }, (error) => {
        window.confirm(error.text);
      });
    e.target.reset();
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-content">
        <h1 className="contact-title">Interested in collaborating?</h1>
        <p className="contact-text">
          If you have an application you are interested in developing,
          a feature that you need built or a project that need coding,
          I’d love to help you with it.
        </p>
        <Form onSubmit={sendEmail} ref={form} className="contact-form">
          <div className="form-items">
            <div className="contact-inputs">
              <label htmlFor="name">
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Full Name"
                  className="contact-input"
                />
              </label>
              <label htmlFor="email">
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="Email*"
                  required
                  className="contact-input"
                />
              </label>
            </div>
            <textarea
              minLength={10}
              rows={6}
              name="message"
              placeholder="Message*"
              required
              className="contact-message"
            />
          </div>
          <button
            type="submit"
            className="get-in-touch-btn"
          >
            Get in touch
          </button>
          <div className="contact-details">
            <p className="author-email">okei.muokwugwo@gmail.com</p>
            <div className="social-icons">
              <AiFillGithub />
              <FaTwitter />
              <FaLinkedinIn />
              <FaAngellist />
              <FaMedium />
            </div>
            <p className="author-email">&copy; Okechukwu 2023</p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
