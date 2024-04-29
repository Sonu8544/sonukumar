import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/sonu8544/',
      name: 'Aditya Singh',
      role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux. Improving open-source projects, one commit at a time.',
      test: "Sonu is a talented, committed individual who will leave no stone unturned in his pursuit to provide with the best. His attention to detail and in-depth experience in the of web development is indeed commendable. He has exhibited exemplary skills in the field, and I hope to see all the great projects coming up!",
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/sonu8544/',
      name: 'Kashyap Pavra',
      role: 'Full-stack developer | Technical Support Engineer at Microverse',
      test: "Sonu was a wonderful developer to work with! He anticipated everything I need to consider for my website. He also went the extra mile and added details that I hadn't considered! He is helping my business grow, and I will definitely work with him again!”",
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/sonu8544/',
      name: 'Rahul',
      role: 'Full Stack Developer| Ruby on Rails | PostgreSQL | JavaScript | React | Redux | Html&Css | Python.',
      test: 'I worked with Sonu in the same team and her communication skills are very strong. Her programming skill is one of the bests, given the time frame in the field. She is a good team player.  She will probably fit in most of the companies not only because she\'s a good team worker, but also because she has very good skills and I know she has much more potential to be shown.',
    },
    {
      id: 4,
      link: 'https://www.linkedin.com/in/sonu8544/',
      name: 'Rushi Joshi',
      role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux.',
      test: "I mentored Sonu some months ago, and I can say that she is one of those people that you love to work with. She was always interested in what I was trying to teach her, paying attention and always asking questions if something was not clear. When it comes to professional skills, she is really committed to work, always doing her best and going beyond the requirements of the project she's building.",
    },
    {
      id: 5,
      link: 'https://www.linkedin.com/in/sonu8544/',
      name: 'Prachi',
      role: 'Software Developer',
      test: "Throughout all our collaborations, Sonu has always conducted herself politely and kindly. She comes across as someone that's always willing to help and puts the team ahead of herself. But beneath this, I see a strength and determination to distinguish herself. She's not only someone I highly recommend but is also someone I greatly respect.",
    },
    {
      id: 6,
      link: 'https://www.linkedin.com/in/sonu8544/',
      name: 'Nitish',
      role: 'Full Stack Developer | Mindful Mentor | Cheerful Team Player',
      test: "“I worked with Anurag to make my website. I am speechless by looking at his work ethic and dedication. Working with him was the best decision I made.”",
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2> &lt; Testimonials /&gt;</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        breakpoints={{ 600: { slidesPerView: 2, } }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
      >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
            <div className="client__avatar">
              <a href={test.link}>
                <BsLinkedin />
              </a>
            </div>
            <h5 className='client__name'>{test.name}</h5>
            <small className="client__review">{test.test}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials