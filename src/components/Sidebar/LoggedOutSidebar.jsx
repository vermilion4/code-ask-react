import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
// import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPollH } from '@fortawesome/free-solid-svg-icons';
// import { faGear } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../assets/whiteLogoSym.png';

export const LoggedOutSidebar = ({ hover, handleHover, handleHoverClose,
  handleHoverOpen }) => {
  const openSidebar = {
    width: '250px',
  };
  const closeSidebar = {
    width: '85px',
  };

  return (
    <React.Fragment>
      <div
        id='mySidebar'
        className={'sidebar'}
        style={hover ? openSidebar : closeSidebar}
        onMouseEnter={handleHoverOpen}
        onMouseLeave={handleHoverClose}
      >
        <div className='sidebar-logo'>
          <Link to={'/'}>
            <img src={Logo} className='logo-icon' alt='' />
            <span className='icon-text logo-text'>CodeAsk</span>
          </Link>
        </div>
        <div className='sidebar-links'>
          <NavLink to={'/questions'}>
            <FontAwesomeIcon icon={faPollH} className='material-icons' />
            <span className='icon-text'></span>
            Questions
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
};
