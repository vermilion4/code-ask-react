import React, { useState, useEffect } from 'react';
import { LoggedInHeader } from '../../components/QuestionHeader/LoggedInHeader';
import { LoggedInMobile } from '../../components/Sidebar/LoggedInMobile';
import NavIcon from '../../components/QuestionHeader/NavIcon';
import { LoggedInSidebar } from '../../components/Sidebar/LoggedInSidebar';
import QuestionsWrapper from './components/QuestionsWrapper';
import '../../stylesheets/questions.css';

export const Questions = () => {
  const mediaMatch = window.matchMedia('(max-width: 900px)');
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });
  const styles = {
    container: (noSidebar) => ({
      marginLeft: noSidebar ? '0px' : null,
    }),
  };
  const [show, setShow] = useState(false);

  function mobileNav() {
    setShow(!show);
  }

  if (show === false) {
    return (
      <React.Fragment>
        <LoggedInSidebar />
        <LoggedInHeader />
        {/* <div id='main' style={styles.container(matches)}> */}
          {/* CONTENT GOES IN HERE */}
          <main>
          <QuestionsWrapper/>
          </main>
          {/* CONTENT ENDS HERE */}
        {/* </div> */}
        <NavIcon onclick={mobileNav} />
      </React.Fragment>
    );
  } else {
    return <LoggedInMobile onclick={mobileNav} />;
  }
};
