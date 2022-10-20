import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import UserAvatar from '../assets/Ajiboye.png';
import WhiteLogo from '../assets/WhiteLogo.png';
import '../stylesheets/shared.css';
import { Link } from 'react-router-dom';

export const LoggedInHeader = () => {
  return (
    <React.Fragment>
      <header className={'question-header'}>
        <div className='search'>
          <FontAwesomeIcon icon={faSearch} className='search-icon' />
          <input type='search' placeholder='Search...' />
        </div>
        <div className='notification'>
          <FontAwesomeIcon icon={faBell} />
          <img src={UserAvatar} alt='' className='userAvatar' />
        </div>
      </header>
      <section className='question-header-mobile'>
        <div className='logo'>
          <Link to='/'>
            <img src={WhiteLogo} alt='' />
          </Link>
        </div>
        <div className='mobile-notification'>
          <div className='mobile-icons'>
            <FontAwesomeIcon
              icon={faSearch}
              className='search-icon-mobile white'
            />
            <FontAwesomeIcon icon={faBell} className='white' />
          </div>
          <img src={UserAvatar} alt='' className='userAvatar' />
        </div>
      </section>
    </React.Fragment>
  );
};
