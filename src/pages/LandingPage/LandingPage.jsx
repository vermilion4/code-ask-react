import React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header/Header';
import { Features } from './components/Features';
import { Hero } from './components/Hero';
import { Integration } from './components/Integration';
import { Testimonial } from './components/Testimonial';
import 'animate.css';
import '../../stylesheets/landingpage.css';

export const LandingPage = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Hero />
        <Features />
        <Integration />
        <Testimonial />
      </main>
      <Footer />
    </React.Fragment>
  );
};
