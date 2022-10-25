import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { featuresRect } from '../../../Data/featuresRect';
import { FindSolution } from './FindSolution';
import { PostQuestion } from './PostQuestion';

export const Features = () => {
  return (
    <AnimationOnScroll animateIn='animate__fadeInUp'>
      <section className='features'>
        {featuresRect.map(({ id, image }) => {
          return <React.Fragment key={id}>{image}</React.Fragment>;
        })}
        <FindSolution />
        <PostQuestion />
      </section>
    </AnimationOnScroll>
  );
};
