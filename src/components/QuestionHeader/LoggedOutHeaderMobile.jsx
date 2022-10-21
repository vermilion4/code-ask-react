import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import WhiteLogo from '../../assets/WhiteLogo.png';

const LoggedOutHeaderMobile = () => {
  return (
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
        </div>
      </div>
    </section>
  );
};

export default LoggedOutHeaderMobile;
