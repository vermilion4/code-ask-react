import React from 'react';
import { Link } from 'react-router-dom';
import WhiteLogo from '../../assets/WhiteLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import UserAvatar from '../../assets/Ajiboye.png';

const LoggedInHeaderMobile = () => {
  return (
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
  );
};

export default LoggedInHeaderMobile;
