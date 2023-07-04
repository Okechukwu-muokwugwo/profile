import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ImNewTab, ImGithub } from 'react-icons/im';
import { v4 as uuidv4 } from 'uuid';
import projects from '../../resources/projects';
import './modal.css';
import MenuLinks from '../../resources/menuLinks';

const ModalView = ({ openModalId, setOpenModalId }) => {
  const modal = projects.find((project) => (project.id === openModalId));

  useEffect(() => {
    if (modal) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }
  }, [modal]);

  return (
    <>
      {modal && (
        <div className="modal-container">
          <div key={modal.id} className="modal-content">
            <div className="modal-menu">
              <nav className="modal-links">
                {MenuLinks.map(([title, url]) => (
                  <a key={uuidv4()} href={url}>{title}</a>
                ))}
                <div className="modal-close-btn">
                  <button type="button" onClick={() => setOpenModalId(null)}>&#10005;</button>
                </div>
              </nav>
              <div className="modal-screenshot">
                <img src={modal.screenshot} alt={modal.title} />
              </div>
            </div>
            <div className="see-btns">
              <a href={modal.liveLink} target="_blank" rel="noopener noreferrer">
                <div className="see-btn">
                  <p className="see-live">See live</p>
                  <ImNewTab />
                </div>
              </a>
              <a href={modal.sourceLink} target="_blank" rel="noopener noreferrer">
                <div className="see-btn">
                  <p className="see-live">See source</p>
                  <ImGithub />
                </div>
              </a>
            </div>
            <h3 className="modal-project-title">{modal.title}</h3>
            <div className="modal-tech-stack">
              {modal.stack.map((tech) => (
                <button key={uuidv4()} type="button" className="modal-tech-btn">{tech}</button>
              ))}
            </div>
            <p className="modal-description">{modal.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

ModalView.propTypes = {
  openModalId: PropTypes.number,
  setOpenModalId: PropTypes.func,
};

ModalView.defaultProps = {
  openModalId: null,
  setOpenModalId: () => { },
};

export default ModalView;
