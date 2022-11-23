import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPollH } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
export const loggedInNavData = [
  {
    id: 0,
    icon: <FontAwesomeIcon icon={ faHome } className='material-icons' />,
    text: 'Dashboard',
    link: '/dashboard'
  },
  {
    id: 1,
    icon: <FontAwesomeIcon icon={ faPollH } className='material-icons' />,
    text: 'Questions',
    link: '/questions'
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={ faCommentDots } className='material-icons' />,
    text: 'Discussions',
    link: '/discuss'
  },
  // {
  //   id: 3,
  //   icon: <FontAwesomeIcon icon={ faGear } className='material-icons' />,
  //   text: 'Settings',
  //   link: '/setting'
  // }
];
