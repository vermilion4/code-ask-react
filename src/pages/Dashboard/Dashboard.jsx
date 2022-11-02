import React, { useState, useEffect } from 'react';
import { LoggedInHeader } from '../../components/QuestionHeader/LoggedInHeader';
import { LoggedInMobile } from '../../components/Sidebar/LoggedInMobile';
import NavIcon from '../../components/QuestionHeader/NavIcon';
import { LoggedInSidebar } from '../../components/Sidebar/LoggedInSidebar';
import '../../stylesheets/dashboard.css';

const Dashboard = ({
  hover,
  setHover,
  hoverState,
  setHoverState,
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
      setHover(false);
      setHoverState(false);
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
        <LoggedInSidebar hover={hover} handleHover={handleHover} />
        <LoggedInHeader />

        <div
          className='dash-body'
          style={hoverState ? closeContent : openContent}
          id='dashboard-mainpage'
        >
          <div className='user-details'>
            <div className='user'>
              <img alt="Muideen's photo" className='profileImage' />
              <div className='details'>
                <h1 id='signed_name' />
                <h3>Backend Developer</h3>
                <div className='icons'>
                  <a href='#'>
                    <i className='fab fa-twitter' />
                  </a>
                  <a href='#'>
                    <i className='fab fa-github' />
                  </a>
                  <a href='#'>
                    <i className='fa fa-clock-o' />
                  </a>
                  <p>last seen this week</p>
                  <a href='#'>
                    <i className='fa fa-map-marker' />
                  </a>
                  <p>Abuja</p>
                </div>
              </div>
            </div>
            <button className='edit-btn'>
              <i className='fa fa-pencil' />
              Edit Details
            </button>
          </div>
        </div>
        <NavIcon onclick={mobileNav} />
      </>
    );
  } else {
    return <LoggedInMobile onclick={mobileNav} />;
  }
};

export default Dashboard;
