import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer';
import BoxDesigns from './components/BoxDesigns';
import Hero from './components/Hero';
import About from './components/About';
import OurTeam from './components/OurTeam';
import '../../stylesheets/ourteam.css';

export const AboutUs = () => {
  return (
    <React.Fragment>
      <Header />
      <main className='about-main'>
        <BoxDesigns />
        <Hero />
        <About />
        <OurTeam />
      </main>
      <Footer />
    </React.Fragment>
  );
};
