
import React from 'react';
import Robot from '../../../assets/findsolution.png';
import { Image } from '../../../components/Image';
import { findSolution } from '../../../Data/findSolution';

export const FindSolution = () => {
  return (
    <section className='find-solutions'>
      <div className='brief'>
        <h4>Find solutions</h4>
        {findSolution.map(({ id, text1, text2, text3, image }) => {
          return (
            <div key={id}>
              {image}
              <p>
                {text1} <span className='feature-bd'>{text2}</span> {text3}
              </p>
            </div>
          );
        })}
      </div>
      <div className='solution-image'>
        <Image source={Robot} alt={'Find Solution Image'} />
      </div>
    </section>
  );
};
