import OpenQuote from '../../../assets/quotes1.png';
import CloseQuote from '../../../assets/quotes2.png';
import { Image } from '../../../components/Image';

export const TestimonialContainer = ({ testimonials }) => {
  return (
    <div className='slideshow-container'>
      <div className='mySlides fade'>
        <div className='quotes'>
          <Image source={OpenQuote} alt='Quotation mark left' />
          <Image source={CloseQuote} alt='Quotation mark right' />
        </div>
        <p>
          CodeAsk is very helpful for anyone looking for answers to their coding
          problems. I have received help so many times that I want to share this
          resource with others'
        </p>
      </div>
    </div>
  );
};
