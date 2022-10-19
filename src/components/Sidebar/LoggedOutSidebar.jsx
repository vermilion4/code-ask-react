import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPollH } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Logo from '../../assets/whiteLogoSym.png';
import Logout from '../../assets/logout.png';

export const LoggedOutSidebar = () => {
  const [hover, setHover] = useState(false);

  const openSidebar = {
    width: '250px',
  };
  const closeSidebar = {
    width: '85px',
  };

  function handleHover() {
    setHover(!hover);
  }

  return (
    <React.Fragment>
      <div
        id='mySidebar'
        className={`sidebar ${hover ? 'openSidebar' : null}`}
        style={hover ? openSidebar : closeSidebar}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}>
        <div className='sidebar-logo'>
          <Link to={'/'}>
            <img src={Logo} className='logo-icon' />
            <span className='icon-text logo-text'>CodeAsk</span>
          </Link>
        </div>
        <div className='lower-sidebar'>
          <div className='sidebar-links'>
            <Link to={'/ask-question'} className='active-link'>
              <FontAwesomeIcon icon={faPollH} className='material-icons' />
              <span className='icon-text'></span>
              Questions
            </Link>
            <br />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
