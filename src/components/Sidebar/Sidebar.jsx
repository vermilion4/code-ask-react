import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPollH } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Main } from './Main';

export const Sidebar = () => {
  const [hover, setHover] = useState(false);

  const openSidebar = {
    width: '250px',
  };
  const closeSidebar = {
    width: '85px',
  };

  function handleHover() {
    setHover(!hover);
  }

  return (
    <React.Fragment>
      <div
        id='mySidebar'
        className={`sidebar ${hover ? 'openSidebar' : null}`}
        style={hover ? openSidebar : closeSidebar}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}>
        <Link to={''}>
          <FontAwesomeIcon icon={faHome} className='material-icons' />
          <span className='icon-text'>Dashboard</span>
        </Link>
        <br />
        <Link to={''} className='active-link'>
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
    </React.Fragment>
  );
};
