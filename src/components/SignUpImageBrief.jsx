
import React from 'react';
import CyclicDesign1 from '../pages/SignUp/components/CyclicDesign1';
import frame from '../assets/TabandPhoneImage.png';
import Logo2 from '../assets/Frame 33.png';
import { Link } from 'react-router-dom';

function SignUpImageBrief() {
  return (
    <div className='signup-image-brief'>
      <CyclicDesign1 />

    <Link to ={'/'}><img className='codeask-logo' src={Logo2} alt='' /></Link>
        
      

      <h3>A Q&A platform for Software Developers</h3>
      <img className='tabletphone-image' src={frame} alt='' />
    </div>
  );
}

export default SignUpImageBrief;
