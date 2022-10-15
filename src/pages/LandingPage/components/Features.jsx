import YellowSquare from '../../../assets/square1.png';
import GreenSquare from '../../../assets/square2.png';
import { Image } from '../../../components/Image';
import { FindSolution } from './FindSolution';
import { PostQuestion } from './PostQuestion';

export const Features = () => {
  return (
    <section className='features'>
      <Image
        classname={'features-rect1'}
        fadeInOut
        moveRight
        moveBottom
        alt={'Square design 1'}
        source={YellowSquare}
      />
      <Image
        classname={'features-rect2'}
        fadeInOut
        moveLeft
        moveBottom
        alt={'Square design 2'}
        source={GreenSquare}
      />
      <Image
        classname={'features-rect3'}
        fadeInOut
        moveRight
        moveTop
        alt={'Square design 3'}
        source={GreenSquare}
      />
      <Image
        classname={'features-rect4'}
        fadeInOut
        moveLeft
        moveTop
        alt={'Square design 4'}
        source={YellowSquare}
      />
      <Image
        classname={'features-rect5'}
        fadeInOut
        moveLeft
        moveBottom
        alt={'Square design 5'}
        source={YellowSquare}
      />
      <FindSolution />
      <PostQuestion />
    </section>
  );
};
