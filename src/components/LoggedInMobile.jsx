import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPollH } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Logo from '../assets/WhiteLogo.png';
import Logout from '../assets/logout.png';
import Avatar from '../assets/Avatar.png';

export const LoggedInMobile = ({ onclick }) => {
  return (
    <React.Fragment>
      <div id='mySidebar' className={'sidebar mobile'}>
        <div className='sidebar-logo'>
          <Link to={'/'}>
            <img src={Logo} />
          </Link>
          <FontAwesomeIcon
            icon={faClose}
            className='close-icon'
            onClick={onclick}
          />
        </div>
        <div className='sidebar-profile'>
          <img src={Avatar} alt='' />
          <div className='sidebar-details'>
            <h3>Muideen Ajiboye</h3>
            <p>Edit Profile</p>
          </div>
        </div>
        <div className='sidebar-links'>
          <Link to={''}>
            <FontAwesomeIcon icon={faHome} className='material-icons' />
            <span className='icon-text'>Dashboard</span>
          </Link>
          <br />
          <Link to={'/ask-question'} className='active-link'>
            <FontAwesomeIcon icon={faPollH} className='material-icons' />
            <span className='icon-text'></span>
            Questions
          </Link>
          <br />
          <Link to={''}>
            <FontAwesomeIcon icon={faCommentDots} className='material-icons' />
            <span className='icon-text'></span>
            Discussions
          </Link>
          <br />
          <Link to={''}>
            <FontAwesomeIcon icon={faGear} className='material-icons' />
            <span className='icon-text'></span>
            Settings
            <span />
          </Link>
        </div>
        <div className='sidebar-logout'>
          <Link to={''}>
            <img src={Logout} className='material-icons logout' />
            <span className='icon-text'>Logout</span>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};
