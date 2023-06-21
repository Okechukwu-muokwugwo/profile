import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import todoScreenshot from '../img/todo-screenshot.png';
import bookstoreScreenshot from '../img/bookstore-laptop.png';

const Portfolio = () => {
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
    <div id="portfolio">
      <h1 className="heading">My Portfolio</h1>
      <div className="md:ml-56 md:px-10 md:grid md:grid-flow-cols md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full p-6"
          >
            <div className="w-full my-[32px] h-[15.5775em] md:h-72 relative rounded-2xl sample">
              <h3 className="project-title">{project.title}</h3>
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
              <div className="md:opacity-0 md:hover:opacity-100">
                <div className="tech-stack">
                  {project.stack.map((tech) => (
                    <button
                      key={uuidv4()}
                      type="submit"
                      className="tech-btn"
                    >
                      {tech}
                    </button>
                  ))}
                </div>
                <button
                  type="submit"
                  className="see-project"
                >
                  See the project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
