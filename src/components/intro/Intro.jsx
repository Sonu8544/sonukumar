import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/sonu.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <div className='flex justify-center mb-10 md:mb-20' >
        <button class="bg-transparent hover:bg-indigo-800 text-white text-[1.5rem] font-semibold hover:text-white py-2 px-10 border-b-2 border-solid border-white rounded">
          About Me
        </button>
      </div>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2.5+ year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>13+ Completed Projects</small>
            </article>
          </div>
          <p className='text-white' >
            I am a Frontend Developer with over 2+ years of experience building intuitive, user-friendly websites and applications. My expertise lies in HTML5, CSS3, TailwindCSS, JavaScript, React js, Next js, Github, and modern frontend frameworks such as React and Next js.
          </p>
          <p>
            Throughout my career, I have had the opportunity to work on a variety of projects, ranging from small business websites to large-scale enterprise applications. I am highly skilled in designing and implementing responsive layouts, as well as optimizing performance and accessibility.
          </p>
          <p>
            I am a proactive team player who is always willing to go the extra mile to ensure that projects are completed on time and to the highest standard. I have excellent communication skills and am comfortable working with both technical and non-technical stakeholders.
          </p>
          <p>
            I am excited to bring my expertise and passion for frontend development to a new challenge, and I am always looking for opportunities to learn and grow in my career.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro