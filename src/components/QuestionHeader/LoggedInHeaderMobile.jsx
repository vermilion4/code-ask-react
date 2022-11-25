import React from 'react';
import { Link } from 'react-router-dom';
import WhiteLogo from '../../assets/WhiteLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useAuth } from "../../components/hooks/useAuth.js";

const LoggedInHeaderMobile = () => {
  const { user, setSearchField } = useAuth();
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const handleChange = e => {
    setSearchField(e.target.value);
  };

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
          <img src={user.profile_image} alt='' className='userAvatar' />
        </div>
      </section>
      {showMobileSearch ? (
        <div className='mobile-search-bar'>
          <div className='search'>
            <FontAwesomeIcon icon={faSearch} className='search-icon' />
            <input type="search" placeholder="Search..."  onChange = {handleChange}/>
          </div>
        </div>
      ) : null}
      {/* <div className='search'>
          <FontAwesomeIcon icon={faSearch} className='search-icon' />
          <input type='search' placeholder='Search...' />
        </div> */}
    </>
  );
};

export default LoggedInHeaderMobile;
