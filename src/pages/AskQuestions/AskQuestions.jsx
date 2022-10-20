import React, { useState, useEffect } from 'react';
import { LoggedInHeader } from '../../components/LoggedInHeader';
import NavIcon from '../../components/NavIcon';
import { LoggedInSidebar } from '../../components/Sidebar/LoggedInSidebar';
import '../../stylesheets/askquestion.css';
import Form from './components/Form';

export const AskQuestions = () => {
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

  return (
    <React.Fragment>
      <LoggedInSidebar />
      <LoggedInHeader />
      <div id='main' style={styles.container(matches)}>
        {/* CONTENT GOES IN HERE */}
        <h1 className='askquestion-h1'>Ask a Question</h1>
        <Form />
        <button class='askquestion-button'>POST QUESTION</button>
      </div>
      <NavIcon />
    </React.Fragment>
  );
};
