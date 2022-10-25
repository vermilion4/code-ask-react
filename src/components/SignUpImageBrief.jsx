import CyclicDesign1 from '../pages/SignUp/components/CyclicDesign1';
import frame from '../assets/TabandPhoneImage.png';
import Logo2 from '../assets/Frame 33.png';

function SignUpImageBrief() {
  return (
    <div className='signup-image-brief'>
      <CyclicDesign1 />

      <a href='./index.html'>
        <img className='codeask-logo' src={Logo2} alt='' />
      </a>

      <h3>A Q&A platform for Software Developers</h3>
      <img className='tabletphone-image' src={frame} alt='' />
    </div>
  );
}

export default SignUpImageBrief;
