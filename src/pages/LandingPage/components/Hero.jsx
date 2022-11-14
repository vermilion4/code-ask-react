
import React from "react"
import { Link } from 'react-router-dom';
import '../../../stylesheets/landingpage.css';
export const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-wrapper animate__animated animate__bounceInDown'>
        <h3>
          Spend less time finding solutions to your technical Questions, help
          others answer theirs
        </h3>
        <p>Make solution finding easy and fast. Focus on building your apps</p>
        <div className='hero-button'>
          <Link to={'/sign-up'} className='hero-btn btn get-started'>
            Get started now
          </Link>
          <Link to={'/questions'} className='hero-btn btn search-btn'>
            Search content
          </Link>
        </div>
      </div>
    </section>
  );
};
