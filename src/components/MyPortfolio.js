import React from 'react';
import todoScreenshot from '../img/todo-screenshot.png';
import bookstoreScreenshot from '../img/bookstore-laptop.png';

const MyPortfolio = () => {
  const buttonClass = 'sm md:w-1/5 rounded-3xl text-white p-1 bg-[#4F5461]';
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
      title: 'Bookstore App',
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
      title: 'App',
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
    <section className="container mx-auto border-box md:mt-96">
      <main className="mx-auto p-6">
        <h1 className="mb-4 text-3xl font-bold p-2 text-[#4F5461]">My Portfolio</h1>
        {projects.map((project) => (
          <div key={project.id}>
            <div className="relative">
              <div
                className="absolute inset-0 mix-blend-multiply bg-slate-300 hover:bg-slate-400 rounded-2xl"
                style={{ zIndex: 1 }}
              />
              <h2 className="p-2 text-md font-bold text-gray-500 ">{project.title}</h2>

              <img
                src={project.screenshot}
                alt="project screenshot"
                className="w-4/5 mx-auto rounded-2xl"
              />
            </div>
            <div className="mt-3 p-2 flex justify-around text-[#e6e9f0] text-sm">
              {project.stack.map((tech) => (
                <button key={tech} type="button" className={buttonClass}>
                  {tech}
                </button>
              ))}
            </div>
            <button
              type="button"
              id={project.id}
              className="w-full mt-2 mb-6 font-bold rounded-full text-white p-4 bg-[#4456FB]"
            >
              See the Project
            </button>
          </div>
        ))}
      </main>
    </section>
  );
};

export default MyPortfolio;
