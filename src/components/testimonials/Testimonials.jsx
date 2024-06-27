import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/sonu8544/",
      name: "Aditya Singh",
      role: "Full-Stack Web Developer. JavaScript | Rails | React | Redux. Improving open-source projects, one commit at a time.",
      test: "Sonu is a talented, committed individual who will leave no stone unturned in his pursuit to provide with the best. His attention to detail and in-depth experience in the field of web development is indeed commendable. He has exhibited exemplary skills in the field, and I hope to see all the great projects coming up!",
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/sonu8544/",
      name: "Kashyap Pavra",
      role: "Full-stack developer | Technical Support Engineer at Microverse",
      test: "Sonu was a wonderful developer to work with! He anticipated everything I need to consider for my website. He also went the extra mile and added details that I hadn't considered! He is helping my business grow, and I will definitely work with him again!”",
    },
    {
      id: 3,
      link: "https://www.linkedin.com/in/sonu8544/",
      name: "Rahul",
      role: "Full Stack Developer| Ruby on Rails | PostgreSQL | JavaScript | React | Redux | Html&Css | Python.",
      test: "I worked with Sonu in the same team and her communication skills are very strong. Her programming skill is one of the bests, given the time frame in the field. She is a good team player.  She will probably fit in most of the companies not only because she's a good team worker, but also because she has very good skills and I know she has much more potential to be shown.",
    },
    {
      id: 4,
      link: "https://www.linkedin.com/in/sonu8544/",
      name: "Rushi Joshi",
      role: "Full-Stack Web Developer. JavaScript | Rails | React | Redux.",
      test: "I mentored Sonu some months ago, and I can say that she is one of those people that you love to work with. She was always interested in what I was trying to teach her, paying attention and always asking questions if something was not clear. When it comes to professional skills, she is really committed to work, always doing her best and going beyond the requirements of the project she's building.",
    },
    {
      id: 5,
      link: "https://www.linkedin.com/in/sonu8544/",
      name: "Prachi",
      role: "Software Developer",
      test: "Throughout all our collaborations, Sonu has always conducted herself politely and kindly. She comes across as someone that's always willing to help and puts the team ahead of herself. But beneath this, I see a strength and determination to distinguish herself. She's not only someone I highly recommend but is also someone I greatly respect.",
    },
    {
      id: 6,
      link: "https://www.linkedin.com/in/sonu8544/",
      name: "Nitish",
      role: "Full Stack Developer | Mindful Mentor | Cheerful Team Player",
      test: "“I worked with Anurag to make my website. I am speechless by looking at his work ethic and dedication. Working with him was the best decision I made.”",
    },
  ];

  return (
    <section id="testimonials">
      <div className="flex justify-center mb-10 md:mb-20">
        <button className="bg-transparent hover:bg-indigo-800 text-white text-[1.5rem] font-semibold hover:text-white py-2 px-10 border-b-2 border-solid border-white rounded">
          Testimonials
        </button>
      </div>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1} // Show one testimonial per view
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide className="testimonial" key={testimonial.id}>
            <div className="m-10 mx-4 max-w-screen-lg overflow-hidden rounded-xl border shadow-lg md:pl-8">
              <div className="flex flex-col overflow-hidden bg-white sm:flex-row md:h-80">
                <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
                  <h2 className="text-xl font-bold text-gray-900 md:text-2xl lg:text-4xl">
                    {testimonial.name}
                  </h2>
                  <p className="mt-2 text-lg text-black">{testimonial.role}</p>
                  <p className="mt-4 mb-8 max-w-md text-gray-500">
                    {testimonial.test}
                  </p>
                  <a
                    href={testimonial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-auto flex w-44 cursor-pointer select-none items-center justify-center rounded-md bg-black px-6 py-2 text-white transition"
                  >
                    <span className="group flex w-full items-center justify-center rounded py-1 text-center font-bold">
                      View LinkedIn
                    </span>
                    <svg
                      className="flex-0 group-hover:w-6 ml-4 h-6 w-0 transition-all"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
                <div className="order-first ml-auto h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
                  <img
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                    alt="testimonial"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
