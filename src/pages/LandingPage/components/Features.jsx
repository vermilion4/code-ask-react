import React from 'react';
import { featuresRect } from '../../../Data/featuresRect';
import { FindSolution } from './FindSolution';
import { PostQuestion } from './PostQuestion';

export const Features = () => {
  return (
    <section className='features'>
      {featuresRect.map(({ id, image }) => {
        return <React.Fragment key={id}>{image}</React.Fragment>;
      })}
      <FindSolution />
      <PostQuestion />
    </section>
  );
};
