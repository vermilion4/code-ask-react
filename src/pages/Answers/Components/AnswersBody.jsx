import React, { useState } from "react";
import { Editor } from "../../AskQuestions/components/Editor";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import useAxiosPrivate from "../../../components/hooks/useAxiosPrivate";
import Spinner from "../../../components/Spinner";
import moment from "moment";

export function AnswersBody() {
  const [isLoading, setIsLoading] = useState(true);
  const [question, setQuestion] = useState({});
  const axiosPrivate = useAxiosPrivate();

  const { id } = useParams();

  useEffect(() => {
    async function fetchQuestion() {
      const response = await axiosPrivate.get(`questions/${id}`);

      setQuestion(response.data);
      console.log(response.data)
      setIsLoading(false);
    }

    fetchQuestion();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <>
        <h1>{question.title}</h1>
        <ul>
                  {question.Tags.map((tag, index) => {
                    return <li key={index}>{tag.name}</li>;
                  })}
        </ul>
                <p style={{textAlign:"right"}}>
                  asked {moment(question.createdAt).fromNow()} by @
                  <span style={{backgroundColor:"#e5e5e5", padding:"4px", marginLeft:"10px"}} > {question.User.username}</span>
                </p>
          <br />

          <div className="editor">
            <Editor placeholder={"Write something..."} />
            <a href="" className="btn postButton" 
            >
              POST
            </a>
          </div>

          {/* ANSWERS */}

          {/* <p>
                Is there a way to get the version set in package.json in a nodejs
                app? I would want something like this
              </p>
              <br />
              <br />  */}
          {/* <CodeEditorWindow/> */}
          {/* <hr />
              <div className="answer">
                <div className="ans">
                  <img src="../IMAGES/ANSWER PAGE ICONS/ANSWER-ICON.png" alt="" />
                  <h3>Answer</h3>
                </div>
                <h1>|</h1>
                <div classNames="share">
                  <img src="../IMAGES/ANSWER PAGE ICONS/SHARE-ICON.png" alt="" />
                  <h3>Share</h3>
                </div>
              </div>
              <hr className="horizontal-line" />
              <h1 className="suggestion">Answers</h1>
              <p>
                Found that the following code fragment worked best for me. Since
                it uses require to load the package.json, it works regardless of the
                current working directory.
              </p>
              <br /> */}
          {/* <CodeEditorWindow/> */}
          {/* <div className="comment-section">
                <h3>Comment</h3>
                <div className="comment-details">
                  <div className="rating">
                    <img src={arrowUp} alt="" /> <span></span>
                    <img src={arrowDown} alt="" />
                  </div>
                  <img src={star} alt="" />
                  <div className="commentator">
                    <p>answered 1 hour ago</p>
                    <div className="flex-row">
                      <img
                        src={Ajiboye}
                        alt="image of commentator"
                      />
                      <span>@ajiboy</span>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="post-comment" />
              <br />
              <p className="comment">
                Found that the following code fragment worked best for me. Since
                it uses require to load the package.json, it works regardless of the
                current working directory. - Clement Agunbiade
                <span>Aug 25, 2022 at 19:15</span>
              </p>
              <hr />
    
              <p className="more-comments">
                Using ES6 modules you can do the following:
              </p> */}
          {/* <CodeEditorWindow /> */}
          {/* <br />
              <div className="comment-section">
                <h3>Comment</h3>
                <div className="comment-details">
                  <div className="rating">
                  
                  <img src={arrowUp} alt=""/> <span></span>
                  <img src={arrowDown} alt="" /></div>
                  <div className="commentator">
                    <p>answered 2 hours ago</p>
                    <div className="flex-row">
                      <img
                        src={Adaeze}
                        alt="image of commentator"
                      />
                      <span>@vermilion</span>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="post-comment" />
              <br />
              <p className="comment">
                  Found that the following code fragment worked best for me. Since
                it uses require to load the package.json, it works regardless of the
               working directory. - Clement Agunbiade
                <span>Aug 25, 2022 at 19:15</span>
              </p>
              <hr />
              
              <p className="other-suggestions">
                Know someone who can answer? Share a link to this question via: <br />
                <a href="">email</a>, <a href="">Twitter</a>, or <span></span>
                <a href="">Facebook.</a>
              </p>
              <br />
              <br />
              <p className="your-answer">Your answer</p>
              <br /> */}
        </>
      )}
    </div>
  );
}
