import React from 'react';
import QuestionHeader from './QuestionHeader';
import QuestionBody from './QuestionBody';
import TopWeekly from './TopWeekly';
import TrendingTags from './TrendingTags';


const QuestionsWrapper = () => {
    return (
      <div className="flex-question">
        <div className= "left-side-question">
          <QuestionHeader />
          <QuestionBody />
        </div>

        <div className="right-side">
          <TopWeekly />
          <TrendingTags />
        </div>
      </div>
    );
}
 
export default QuestionsWrapper;