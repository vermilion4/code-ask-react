import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../../assets/headerlogo.png';
import '../../stylesheets/shared.css';
import { headerLinks } from '../../Data/headerLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  const [show, setShow] = useState(false);

  function mobileNav() {
    setShow(!show);
  }
  return (
    <header>
      <nav>
        <div>
          <Link to={'/'}>
            <img className='footer-image' src={Logo} alt='Header Logo' />
          </Link>
        </div>
        <div className='nav-text'>
          <ul>
            {headerLinks.map(({ id, link, text }) => {
              return (
                <li key={id}>
                  <NavLink
                    className={(navData) => (navData.isActive ? 'active' : '')}
                    to={link}>
                    {text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='header-buttons'>
          <button>
            <Link to={'/sign-in'} className='btn login'>
              login
            </Link>
          </button>
          <button>
            <Link to={'/sign-up'} className='btn create'>
              Create an account
            </Link>
          </button>
        </div>
        <div className='mobile-nav' onClick={mobileNav}>
          <div className={show ? 'hide' : 'start'} />
          <div className={show ? 'hide' : 'mid'} />
          <div className={show ? 'hide' : 'end'} />
          <FontAwesomeIcon icon={faClose} className={show ? 'close' : 'hide'} />
        </div>
      </nav>
      <div className={show ? 'mobile-nav-menu' : ''}>
        <ul className='menu'>

          <li>
            <Link to={'/about-us'} href='/question.html'>
              About Us
            </Link>
          </li>
          <li>
            <Link to='/questions'>Questions</Link>
          </li>

          <Link to='/sign-in' className={show ? 'login-mobile' : ''}>
            Log in
          </Link>
          <Link to={'/sign-up'} className={show ? 'create-mobile' : ''}>
            Create an account
          </Link>
        </ul>
      </div>
    </header>
  );
};
