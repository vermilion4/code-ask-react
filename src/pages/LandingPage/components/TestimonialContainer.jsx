import { useState, useEffect } from 'react';
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
      <div className='mySlides fade'>
        <div className='quotes'>
          <Image source={OpenQuote} alt='Quotation mark left' />
          <Image source={CloseQuote} alt='Quotation mark right' />
        </div>
        {testimonials.map(({ id, text }) => {
          return (
            <p key={id} className={id === active ? 'show' : ''}>
              {text}
            </p>
          );
        })}
      </div>
    </div>
  );
};
