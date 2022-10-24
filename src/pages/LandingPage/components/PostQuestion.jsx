import React from "react"
import QuestionMark from '../../../assets/questionmark.png';
import CodeSign from '../../../assets/codesign.png';
import Programmer from '../../../assets/postquestion.png';
import { Image } from '../../../components/Image';

export const PostQuestion = () => {
  return (
    <section className='post-questions'>
      <div className='question-image'>
        <Image source={Programmer} alt={'Post Question Image'} />
      </div>
      <div className='brief'>
        <h4>Post questions</h4>
        <div>
          <Image source={QuestionMark} />
          <p>
            Post Programming questions irrespective of{' '}
            <span className='feature-bd'>level of complexity</span>
          </p>
        </div>
        <div>
          <Image source={CodeSign} />
          <p>
            Add <span className='feature-bd'>code snippets</span> to better
            clarify questions and get tailored answers
          </p>
        </div>
      </div>
    </section>
  );
};
