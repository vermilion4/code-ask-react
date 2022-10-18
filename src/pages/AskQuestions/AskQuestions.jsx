import React, { useState, useEffect } from 'react';
import { LoggedInHeader } from '../../components/LoggedInHeader';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import '../../stylesheets/askquestion.css';
import { Editor } from './components/Editor';

export const AskQuestions = () => {
  const [loaded, setLoaded] = useState(true);

  const mediaMatch = window.matchMedia('(max-width: 900px)');
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });
  const styles = {
    container: (isRowBased) => ({
      marginLeft: isRowBased ? '0px' : null,
    }),
  };

  function load() {
    setLoaded(
      !document.querySelector('.sidebar').classList.contains('openSidebar')
    );
  }
  document.addEventListener('mousemove', load);
  return (
    <React.Fragment>
      <Sidebar />
      <div
        id='main'
        style={styles.container(matches)}
        className={loaded ? 'show-sidebar' : 'expand-sidebar'}>
        {/* CONTENT GOES IN HERE */}
        <LoggedInHeader />

        <section className='askquestion-main'>
          <div className='title'>
            <h5>Title</h5>
            <p>Ask your question as directly as possible</p>
            <input
              type='text'
              placeholder='e.g Is there a way to get version from package.json in nodejs code?'
            />
          </div>
          <div className='body'>
            <h5>Body</h5>
            <p>
              Include more details about your question to provide more context
              (can include code snippets)
            </p>
            <Editor placeholder={'Write something...'} />
          </div>
          <div className='tags'>
            <h5>Tags</h5>
            <p>Add up to 5 tags to describe what your question is about</p>
            <input type='text' placeholder='e.g javascript web html ' />
          </div>
        </section>
      </div>
      <div className='mobile-nav-question'>
        <div className='start-line' />
        <div className='mid-line' />
        <div className='end-line' />
      </div>
    </React.Fragment>
  );
};
