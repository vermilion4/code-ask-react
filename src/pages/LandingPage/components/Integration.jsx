import { AnimationOnScroll } from 'react-animation-on-scroll';
import React from 'react';
import GithubLogo from '../../../assets/githublogo.png';
import QuoraLogo from '../../../assets/quoralogo.png';
import StackOverflowLogo from '../../../assets/stackoverflowlogo.png';
import { Image } from '../../../components/Image';

export const Integration = () => {
  return (
    <AnimationOnScroll animateIn='animate__lightSpeedInLeft'>
      <section className='integrations'>
        <h3>Integrated with</h3>
        <div className='integration-logos'>
          <Image source={GithubLogo} alt='Github Logo' />
          <Image source={QuoraLogo} alt='Quora Logo' />
          <Image
            source={StackOverflowLogo}
            alt='Stackoverflow Logo'
            classname={'stackoverflow-logo'}
          />
        </div>
      </section>
    </AnimationOnScroll>
  );
};
