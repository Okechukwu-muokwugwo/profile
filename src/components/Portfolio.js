import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import projects from '../resources/projects';
import ModalView from './modal/ModalView';

const Portfolio = () => {
  const [openModalId, setOpenModalId] = useState(null);

  const handleSeeProject = (projectId) => {
    setOpenModalId(projectId);
  };

  return (
    <>
      <div id="portfolio">
        <h1 className="heading">My Portfolio</h1>
        <div className="md:ml-56 md:px-10 md:grid md:grid-flow-cols md:grid-cols-2">
          {projects.map(({
            id, title, screenshot, stack,
          }) => (
            <div
              key={id}
              className="w-full p-6"
            >
              <div className="w-full my-[32px] h-[15.5775em] md:h-72 relative rounded-2xl sample">
                <h3 className="project-title">{title}</h3>
                <div
                  style={{
                    backgroundImage: `url(${screenshot})`,
                    backgroundSize: '100%',
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
                    {stack.map((tech) => (
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
                    onClick={() => handleSeeProject(id)}
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
        <ModalView
          openModalId={openModalId}
          setOpenModalId={setOpenModalId}
        />
      </div>
    </>
  );
};

export default Portfolio;
