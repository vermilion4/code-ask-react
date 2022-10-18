import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import UserAvatar from '../assets/Ajiboye.png';
import WhiteLogo from '../assets/WhiteLogo.png';
import '../stylesheets/shared.css';

export const LoggedInHeader = () => {
  return (
    <React.Fragment>
      <header className='question-header'>
        <h1 />
        <div className='search'>
          <FontAwesomeIcon icon={faSearch} className='search-icon' />
          <input type='search' placeholder='Search...' />
        </div>
        <div className='notification'>
          <FontAwesomeIcon icon={faBell} />
          {/* <img className='avatar' alt /> */}
          {/* <img
              src='../IMAGES/ANSWER PAGE ICONS/Status.png'
              className='status'
              alt
            /> */}
          <img src={UserAvatar} alt='' className='userAvatar' />
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
            <FontAwesomeIcon icon={faBell} className='white' />
          </div>
          <img src={UserAvatar} alt='' className='userAvatar' />
        </div>
      </section>
    </React.Fragment>
  );
};
