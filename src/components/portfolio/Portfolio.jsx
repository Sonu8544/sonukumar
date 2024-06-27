import "./portfolio.css";
import { AiOutlineEye } from "react-icons/ai"; // Importing an example icon from react-icons library

const Portfolio = () => {
  const imageOverlayData = [
    {
      id: 1,
      imgSrc:
        "https://media.istockphoto.com/id/1488514106/photo/cheerful-couple-having-fun-while-splashing-each-other-at-sea.jpg?s=2048x2048&w=is&k=20&c=iBBGyprHe00kvC42Qm9FCnyfDJdJC7ZpEhNTyeXFW-k=",
      title: "John Doe 1",
      description:
        "If you have any questions, comments, or concerns, don't hesitate to contact our team. We're here to help!",
      name: "Sonu Kumar",
      github: "https://github.com/sonu8544",
      link: "https://in.ilemjapan.com/",
    },
    {
      id: 1,
      imgSrc:
        "https://media.istockphoto.com/id/1488514106/photo/cheerful-couple-having-fun-while-splashing-each-other-at-sea.jpg?s=2048x2048&w=is&k=20&c=iBBGyprHe00kvC42Qm9FCnyfDJdJC7ZpEhNTyeXFW-k=",
      title: "John Doe 1",
      description:
        "If you have any questions, comments, or concerns, don't hesitate to contact our team. We're here to help!",
      name: "Sonu Kumar",
      github: "https://github.com/sonu8544",
      link: "https://in.ilemjapan.com/",
    },
    {
      id: 1,
      imgSrc:
        "https://media.istockphoto.com/id/1488514106/photo/cheerful-couple-having-fun-while-splashing-each-other-at-sea.jpg?s=2048x2048&w=is&k=20&c=iBBGyprHe00kvC42Qm9FCnyfDJdJC7ZpEhNTyeXFW-k=",
      title: "John Doe 1",
      description:
        "If you have any questions, comments, or concerns, don't hesitate to contact our team. We're here to help!",
      name: "Sonu Kumar",
      github: "https://github.com/sonu8544",
      link: "https://in.ilemjapan.com/",
    },
    {
      id: 2,
      imgSrc:
        "https://media.istockphoto.com/id/1561239522/photo/young-woman-taking-a-photo-of-the-sunset.jpg?s=2048x2048&w=is&k=20&c=OEyqBoT5K3BsTM4S7xnhQde1FiiAmrR_EP-owqZw55c=",
      title: "John Doe 2",
      name: "Sonu Kumar",
      description:
        "If you have any questions, comments, or concerns, don't hesitate to contact our team. We're here to help!",
      github: "https://github.com/sonu8544",
      link: "https://in.ilemjapan.com/",
    },
    {
      id: 3,
      imgSrc:
        "https://cdn.pixabay.com/photo/2023/12/19/21/19/girls-8458409_640.jpg",
      title: "John Doe 3",
      name: "Sonu Kumar",
      description:
        "If you have any questions, comments, or concerns, don't hesitate to contact our team. We're here to help!",
      github: "https://github.com/sonu8544",
      link: "https://in.ilemjapan.com/",
    },
    {
      id: 3,
      imgSrc:
        "https://cdn.pixabay.com/photo/2023/12/19/21/19/girls-8458409_640.jpg",
      title: "John Doe 3",
      name: "Sonu Kumar",
      description:
        "If you have any questions, comments, or concerns, don't hesitate to contact our team. We're here to help!",
      github: "https://github.com/sonu8544",
      link: "https://in.ilemjapan.com/",
    },
  ];

  return (
    <section id="portfolio">
      <div className="flex justify-center mb-10 md:mb-20">
        <button className="bg-transparent hover:bg-indigo-800 text-white text-[1.5rem] font-semibold hover:text-white py-2 px-10 border-b-2 border-solid border-white rounded">
          Latest Works
       </button>
      </div>
      <div className="container portfolio__container">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {imageOverlayData.map((item) => (
            <div key={item.id} className="image-container border-2 relative">
              <img
                src={item.imgSrc}
                alt={`Avatar ${item.id}`}
                className="image"
                style={{ width: "100%" }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white text-center p-2">
                <span className="mr-1">{item.name}</span>
                <AiOutlineEye className="inline-block ml-1" size={20} />
              </div>
              <div className="middle">
                <div className="text">
                  <h4 className="text-[18px] ">{item.title}</h4>
                  <p className="text-gray-300">{item.description}</p>
                  <div className="flex justify-center gap-4">
                    {item?.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="text-white bg-indigo-600 px-4 py-2 mt-2 rounded hover:bg-indigo-700">
                          GitHub
                        </button>
                      </a>
                    )}
                    {item?.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="text-white bg-indigo-600 px-4 py-2 mt-2 rounded hover:bg-indigo-700">
                          Live View
                        </button>
                      </a>
                    )}
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
