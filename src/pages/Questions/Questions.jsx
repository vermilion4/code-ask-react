import React, { useState, useEffect } from 'react';
import { LoggedInHeader } from '../../components/QuestionHeader/LoggedInHeader';
import { LoggedInMobile } from '../../components/Sidebar/LoggedInMobile';
import NavIcon from '../../components/QuestionHeader/NavIcon';
import { LoggedInSidebar } from '../../components/Sidebar/LoggedInSidebar';
import QuestionsWrapper from './components/QuestionsWrapper';
import '../../stylesheets/questions.css';
import QuestionModal from './components/QuestionModal';

export const Questions = ({
  hover,
  hoverState,
  handleHover,
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
    };
  }, []);

  let closeContent = {};
  let openContent = {};

  if (windowSize.innerWidth > 900) {
    closeContent = {
      marginLeft: '150px',
      width: '85%',
    };
    openContent = {
      marginLeft: '0px',
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
      <>
        <div className='desktopbackground'></div>
        <div className='question-main'>
          <LoggedInSidebar hover={hover} handleHover={handleHover} />
          <LoggedInHeader />
          <main id='main' style={hoverState ? closeContent : openContent}>
            {/* CONTENT GOES IN HERE */}
            <QuestionsWrapper />
            <QuestionModal />
            {/* CONTENT ENDS HERE */}
          </main>
          <NavIcon onclick={mobileNav} />
        </div>
      </>
    );
  } else {
    return <LoggedInMobile onclick={mobileNav} />;
  }
};
