import React from 'react';
import { Link } from 'react-router-dom';

const QuestionHeader = () => {
  return (
    <div className='questions-header' id='questionHeader'>
      <div className='question-link'>
        <Link to='#'>Find questions</Link>
      </div>
      <div className='question-button'>
        <Link to='/ask-question'>Ask Question</Link>
      </div>
    </div>
  );
};

export default QuestionHeader;
