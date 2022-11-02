import React from 'react';
import { Link } from 'react-router-dom';
import WhiteLogo from '../../assets/WhiteLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import UserAvatar from '../../assets/Ajiboye.png';
import { useState } from 'react';

const LoggedInHeaderMobile = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const handleShowMobileSearch = () => {
    setShowMobileSearch(!showMobileSearch);
  };
  return (
    <>
      <section className='question-header-mobile'>
        <div className='logo'>
          <Link to='/'>
            <img src={WhiteLogo} alt='' />
          </Link>
        </div>
        <div className='mobile-notification'>
          <div className='mobile-icons'>
            <FontAwesomeIcon
              onClick={handleShowMobileSearch}
              icon={faSearch}
              className='search-icon-mobile white'
            />
            <FontAwesomeIcon icon={faBell} className='white' />
          </div>
          <img src={UserAvatar} alt='' className='userAvatar' />
        </div>
      </section>
      {showMobileSearch ? (
        <div className='mobile-search-bar'>
          <input type='text' placeholder='Search...' />
        </div>
      ) : null}
    </>
  );
};

export default LoggedInHeaderMobile;
