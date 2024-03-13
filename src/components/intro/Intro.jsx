import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/sonu.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>&lt; About Me /&gt;</h2>
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
          <p className='text-white' >passionate full-stack developer with over 2 years of dedicated experience, my expertise predominantly lies in frontend development. Over the course of my career, I've successfully completed 12+ projects, honing my skills in HTML, CSS, JavaScript, Tailwind CSS, React.js, Next.js, and Redux. On the backend, I possess proficiency in Node.js, Express.js, RESTful API development, OAuth authentication, and database management encompassing both MongoDB and SQL. My repertoire extends beyond technical skills; I am well-versed in version control with Git and GitHub, deployment with Heroku, and possess a keen understanding of CI/CD pipelines with tools like Jenkins. Moreover, I prioritize writing clean, maintainable code adhering to industry standards and best practices. My commitment to continuous learning and effective communication further enhances my ability to deliver impactful solutions that meet both client needs and industry expectations.
            reduce 40 word and make pointable </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  ) 
}

export default Intro