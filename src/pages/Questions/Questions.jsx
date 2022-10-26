import React, { useState } from 'react';
import { LoggedInHeader } from '../../components/QuestionHeader/LoggedInHeader';
import { LoggedInMobile } from '../../components/Sidebar/LoggedInMobile';
import NavIcon from '../../components/QuestionHeader/NavIcon';
import { LoggedInSidebar } from '../../components/Sidebar/LoggedInSidebar';
import QuestionsWrapper from './components/QuestionsWrapper';
import '../../stylesheets/questions.css';
import QuestionModal from './components/QuestionModal';


export const Questions = () => {
  const [show, setShow] = useState(false);

  function mobileNav() {
    setShow(!show);
  }

  if (show === false) {
    return (
      <div className='question-main'>
        <LoggedInSidebar />
        <LoggedInHeader />
        <main>
          {/* CONTENT GOES IN HERE */}
          <QuestionsWrapper />
          <QuestionModal />
          {/* CONTENT ENDS HERE */}
        </main>
        <NavIcon onclick={mobileNav} />
      </div>
    );
  } else {
    return <LoggedInMobile onclick={mobileNav} />;
  }
};
