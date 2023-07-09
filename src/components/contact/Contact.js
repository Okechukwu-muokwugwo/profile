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
      </div>
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
          <button
            type="submit"
            className="get-in-touch-btn"
          >
            Get in touch
          </button>
        </div>
        <div className="contact-details">
          <p className="author-email">okei.muokwugwo@gmail.com</p>
          <ul className="social-icons">
            <li><a href="https://github.com/Okechukwu-muokwugwo" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><AiFillGithub /></a></li>
            <li><a href="https://twitter.com/@excel4eva" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a></li>
            <li><a href="https://www.linkedin.com/in/okeimuokwugwo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a></li>
            <li><a href="https://wellfound.com/u/okechukwu-muokwugwo" target="_blank" rel="noopener noreferrer" aria-label="AngelList"><FaAngellist /></a></li>
            <li><a href="https://medium.com/@excel4va" target="_blank" rel="noopener noreferrer" aria-label="Medium"><FaMedium /></a></li>
          </ul>

          <p className="author-email">&copy; Okechukwu 2023</p>
        </div>
      </Form>
    </div>
  );
};

export default Contact;
