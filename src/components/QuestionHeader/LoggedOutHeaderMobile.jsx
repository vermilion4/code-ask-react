import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import WhiteLogo from '../../assets/WhiteLogo.png';
import { useAuth } from "../../components/hooks/useAuth";

const LoggedOutHeaderMobile = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const { setSearchField } = useAuth();

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
        <img src={WhiteLogo} alt='' />
      </div>
      <div className='mobile-notification'>
        <div className='mobile-icons'>
          <FontAwesomeIcon
            onClick={handleShowMobileSearch}
            icon={faSearch}
            className='search-icon-mobile white'
          />
        </div>
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
    </>
  );
};

export default LoggedOutHeaderMobile;
