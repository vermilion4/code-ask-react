import React from 'react';
import '../stylesheets/shared.css';
export const Image = ({
  classname,
  fadeInOut,
  moveRight,
  moveLeft,
  moveTop,
  moveBottom,
  alt,
  source,
}) => {
  return (
    <img
      className={`${classname} ${fadeInOut && 'fadeInOut'} ${
        moveRight && 'moveRight'
      } ${moveLeft && 'moveLeft'} ${moveTop && 'moveTop'} ${
        moveBottom && 'moveBottom'
      }`}
      src={source}
      alt={alt}
    />
  );
};
