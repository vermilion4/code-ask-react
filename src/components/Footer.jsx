
import React from "react"
import Logo from '../assets/footerlogo.png';
import '../stylesheets/shared.css';
import { Link } from 'react-router-dom';


export const Footer = () => {
  return (
    <footer>
      <section className='footer-wrapper'>
        <div className='item1'>
          <img src={Logo} alt='Footer Logo' />
        </div>
        <div className='item2'>
          <ul>
            <p className='footer-head'>Quick links</p>
            <li>
              <Link to={'/answers'}>Questions</Link>
            </li>
            <li>
              {/* <a href='./FAQ.html'>FAQ</a> */}
              <Link to={'/faq'}>FAQ</Link>
            </li>
          </ul>
        </div>
        <div className='item3'>
          <ul>
            <p className='footer-head'>Company</p>
            <li>
            <Link to={'/about-us'}>About Us</Link>
            </li>
            <li>
            <Link to={'/'}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className='item4'>
          <ul>
            <p className='footer-head'>Legal</p>
            <li>
            <Link to={'/'}>Privacy Policy</Link>
            </li>
            <li>
            <Link to={'/'}>Terms</Link>
            </li>
          </ul>
        </div>
        <div className='item5'>
          <ul>
            <p className='footer-head'>Socials</p>
            <li>
              <a href='http://' target='_blank' rel='noopener noreferrer'>
                Facebook
              </a>
            </li>
            <li>
              <a href='http://' target='_blank' rel='noopener noreferrer'>
                LinkedIn
              </a>
            </li>
            <li>
              <a href='http://' target='_blank' rel='noopener noreferrer'>
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div className='hr' />
      {/* NEWSLETTER SECTION */}
      <div className='newsletter'>
        <div className='newsletter-brief'>
          <h4>Subscribe to our newsletter</h4>
          <p>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
        </div>
        <div className='subscribe-email'>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter your email...'
          />
          <label htmlFor='email'>Subscribe</label>
        </div>
      </div>
      <div className='hr' />
      <p className='right-reserved'>
        © Copyright 2022 CodeAsk. All Rights Reserved.
      </p>
    </footer>
  );
};
