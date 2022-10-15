import { Button } from '../../../components/Button';
import '../../../stylesheets/landingpage.css';
export const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-wrapper'>
        <h3>
          Spend less time finding solutions to your technical Questions, help
          others answer theirs
        </h3>
        <p>Make solution finding easy and fast. Focus on building your apps</p>
        <div className='hero-button'>
          <Button text={'Get started now'} link='' startBtn />
          <Button text={'Search content'} link='' searchBtn />
        </div>
      </div>
    </section>
  );
};
