import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const AskQuestionModal = () => {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <section
      // style={showModal ? { display: 'block' } : { display: 'none' }}
      className={`askquestion-modal ${showModal ? 'show' : ''}`}
    >
      <div className='askquestion-modal-main'>
        <div className='title'>
          <h4>Asking a good question</h4>
          <FontAwesomeIcon
            icon={faClose}
            onClick={handleCloseModal}
            className='close-icon'
          />
        </div>
        <div className='askquestion-modal-content'>
          <p className='first'>
            You are about to ask your first question and the community is here
            to help.
          </p>
          <p className='second'>Here are some tips to guide the process:</p>
          <div className='rules'>
            <p>
              1. <strong>Search the site</strong> Search the site first to make
              sure your question hasn’t been answered.
            </p>
            <p>2. Give direct and easy to understand titles to your question</p>
            <p>3. Describe your process and what you’ve tried</p>
            <p>4. Show some code when needed</p>
          </div>
        </div>
        <div className='bottom'>
          <button onClick={handleCloseModal}>Start writing</button>
          <p onClick={handleCloseModal}>Don't show me this again</p>
        </div>
      </div>
    </section>
  );
};

export default AskQuestionModal;
