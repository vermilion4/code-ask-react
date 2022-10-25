import React from 'react';
import YellowSquare from '../../../assets/square1.png';
import GreenSquare from '../../../assets/square2.png';
import YellowRectangle from '../../../assets/rectangle1.png';
import { Image } from '../../../components/Image';
import { useState, useEffect } from 'react';
import { TestimonialContainer } from './TestimonialContainer';
import { testimonialPeople } from '../../../Data/testimonialPeople';

export const Testimonial = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      if (active < 4) {
        setActive(active + 1);
      } else {
        setActive(0);
      }
    }, 3000);

    return () => {
      clearInterval(id);
    };
  }, [active]);

  return (
    <section className='feedback'>
      {/* RECTANGLE DESIGNS */}
      <Image
        classname={'feedback-rect1'}
        alt={'Square design 1'}
        source={YellowRectangle}
      />
      <Image
        classname={'feedback-rect2'}
        alt={'Square design 2'}
        source={YellowSquare}
      />
      <Image
        classname={'feedback-rect3'}
        alt={'Square design 3'}
        source={GreenSquare}
      />
      <h4>Help us improve our productivity</h4>
      {/* -------------------------------------------- */}
      <div className='quotes-container'>
        <TestimonialContainer />

        <div style={{ textAlign: 'center' }} className='dot-container'>
          {testimonialPeople.map(({ id, image, name, role }) => {
            return (
              <span key={id} className={`dot ${active === id ? 'active' : ''}`}>
                {/* active */}
                {image}
                <span className='designation'>
                  <span>{name}</span>
                  <span>{role}</span>
                </span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};
