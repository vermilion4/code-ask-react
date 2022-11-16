// import React from 'react';
import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment';

const AllQuestion = (props) => {
  const { datas } = props;

  return (
    <div className="questions-wrapper">
      {datas.map(
        ({
          Comments,
          Tags,
          User,

          body,
          createdAt,
          id,
          title,
        }) => {
          return (
            <Link key={id} to={`${id}`}>
              {" "}
              <div className="questions">
                <div className="question-box">
                  <img src={User.profile_image} alt="avatar profile" />
                  <div className="question-content">
                    <div className="question-statement">
                      <p>{title}</p>
                    </div>

                    <div className="question-box-tags">
                      {
                        <ul>
                          {Tags.map((tag, index) => {
                            return <li key={index}>{tag.name}</li>;
                          })}
                        </ul>
                      }
                      <p>
                        {/* {`asked ${createdAt} ago by `} */}
                        {`asked ${ moment(createdAt).fromNow()} ago by `}
                        <span>{`@${User.username}`}</span>
                      </p>
                    </div>
                  </div>
                  <div className="views-answers">
                    <p>
                      <span>0</span> Views
                      {/* <span>{views}</span> Views */}
                    </p>
                    <p>
                      <span>0</span> Answers
                      {/* <span>{answers}</span> Answers */}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        }
      )}
    </div>
  );
};

export default AllQuestion;
