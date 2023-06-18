import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import todoScreenshot from '../img/todo-screenshot.png';
import bookstoreScreenshot from '../img/bookstore-laptop.png';

const MyPortfolio = () => {
  const buttonClass = 'sm rounded-3xl text-white p-1 bg-[#4F5461] hover:bg-gradient-to-t from-slate-500';
  const projects = [
    {
      id: 1,
      title: 'todo-app',
      screenshot: todoScreenshot,
      stack: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind'],
      liveLink: '',
      sourceLink: '',
    },
    {
      id: 2,
      title: 'Bookstore app',
      screenshot: bookstoreScreenshot,
      stack: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind'],
      liveLink: '',
      sourceLink: '',
    },
    {
      id: 3,
      title: 'Bookstore',
      screenshot: bookstoreScreenshot,
      stack: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind'],
      liveLink: '',
      sourceLink: '',
    },
    {
      id: 4,
      title: 'app',
      screenshot: todoScreenshot,
      stack: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind'],
      liveLink: '',
      sourceLink: '',
    },
    {
      id: 5,
      title: 'Bookstore',
      screenshot: bookstoreScreenshot,
      stack: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind'],
      liveLink: '',
      sourceLink: '',
    },
  ];

  return (
    <div>
      <h1 className="mx-6 mt-[36px] mb-[30px] md:ml-56 md:px-20 text-3xl text-[#4f5461] font-bold font-roboto">My Portfolio</h1>
      <div className="md:ml-56 md:px-10 md:grid md:grid-flow-cols md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full p-6"
          >
            <div className="w-full h-[13.5775em] md:h-72 relative bg-gradient-to-br from-slate-500 rounded-2xl">
              <h3 className="p-4 text-lg text-slate-200">{project.title}</h3>
              <div
                style={{
                  backgroundImage: `url(${project.screenshot})`,
                  backgroundSize: '300px 150px',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  opacity: 0.7,
                  zIndex: -1,
                }}
              />
            </div>
            <div className="md:relative md:opacity-0 md:hover:opacity-100 transition delay-300 hover:ease-out md:left-10 md:-top-60 md:z-40 mt-3 p-2 flex md:flex-row space-x-4 text-[#e6e9f0] text-sm">
              {project.stack.map((tech) => (
                <button
                  key={uuidv4()}
                  type="submit"
                  className={buttonClass}
                >
                  {tech}
                </button>
              ))}
            </div>
            <div className="md:relative md:opacity-0 md:hover:opacity-100 transition delay-1000 hover:ease-out md:left-20 md:-top-48 z-40 ">
              <button
                type="submit"
                className="w-full md:w-2/5 mt-2 font-bold rounded-full text-white p-3 bg-[#4456FB]"
              >
                See the project
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPortfolio;
