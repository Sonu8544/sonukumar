import './portfolio.css';

const Portfolio = () => {
  const project = [
    {
      image: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      title: "eCommerse Project",
      description: "t looks like you're trying to define a Tailwind CSS class for a border with a hover effect. In Tailwind CSS, you can use the border and hover utilities to achieve this. Here's an example of how you can create a class with a 2-pixel red border that appears on "
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      title: "eCommerse Project",
      description: "t looks like you're trying to define a Tailwind CSS class for a border with a hover effect. In Tailwind CSS, you can use the border and hover utilities to achieve this. Here's an example of how you can create a class with a 2-pixel red border that appears on "
    },
    {
      image: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80",
      title: "eCommerse Project",
      description: "t looks like you're trying to define a Tailwind CSS class for a border with a hover effect. In Tailwind CSS, you can use the border and hover utilities to achieve this. Here's an example of how you can create a class with a 2-pixel red border that appears on "
    },
    {
      image: "https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "eCommerse Project",
      description: "t looks like you're trying to define a Tailwind CSS class for a border with a hover effect. In Tailwind CSS, you can use the border and hover utilities to achieve this. Here's an example of how you can create a class with a 2-pixel red border that appears on "
    },
    {
      image: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      title: "eCommerse Project",
      description: "t looks like you're trying to define a Tailwind CSS class for a border with a hover effect. In Tailwind CSS, you can use the border and hover utilities to achieve this. Here's an example of how you can create a class with a 2-pixel red border that appears on "
    },
    {
      image: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      title: "eCommerse Project",
      description: "t looks like you're trying to define a Tailwind CSS class for a border with a hover effect. In Tailwind CSS, you can use the border and hover utilities to achieve this. Here's an example of how you can create a class with a 2-pixel red border that appears on "
    }
  ]

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2> &lt; Portfolio /&gt;</h2>
      <div className="container portfolio__container">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
          {project.map((item, index) => (
            <div key={index} className="cardHover w-full rounded-lg shadow-lg p-3 flex flex-col justify-center items-center cursor-pointer">
              <div className="mb-8 cardImage">
                <img className="imageHover object-center object-cover rounded-sm h-[220px] w-[100%]" src={item.image} alt={index} />
              </div>
              <div className="text-center">
                <p className="text-xl text-white font-bold mb-2">{item.title}</p>
                <p className="text-base projectDescription text-white line-clamp-3 leading-tight">{item.description}</p>
              </div>
              {/*------------------------- Project link --------------------- */}
              <div className='projectIcon pt-4' id='projectIcon'>
                {/* ... (rest of your code) */}
                <div className='projectIcon pt-4' id='projectIcon'>
                  <div>
                    <a title="Follow me on Linkedin" href="https://www.linkedin.com/in/sonukumar8544" target="_blank" className="block w-8 h-8 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110">
                      <img className="object-cover object-center w-full h-full rounded-full" src="data:image/png;base64,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" alt={index} />
                    </a>

                  </div>

                  <div>
                    <a title="Follow me on Linkedin" href="https://www.linkedin.com/in/sonukumar8544" target="_blank" rel="noreferrer" className="block w-8 h-8 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110">
                      <img className="object-cover object-center w-full h-full rounded-full" src="https://image.shutterstock.com/image-vector/video-icon-vector-camera-player-260nw-1034861974.jpg" alt={index} />
                    </a>
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
