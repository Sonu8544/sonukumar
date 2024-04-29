import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_sdmglyn',
        'template_a8fo0sl',
        formRef.current,
        'ayEkFP6B2a13BjKlh'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2> &lt; Contact Me /&gt;</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>sksonu8544@gmail.com</h5>
            <a href="mailto:sksonu8544@gmail.com">Send a message</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            className='inputType'
            type="text"
            placeholder="Your Full Name"
            name="name"
            required
          />
          <input
            className='inputType'
            type="text"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <input
            className='inputType'
            type="tel"
            placeholder="Your Phone Number"
            name="phone_number"
            required
          />
          <textarea
            placeholder="Your message"
            rows="5"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
