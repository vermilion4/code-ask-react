import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Testifier1 from '../../../assets/testifier1.png';
import Testifier2 from '../../../assets/testifier2.png';
import Testifier3 from '../../../assets/testifier3.png';
import { Image } from '../../../components/Image';

export class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <p className='legend'>Legend 1</p>
          {/* <Image source={Testifier1} classname='testimonial-image' /> */}
          <p>
            CodeAsk is very helpful for anyone looking for answers to their
            coding problems. I have received help so many times that I want to
            share this resource with others
          </p>
        </div>
        <div>
          <p className='legend'>Legend 2</p>
          <Image source={Testifier2} />
        </div>
        <div>
          <p className='legend'>Legend 3</p>
          <Image source={Testifier3} />
        </div>
      </Carousel>
    );
  }
}
