import React from 'react';
import '../stylesheets/shared.css';
export const Image = ({ classname, alt, source }) => {
  return <img className={`${classname}`} src={source} alt={alt} />;
};
