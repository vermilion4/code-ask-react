import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import UserAvatar from '../assets/Ajiboye.png';
import WhiteLogo from '../assets/WhiteLogo.png';
import { Link } from 'react-router-dom';
import '../stylesheets/shared.css';

export const LoggedOutHeader = () => {
  const [loaded, setLoaded] = useState(true);

  const closeNav = {
    marginLeft: '85px',
  };
  const openNav = {
    marginLeft: '250px',
    padding: '0.4rem 2rem',
  };

  function load() {
    setLoaded(
      !document.querySelector('.sidebar').classList.contains('openSidebar')
    );
  }
  document.addEventListener('mousemove', load);
  return (
    <React.Fragment>
      <header className={'question-header'} style={loaded ? closeNav : openNav}>
        <div className='search'>
          <FontAwesomeIcon icon={faSearch} className='search-icon' />
          <input type='search' placeholder='Search...' />
        </div>
        <div className='header-buttons'>
          <button>
            <Link to={''} className='btn login'>
              login
            </Link>
          </button>
          <button>
            <Link to={'/sign-up'} className='btn create'>
              Create an account
            </Link>
          </button>
        </div>
      </header>
      <section className='question-header-mobile'>
        <div className='logo'>
          <img src={WhiteLogo} alt='' />
        </div>
        <div className='mobile-notification'>
          <div className='mobile-icons'>
            <FontAwesomeIcon
              icon={faSearch}
              className='search-icon-mobile white'
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};