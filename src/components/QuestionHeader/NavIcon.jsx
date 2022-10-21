import React from 'react';
import '../../stylesheets/shared.css';

const NavIcon = ({ onclick }) => {
  return (
    <div className='mobile-nav-question' onClick={onclick}>
      <div className='start-line' />
      <div className='mid-line' />
      <div className='end-line' />
    </div>
  );
};

export default NavIcon;
