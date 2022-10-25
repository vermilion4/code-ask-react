import React from "react";


const questions = [
  {
    id: 0,
    author: "Nweke Chidi",
    img: "Nweke Chidi",
    userName: "Chigoddy",
    question: "Fetch data using axios is so different from using fetch",
    tags: ["html", "css"],
    views: 5,
    answers: 3,
    timeAsked: 8,
    isNewest: true,
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
    timeAsked: "2 days",
    isNewest: false,
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
    answers: 15,
    timeAsked: "15 hours",
    isNewest: true,
    isAnswered: false,
  },
];

const QuestionBody = () => {
  return (
    <div className="question-page" id="questionPage">
      <div className="question-top-navbar">
        <ul>
          <li>
            <a href="/" className="active">
              Newest
            </a>
          </li>
          <li>
            <a href="/">Unanswered</a>
          </li>
          <li>
            <a href="/">Answered</a>
          </li>
        </ul>
      </div>
      <div className="questions-wrapper">

        {questions.map(
          ({
            id,
            author,
            img,
            userName,
            question,
            tags,
            views,
            answers,
            timeAsked,
            isNewest,
            isAnswered,
          }) => {
            return (
              <div className="questions" key={id}>
                <div className="question-box">
                  <img
                    src={`https://ui-avatars.com/api/?name=${img}`}
                    alt="avatar profile"
                  />
                  <div className="question-content">
                    <div className="question-statement">
                      <p>{question}</p>
                    </div>

                    <div className="question-box-tags">
                      <ul>{tags.map((tag, index)=>{
                        return <li key={index}>{tag}</li> ;
                      })}
                       
                      </ul>
                      <p>
                      {`asked  ${timeAsked} ago by `}<span>{`@${userName}`}</span>
                      </p>
                    </div>
                  </div>
                  <div className="views-answers">
                    <p>
                      <span>{views}</span> Views
                    </p>
                    <p>
                      <span>{answers}</span> Answers
                    </p>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default QuestionBody;
