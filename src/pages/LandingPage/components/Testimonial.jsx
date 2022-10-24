import React from 'react';
import YellowSquare from '../../../assets/square1.png';
import GreenSquare from '../../../assets/square2.png';
import YellowRectangle from '../../../assets/rectangle1.png';
import Testifier1 from '../../../assets/testifier1.png';
import Testifier2 from '../../../assets/testifier2.png';
import Testifier3 from '../../../assets/testifier3.png';
import Testifier4 from '../../../assets/testifier4.png';
import Testifier5 from '../../../assets/testifier5.png';
import { Image } from '../../../components/Image';
import { useState } from 'react';
import { TestimonialContainer } from './TestimonialContainer';

export const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([
    {
      text: 'CodeAsk is very helpful for anyone looking for answers to their coding problems. I have received help so many times that I want to share this resource with others',
    },
    {
      text: 'Great source for programming answer on just about any language. if you are just starting to learn programming, you will find a lot of people willing to help with your questions on this platform.',
    },
  ]);
  return (
    <section className='feedback'>
      {/* RECTANGLE DESIGNS */}
      <Image
        classname={'feedback-rect1'}
        fadeInOut
        moveLeft
        moveTop
        alt={'Square design 1'}
        source={YellowRectangle}
      />
      <Image
        classname={'feedback-rect2'}
        fadeInOut
        moveLeft
        moveBottom
        alt={'Square design 2'}
        source={YellowSquare}
      />
      <Image
        classname={'feedback-rect3'}
        fadeInOut
        moveRight
        moveBottom
        alt={'Square design 3'}
        source={GreenSquare}
      />
      <h4>Help us improve our productivity</h4>
      {/* -------------------------------------------- */}
      <div className='quotes-container'>
        <TestimonialContainer testimonials={testimonials} />

        <div style={{ textAlign: 'center' }} className='dot-container'>
          <span className='dot'>
            <Image source={Testifier2} />
            <span className='designation'>
              <span>Stella Dame</span>
              <span>UI/UX Researcher </span>
            </span>
          </span>
          <span className='dot'>
            <Image source={Testifier3} />
            <span className='designation'>
              <span>Tonia Morales</span>
              <span>Web Associate Director </span>
            </span>
          </span>
          <span className='dot active'>
            <Image source={Testifier1} />
            <span className='designation'>
              <span>Teddy Max</span>
              <span>Senior Director at Bajigur.us</span>
            </span>
          </span>
          <span className='dot'>
            <Image source={Testifier4} />
            <span className='designation'>
              <span>Patricia Banks</span>
              <span>Tech Evangelist</span>
            </span>
          </span>
          <span className='dot'>
            <Image source={Testifier5} />
            <span className='designation'>
              <span>Mary James</span>
              <span>Developer at AirBnB </span>
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};
