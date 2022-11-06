// import React from 'react';
import React from "react";
import { Link } from 'react-router-dom';

const AllQuestion = (props) => {
const {datas} = props ;
   

  return (
      <div  className="questions-wrapper">
        {datas.map(
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
            isAnswered,
          }) => {
            return (
          
          <Link key={id} to = {`${id}`}>    <div className="questions" >
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
          </Link>
            );
          }
        )}
</div>
    
  )}

export default AllQuestion;
