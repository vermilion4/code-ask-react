import { Link } from 'react-router-dom';
import Logo from '../assets/headerlogo.png';
import '../stylesheets/shared.css';

export const Header = () => {
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
            <li>
              <Link to={'/about-us'}>About Us</Link>
            </li>
            <li>
              {/* For testing sake */}
              <Link to={'/ask-question'}>Questions</Link>
            </li>
          </ul>
        </div>
        <div className='header-buttons'>
          <Link to={''} className='btn login'>
            login
          </Link>
          <Link to={'/sign-up'} className='btn create'>
            Create an account
          </Link>
        </div>
        <div className='mobile-nav' onClick='hamburger()'>
          <div className='start' />
          <div className='mid' />
          <div className='end' />
        </div>
      </nav>
      <div className='mobile-nav-menu'>
        <ul className='menu'>
          <li>
            <a href='/question.html'>Questions</a>
          </li>
          <li>
            <a href='/ourteam.html'>Team</a>
          </li>
          <a href='/signin.html' className='login-mobile'>
            Log in
          </a>
          <a href='/signup.html' className='create-mobile'>
            Create an account
          </a>
        </ul>
      </div>
    </header>
  );
};
