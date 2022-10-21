import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import UserAvatar from '../../assets/Ajiboye.png';
import '../../stylesheets/shared.css';
import LoggedInHeaderMobile from './LoggedInHeaderMobile';

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
      <LoggedInHeaderMobile />
    </React.Fragment>
  );
};
