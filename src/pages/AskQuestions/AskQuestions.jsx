import React, { useState, useEffect } from 'react';
import { LoggedInHeader } from '../../components/QuestionHeader/LoggedInHeader';
import { LoggedInMobile } from '../../components/Sidebar/LoggedInMobile';
import NavIcon from '../../components/QuestionHeader/NavIcon';
import { LoggedInSidebar } from '../../components/Sidebar/LoggedInSidebar';
import '../../stylesheets/askquestion.css';
import Form from './components/Form';
import AskQuestionModal from './components/AskQuestionModal';

export const AskQuestions = ({
  hover,
  setHover,
  hoverState,
  setHoverState,
  handleHoverClose,
  handleHoverOpen,
  windowSize,
  getWindowSize,
  setWindowSize,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      setHover(false);
      setHoverState(false);
    };
  }, []);

  let closeContent = {};
  let openContent = {};

  if (windowSize.innerWidth > 900) {
    closeContent = {
      marginLeft: '250px',
    };
    openContent = {
      marginLeft: '85px',
    };
  } else {
    closeContent = {
      marginLeft: '0px',
    };
    openContent = {
      marginLeft: '0px',
    };
  }

  function mobileNav() {
    setShow(!show);
  }

  if (show === false) {
    return (
      <React.Fragment>
        <LoggedInSidebar
          hover={hover}
          handleHoverClose={handleHoverClose}
          handleHoverOpen={handleHoverOpen}
        />
        <LoggedInHeader />
        <div
          id='main'
          className='ask-question-main'
          style={hoverState ? closeContent : openContent}
        >
          {/* CONTENT GOES IN HERE */}
          <h1 className='askquestion-h1'>Ask a Question</h1>
          <Form />
          <AskQuestionModal />
          
          {/* CONTENT ENDS HERE */}
        </div>
        
        <NavIcon onclick={mobileNav} />
      </React.Fragment>
    );
  } else {
    return <LoggedInMobile onclick={mobileNav} />;
  }
};
