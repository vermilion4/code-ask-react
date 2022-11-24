import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import '../../stylesheets/shared.css';
import LoggedInHeaderMobile from './LoggedInHeaderMobile';
import { useAuth } from "../../components/hooks/useAuth.js";


export const LoggedInHeader = () => {
  const { user, setSearchField } = useAuth();

  const handleChange = e => {
    setSearchField(e.target.value);
  };


  return (
    <React.Fragment>
      <header className={'question-header'}>
         <div className='search'>
          <FontAwesomeIcon icon={faSearch} className='search-icon' />
          <input type="search" placeholder="Search..."  onChange = {handleChange}/>
        </div> 
        <div className='notification'>
          <FontAwesomeIcon icon={faBell} />
          <img src={user.profile_image} alt='' className='userAvatar' />
        </div>
      </header>
      <LoggedInHeaderMobile />
    </React.Fragment>
  );
};
