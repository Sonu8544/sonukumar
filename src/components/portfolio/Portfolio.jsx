import './portfolio.css';
import popular from '../../assets/popular.png'
import adio from '../../assets/adio.png'

const Portfolio = () => {
  const project = [
    {
      image: adio,
      title: "Adio eCommerse Full Stack Project",
      description: "t looks like you're trying to define a Tailwind CSS className for a border with a hover effect. In Tailwind CSS, you can use the border and hover utilities to achieve this. Here's an example of how you can create a className with a 2-pixel red border that appears on "
    },
    {
      image: popular,
      title: "eCommerse Full Stack Project",
      description: "t looks like you're trying to define a Tailwind CSS className for a border with a hover effect. In Tailwind CSS, you can use the border and hover utilities to achieve this. Here's an example of how you can create a className with a 2-pixel red border that appears on "
    },
    {
      image: "https://images.pexels.com/photos/987586/pexels-photo-987586.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "eCommerse Project",
      description: "t looks like you're trying to define a Tailwind CSS className for a border with a hover effect. In Tailwind CSS, you can use the border and hover utilities to achieve this. Here's an example of how you can create a className with a 2-pixel red border that appears on "
    },
    {
      image: "https://images.pexels.com/photos/220053/pexels-photo-220053.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "eCommerse Project",
      description: "t looks like you're trying to define a Tailwind CSS className for a border with a hover effect. In Tailwind CSS, you can use the border and hover utilities to achieve this. Here's an example of how you can create a className with a 2-pixel red border that appears on "
    },
    {
      image: "https://images.pexels.com/photos/6348047/pexels-photo-6348047.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "eCommerse Project",
      description: "t looks like you're trying to define a Tailwind CSS className for a border with a hover effect. In Tailwind CSS, you can use the border and hover utilities to achieve this. Here's an example of how you can create a className with a 2-pixel red border that appears on "
    },
    {
      image: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      title: "eCommerse Project",
      description: "t looks like you're trying to define a Tailwind CSS className for a border with a hover effect. In Tailwind CSS, you can use the border and hover utilities to achieve this. Here's an example of how you can create a className with a 2-pixel red border that appears on "
    }
  ]

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2> &lt; Portfolio /&gt;</h2>
      <div className="container portfolio__container">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
          {project.map((item, index) => (
            <div className="max-w-sm bg-[#2c2c6c] border shadow-2xl overflow-hidden rounded-lg hover:bg-transparent hover:border-2 hover:border-solid hover:border-[#4db5ff] hover:scale-[1.05] transition duration-1000 ease-in-out">
              <a href="#">
                <img className="rounded-t-lg h-[220px] object-cover hover:scale-[1.05] transition duration-300 ease-in-out" src={item.image} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-4 text-xl tracking-tight dark:text-gray-200"> {item.title} </h5>
                </a>
                <p className="mb-4 text-[15px] font-normal text-gray-400 line-clamp-5 leading-tight">{item.description}</p>
                <div className='flex justify-between px-5'>
                  <a title="Follow me on Linkedin" href="https://www.linkedin.com/in/sonukumar8544" target="_blank" className="block w-8 h-8 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110">
                    <img className="object-cover object-center w-full h-full rounded-full" src="data:image/png;base64,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" alt={index} />
                  </a>
                  <a title="Follow me on Linkedin" href="https://www.linkedin.com/in/sonukumar8544" target="_blank" rel="noreferrer" className="block w-8 h-8 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110">
                    <img className="object-cover object-center w-full h-full rounded-full" src="data:image/png;base64,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" alt={index} />
                  </a>
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





{/* <div key={index} className="cardHover w-full rounded-lg shadow-lg p-3 flex flex-col justify-center items-center cursor-pointer">
<div className="mb-8 cardImage">
  <img className="imageHover object-center object-cover rounded-sm h-[220px] w-[100%]" src={item.image} alt={index} />
</div>
<div className="text-center">
  <p className="text-xl text-white font-bold mb-2">{item.title}</p>
  <p className="text-base projectDescription text-white line-clamp-3 leading-tight">{item.description}</p>
</div>
<div className='projectIcon pt-4' id='projectIcon'>
  <div className='projectIcon pt-4' id='projectIcon'>
    <div>
      <a title="Follow me on Linkedin" href="https://www.linkedin.com/in/sonukumar8544" target="_blank" className="block w-8 h-8 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110">
        <img className="object-cover object-center w-full h-full rounded-full" src="data:image/png;base64,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" alt={index} />
      </a>

    </div>

    <div>
      <a title="Follow me on Linkedin" href="https://www.linkedin.com/in/sonukumar8544" target="_blank" rel="noreferrer" className="block w-8 h-8 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110">
        <img className="object-cover object-center w-full h-full rounded-full" src="data:image/png;base64,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" alt={index} />
      </a>
    </div>

  </div>
</div>
</div> */}




