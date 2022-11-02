import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { loggedInNavData } from '../../Data/loggedInNavData';
import Logo from '../../assets/WhiteLogo.png';
import Logout from '../../assets/logout.png';
import Avatar from '../../assets/Avatar.png';

export const LoggedInMobile = ({ onclick }) => {
  return (
    <React.Fragment>
      <div id='mySidebar' className={'sidebar mobile'}>
        <div className='sidebar-logo'>
          <Link to={'/'}>
            <img src={Logo} alt='' />
          </Link>
          <FontAwesomeIcon
            icon={faClose}
            className='close-icon'
            onClick={onclick}
          />
        </div>
        <div className='sidebar-profile'>
          <img src={Avatar} alt='icon' />
          <div className='sidebar-details'>
            <h3>Muideen Ajiboye</h3>
            <p>Edit Profile</p>
          </div>
        </div>
        <div className='sidebar-links'>
          {loggedInNavData.map(({ id, icon, text, link }) => {
            return (
              <React.Fragment>
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
            <img src={Logout} className='material-icons logout' alt='icon' />
            <span className='icon-text'>Logout</span>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};
