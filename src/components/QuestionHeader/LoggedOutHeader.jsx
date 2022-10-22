import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../../stylesheets/shared.css';
import LoggedOutHeaderMobile from './LoggedOutHeaderMobile';

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
      <LoggedOutHeaderMobile />
    </React.Fragment>
  );
};
