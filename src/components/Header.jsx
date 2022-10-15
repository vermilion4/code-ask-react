import Logo from '../assets/headerlogo.png';
import '../stylesheets/shared.css';

export const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <a href='./index.html'>
            <img className='footer-image' src={Logo} alt='Header Logo' />
          </a>
        </div>
        <div className='nav-text'>
          <ul>
            <li>
              <a href='./ourteam.html'>About Us</a>
            </li>
            <li>
              <a href='./question.html'>Questions</a>
            </li>
          </ul>
        </div>
        <div className='header-buttons'>
          <a href='./signin.html' className='btn login'>
            Log in
          </a>
          <a href='./signup.html' className='btn create'>
            Create an account
          </a>
        </div>
        <div className='mobile-nav' onclick='hamburger()'>
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
