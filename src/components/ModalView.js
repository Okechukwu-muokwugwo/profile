import React from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { ImNewTab, ImGithub } from 'react-icons/im';
import { v4 as uuidv4 } from 'uuid';
import { projects } from './Portfolio';

const ModalView = () => {
  // Screenshot previews
  const screenshotPreview = projects.flatMap((project) => (
    Array.from({ length: 3 }, (_, index) => ({
      screenshot: project.screenshot,
      rotation: (index + 1) * 180,
    }))
  )).slice(0, 3);

  const seeBtn = 'w-full flex justify-between rounded-full px-16 py-4 text-white text-base text-center font-sora bg-[#fa4969]';
  return (
    <div className="modal-container">
      <nav className="modal-menu">
        {[
          ['Work', '#portfolio'],
          ['Services', '#'],
          ['About', '#about'],
          ['Contact', '#contact'],
          ['Shop', '#'],
        ].map(([title, url]) => (
          <a
            key={uuidv4()}
            href={url}
          >
            {title}
          </a>
        ))}
        <div className="close-btn">
          <VscChromeClose />
        </div>
      </nav>
      {projects.map((project) => (
        <div key={project.id}>
          <img
            src={project.screenshot}
            alt={project.title}
            className="project-screenshot"
          />
          <div className="profile-info">
            <h3 className="leading-none mb-0 text-sm font-bold">
              Exceptional Design
              <br />
              <span className="mb-4 text-sm">for Ambitious Companies</span>
            </h3>
            <p className="mb-4 text-[0.8rem]">
              I specialized inituitive and appealing interfaces
              that are users-friendly and gives customers&apos; statisfaction
              {' '}
            </p>
            <button type="button" className="p-2 rounded-3xl bg-gradient-to-br from-pink-400 text-white ">Let&apos;s talk</button>
          </div>
          <div className="preview">
            {screenshotPreview.map((screenshot) => (
              <div
                key={uuidv4()}
                className="preview-thumbnail"
              >
                <img
                  src={screenshot.screenshot}
                  alt={project.title}
                  style={{
                    width: '91px',
                    height: '63px',
                    transform: `rotate(${screenshot.rotation}deg)`,
                  }}
                />
              </div>
            ))}
          </div>
          <div className="see-btns">
            <div className={seeBtn}>
              <p>See live</p>
              <ImNewTab />
            </div>
            <div className={seeBtn}>
              <p>See source</p>
              <ImGithub />
            </div>
          </div>
          <p className="modal-project-title">{project.title}</p>
          <div className="modal-tech-stack">
            {project.stack.map((tech) => (
              <button
                key={uuidv4()}
                type="button"
                className="modal-tech-btn"
              >
                {tech}
              </button>
            ))}
          </div>
          <p className="description">{project.description}</p>
        </div>
      ))}
    </div>
  );
};
export default ModalView;
