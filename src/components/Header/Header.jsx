import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../../assets/headerlogo.png';
import '../../stylesheets/shared.css';
import { headerLinks } from '../../Data/headerLinks';

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
            <Link to={''} className='btn login'>
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
          <div className='start' />
          <div className='mid' />
          <div className='end' />
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
          <Link to='' className={show ? 'login-mobile' : ''}>
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
