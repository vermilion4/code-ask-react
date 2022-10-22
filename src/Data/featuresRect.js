import YellowSquare from '../assets/square1.png';
import GreenSquare from '../assets/square2.png';
import { Image } from '../components/Image';

export const featuresRect = [
  {
    id: 0,
    image: <Image
      classname={ 'features-rect1' }
      fadeInOut
      moveRight
      moveBottom
      alt={ 'Square design 1' }
      source={ YellowSquare }
    />
  },
  {
    id: 1,
    image: <Image
      classname={ 'features-rect2' }
      fadeInOut
      moveLeft
      moveBottom
      alt={ 'Square design 2' }
      source={ GreenSquare }
    />
  },
  {
    id: 2,
    image: <Image
      classname={ 'features-rect3' }
      fadeInOut
      moveRight
      moveTop
      alt={ 'Square design 3' }
      source={ GreenSquare }
    />
  },
  {
    id: 3,
    image: <Image
      classname={ 'features-rect4' }
      fadeInOut
      moveLeft
      moveTop
      alt={ 'Square design 4' }
      source={ YellowSquare }
    />
  },
  {
    id: 4,
    image: <Image
      classname={ 'features-rect5' }
      fadeInOut
      moveLeft
      moveBottom
      alt={ 'Square design 5' }
      source={ YellowSquare }
    />
  }
];
