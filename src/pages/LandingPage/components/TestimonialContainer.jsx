import React, { useState, useEffect } from 'react';
import OpenQuote from '../../../assets/quotes1.png';
import CloseQuote from '../../../assets/quotes2.png';
import { Image } from '../../../components/Image';
import { testimonials } from '../../../Data/testimonials';

export const TestimonialContainer = () => {
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
    <div className='slideshow-container'>
      <div className='mySlides'>
        <div className='quotes'>
          <Image source={OpenQuote} alt='Quotation mark left' />
          <Image source={CloseQuote} alt='Quotation mark right' />
        </div>
        {testimonials
          .filter((testimonial) => testimonial.id === active)
          .map((filtered) => {
            return (
              <p className='fade' key={filtered.id}>
                {filtered.text}
              </p>
            );
          })}
      </div>
    </div>
  );
};
