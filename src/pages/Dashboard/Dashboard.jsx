import React, { useState, useEffect } from 'react';
import { LoggedInHeader } from '../../components/QuestionHeader/LoggedInHeader';
import { LoggedInMobile } from '../../components/Sidebar/LoggedInMobile';
import NavIcon from '../../components/QuestionHeader/NavIcon';
import { LoggedInSidebar } from '../../components/Sidebar/LoggedInSidebar';
import '../../stylesheets/dashboard.css';
import UserImage from '../../assets/Ajiboye-big.png';
import { Link, NavLink } from 'react-router-dom';
import { questionList } from '../../Data/questionList';

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
      marginLeft: '250px',
      width: '80%',
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
      <>
        <LoggedInSidebar hover={hover} handleHover={handleHover} />
        <LoggedInHeader />

        <div id='dashboard-mainpage'>
          <div
            className='dash-body'
            style={hoverState ? closeContent : openContent}
          >
            <div className='user-details'>
              <div className='user'>
                <div className='profileImage'>
                  <img alt="Muideen's photo" src={UserImage} />
                </div>
                <div className='details'>
                  <h1 id='signed_name'>Ajiboye Muideen</h1>
                  <h3>Backend Developer</h3>
                  <div className='icons'>
                    <div className='user-social-links'>
                      <a href='#'>
                        <i className='fab fa-twitter' />
                      </a>
                      <a href='#'>
                        <i className='fab fa-github' />
                      </a>
                    </div>
                    <div className='last-seen-location-container'>
                      <div className='last-seen'>
                        <a href='#'>
                          <i className='fa fa-clock-o' />
                        </a>
                        <p>last seen this week</p>
                      </div>
                      <div className='location'>
                        <a href='#'>
                          <i className='fa fa-map-marker' />
                        </a>
                        <p>Abuja</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className='edit-btn'>
                <i className='fa fa-pencil' />
                Edit Details
              </button>
            </div>
            <div className='dashboard-mainpage'>
              <div className='stats-col'>
                <h1>Stats</h1>
                <div className='stat-numbers'>
                  <div className='answer'>
                    <h3>3</h3>
                    <p>Answers</p>
                  </div>
                  <div className='question'>
                    <h3>0</h3>
                    <p>Questions</p>
                  </div>
                </div>
              </div>
              <div className='about-col'>
                <h1>About</h1>
                <p>
                  Backend Developer with special interest in building cloud
                  infrastructure
                </p>
                <div className='top-post'>
                  <div className='pre-list'>
                    <h1>Top posts</h1>
                    <div className='pre-list-links'>
                      <NavLink to={'/dashboard'} className='pre-list-link'>
                        All
                      </NavLink>
                      <NavLink to={'/questions'} className='pre-list-link'>
                        Questions
                      </NavLink>
                      <NavLink to={'/ask-question'} className='pre-list-link'>
                        Answers
                      </NavLink>
                    </div>
                  </div>
                  <div className='question-lists'>
                    {questionList.map(({ question, date }) => {
                      return (
                        <div className='question-list'>
                          <Link to={''}>{question}</Link>
                          <Link to={''} href>
                            {date}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
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
