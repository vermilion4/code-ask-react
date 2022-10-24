import  React from "react";
import { Link } from "react-router-dom";

const QuestionHeader = () => {
    return (
      <div className="questions-header" id="questionHeader">
        <div className="question-link">
          <a href="./question.html">Find questions</a>
        </div>
        <div className="question-button">
        <Link to= '/AskQuestions'>Ask Question</Link>
        </div>
      </div>
    );
}
 
export default QuestionHeader;