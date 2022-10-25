import React from 'react';
import Testifier1 from '../assets/testifier1.png';
import Testifier2 from '../assets/testifier2.png';
import Testifier3 from '../assets/testifier3.png';
import Testifier4 from '../assets/testifier4.png';
import Testifier5 from '../assets/testifier5.png';
import { Image } from '../components/Image';
export const testimonialPeople = [
  {
    id: 0,
    image: <Image source={ Testifier2 } />,
    name: 'Stella Dame',
    role: 'UI/UX Researcher'
  },
  {
    id: 1,
    image: <Image source={ Testifier3 } />,
    name: 'Tonia Morales',
    role: 'Web Associate Director'
  },
  {
    id: 2,
    image: <Image source={ Testifier1 } />,
    name: 'Teddy Max',
    role: 'Senior Director at Bajigur.us'
  },
  {
    id: 3,
    image: <Image source={ Testifier4 } />,
    name: 'Patricia Banks',
    role: 'Tech Evangelist'
  },
  {
    id: 4,
    image: <Image source={ Testifier5 } />,
    name: 'Mary James',
    role: 'Developer at AirBnB'
  }
];
