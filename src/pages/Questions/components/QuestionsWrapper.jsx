import React from 'react';
import QuestionHeader from './QuestionHeader';
import QuestionBody from './QuestionBody';
import TopWeekly from './TopWeekly';
import TrendingTags from './TrendingTags';
import QuestionModal from './QuestionModal';


const QuestionsWrapper = () => {
    return (
      <div className="flex-question">
        <div className= "left-side">
          <QuestionHeader />
          <QuestionBody />
        </div>

        <div className="right-side">
          <TopWeekly />
          <TrendingTags />
        </div>
        <QuestionModal />
      </div>
    );
}
 
export default QuestionsWrapper;