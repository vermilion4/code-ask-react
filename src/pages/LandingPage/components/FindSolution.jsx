import Pen from '../../../assets/pen.png';
import MiniSearchIcon from '../../../assets/minisearchicon.png';
import Stack from '../../../assets/stack.png';
import Robot from '../../../assets/findsolution.png';
import { Image } from '../../../components/Image';

export const FindSolution = () => {
  return (
    <section className='find-solutions'>
      <div className='brief'>
        <h4>Find solutions</h4>
        <div>
          <Image source={Pen} />
          <p>
            Find the best answer to your{' '}
            <span className='feature-bd'> technical questions</span>
          </p>
        </div>
        <div>
          <Image source={MiniSearchIcon} />
          <p>
            Search through <span className='feature-bd'>verified</span>{' '}
            solutions
          </p>
        </div>
        <div>
          <Image source={Stack} />
          <p>
            Get access to questions and solutions from{' '}
            <span className='feature-bd'>various platforms</span>
          </p>
        </div>
      </div>
      <div className='solution-image'>
        <Image source={Robot} alt={'Find Solution Image'} />
      </div>
    </section>
  );
};
