import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import contactImage from '../../assets/contact-me.jpg'
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
      <div className='flex justify-center mb-10 md:mb-20' >
        <button class="bg-transparent hover:bg-indigo-800 text-white text-[1.5rem] font-semibold hover:text-white py-2 px-10 border-b-2 border-solid border-white rounded">
          Let's connect
        </button>


      </div>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <img src={contactImage} alt="sksonu8544@gmail.com" />
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
            className='inputType'
            placeholder="Your message"
            rows="5"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thank you, I'll reply very soon :)</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
