import React from 'react';
import Pen from '../assets/pen.png';
import MiniSearchIcon from '../assets/minisearchicon.png';
import Stack from '../assets/stack.png';
import { Image } from '../components/Image';

export const findSolution = [
  {
    id: 0,
    image: <Image source={ Pen } />,
    text1: 'Find the best answer to your',
    text2: ' technical questions'
  },
  {
    id: 1,
    image: <Image source={ MiniSearchIcon } />,
    text1: 'Search through',
    text2: ' verified',
    text3: ' solutions'
  },
  {
    id: 2,
    image: <Image source={ Stack } />,
    text1: 'Get access to questions and solutions from',
    text2: ' various platforms'
  }

];
