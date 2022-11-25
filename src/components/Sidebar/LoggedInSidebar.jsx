import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/whiteLogoSym.png';
import Logout from '../../assets/logout.png';
import { loggedInNavData } from '../../Data/loggedInNavData';

export const LoggedInSidebar = ({
  hover,
  handleHoverClose,
  handleHoverOpen,
}) => {
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
          {loggedInNavData.map(({ id, icon, text, link }) => {
            return (
              <React.Fragment key={id} >
                <NavLink key={id} to={link}>
                  {icon}
                  <span className='icon-text'>{text}</span>
                </NavLink>
                <br />
              </React.Fragment>
            );
          })}
        </div>
        <div className='sidebar-logout'>
          <Link to={''}>
            <img src={Logout} className='material-icons logout' alt='' />
            <span className='icon-text'>Logout</span>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};
