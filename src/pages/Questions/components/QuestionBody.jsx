
import React from "react";
import AllQuestion from './AllQuestions';


const questions = [
  {
    id: 0,
    author: "Nweke Chidi",
    img: "Nweke Chidi",
    userName: "Chigoddy",
    question: "Fetch data using axios is so different from using fetch",
    tags: ["html", "css"],
    views: 5,
    answers: 0,
    timeAsked: 8,
    isAnswered: false,
  },

  {
    id: 1,
    author: "Bolanle Duke",
    img: "Bolanle Duke",
    userName: "Brandy",
    question: "How To Align Text Vertically Center Beside An Image In React Native With Code or can it be done any other way i really want you to help me out",
    tags: ["React", "Javascri[t"],
    views: 50,
    answers: 13,
    timeAsked: 2,
    isAnswered: true,
  },

  {
    id: 2,
    author: "Michael Binuyo",
    img: "Michael Binuyo",
    userName: "Mickkystonz",
    question: "How to validate email using regex in javascript, s this trully possible",
    tags: ["regex", "python"],
    views: 38,
    answers: 0,
    timeAsked: 15,
    isAnswered: false,
  },
];


const QuestionBody = () => {

// const [filter, setFilter] = useState(questions);

// const filterNewest = () =>{
// // Will work on this soon
//   let result = questions;
//   return result;
// }

// const filterUnanswered = () =>{
//   // Will work on this soon
//     let result = questions.filter(question => (question.isAnswered === false));
//     return result;
//   }

//   const filterAnswered = () =>{
//     // Will work on this soon
//     let result = questions.filter(question => (question.isAnswered === true));
//       return result;
//     }
    
  return (
    <div className="question-page" id="questionPage">
      <div className="question-top-navbar">
        <ul>
          <li>
            {/* <button onClick = {setFilter({filterNewest})}> Newest</button> */}
            <a href="/" className="active">
              Newest
            </a>
          </li>
          <li>
            {/* <button onClick = {setFilter({filterUnanswered})}>Unanswered</button> */}
            <a href="/">Unanswered</a>
          </li>
          <li>
            {/* <button onClick = {setFilter({filterAnswered})}>Answered</button> */}
            <a href="/">Answered</a>
          </li>
        </ul>
      </div>
      
       <AllQuestion datas = {questions} />
    </div>
  );
};

export default QuestionBody;
