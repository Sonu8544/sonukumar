import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/sonu.jpg";
import "./intro.css";

const Intro = () => {
  const buttonData = [
    { id: 9, text: "HTML5" },
    { id: 10, text: "CSS3" },
    { id: 11, text: "JavaScript" },
    { id: 12, text: "React" },
    { id: 13, text: "Next.js" },
    { id: 14, text: "TailwindCSS" },
    { id: 15, text: "GitHub" },
    { id: 16, text: "Node.js" },
    { id: 17, text: "Express" },
    { id: 18, text: "MongoDB" },
    { id: 19, text: "SQL" },
    { id: 20, text: "REST APIs" },
    { id: 21, text: "GraphQL" },
    { id: 22, text: "Docker" },
    { id: 23, text: "CI/CD" },
  ];

  return (
    <section id="about">
      <div className="flex justify-center md:mb-20 md:mt-[15rem]">
        <button class="bg-transparent md:text-[#4DB5FF]  text-gray-200 text-[2rem] font-semibold hover:text-[#358ac7] py-2 px-10 border-b-2 border-solid border-[#4DB5FF] rounded">
          About Me
        </button>
      </div>
      <div className="container about__container">
        <div className="about-section md:mt-[2rem] ">
          <div className="flex justify-center mb-[3rem]">
            <button class=" hidden md:block bg-transparent text-[#4DB5FF] text-[1.5rem] font-semibold hover:text-[#3585bd] py-1 px-10 border-b-2 border-solid border-[#4DB5FF] hover:border-[#2882c3] rounded">
              Info
            </button>
          </div>
          <p className="text-gray-400">
            I'm a
            <span className="text-xl text-gray-300">
              
              Full Stack Web Developer
            </span>
            building Websites and Web Applications that leads to the success of
            the overall product. Check out some of my work in the
            <span className="text-xl text-gray-300"> Projects </span> section.
            <br /> <br /> I also like sharing content related to the stuff that
            I have learned over the years in
            <span className="text-xl text-gray-300"> Web Development </span>Web
            Development so it can help other people of the Dev Community. Feel
            free to Connect or Follow me on my Linkedin where I post useful
            content related to Web Development and Programming
            <br />
            <br /> I'm open to
            <span className="text-xl text-gray-300">
              
              Job opportunities
            </span>
            where I can contribute, learn and grow. If you have a good
            opportunity that matches my skills and experience then don't
            hesitate to
            <span className="text-xl text-gray-300">contact me </span> .
          </p>
        </div>
        <div className="about__content font-sans mt-[2rem]">
          <div className="flex justify-center mb-[3rem]">
            <button class=" hidden md:block bg-transparent text-[#4DB5FF] text-[1.5rem] font-semibold hover:text-[#3585bd] py-1 px-10 border-b-2 border-solid border-[#4DB5FF] hover:border-[#2882c3] rounded">
              Skill's
            </button>
            <button class="bg-transparent md:hidden text-pink-700 text-[2rem] font-semibold hover:text-pink-600 py-2 px-10 border-b-2 border-solid border-pink-700 rounded">
              Skill's
            </button>
          </div>
          <div className="flex justify-center flex-wrap gap-2 gap-y-10">
            {buttonData.map((button) => (
              <button
                key={button.id}
                className="bg-transparent hover:bg-gray-300 text-gray-300 text-[1rem] font-semibold hover:text-black py-2 px-4 md:px-8 border-b-2 border-solid border-white hover:border-pink-700 rounded"
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
