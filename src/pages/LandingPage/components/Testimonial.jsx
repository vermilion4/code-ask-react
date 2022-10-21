import YellowSquare from '../../../assets/square1.png';
import GreenSquare from '../../../assets/square2.png';
import YellowRectangle from '../../../assets/rectangle1.png';
import Testifier1 from '../../../assets/testifier1.png';
import Testifier2 from '../../../assets/testifier2.png';
import Testifier3 from '../../../assets/testifier3.png';
import Testifier4 from '../../../assets/testifier4.png';
import Testifier5 from '../../../assets/testifier5.png';
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
