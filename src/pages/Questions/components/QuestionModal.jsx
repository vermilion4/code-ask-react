import React, { useState } from "react";
import { Link } from 'react-router-dom';
import SigninIcon from "../../../assets/question-modal-icons/bx_log-in.png";
import SignupIcon from "../../../assets/question-modal-icons/Vector.png";

const QuestionModal = () => {
      const [
        isModalActive,
        setIsModalActive,
      ] = useState(true);

      const handleRemoveModal = () => {
        setIsModalActive(false);
      };

      return (
        <div
          className="modal login-modal"
          style={{ display:  isModalActive ? '' : 'none' }}
        >
          <div className="modal-pop">
            <span
              id="closeButton"
              onClick={handleRemoveModal}
            >
              x
            </span>
            <h1>Sign in to see solutions</h1>
            <div className="modal-content">
              <div className="sign-in">
                <div>
                  <img
                    src={SigninIcon}
                    alt="signin icon"
                  />
                  <div className="modal-text-1">
                    {/* <a href="/signin.html">Sign In</a> */}

                    <Link to={"/sign-in"}>Sign In</Link>

                    <p>View all solutions</p>
                  </div>
                </div>
              </div>
              <div className="sign-up">
                <div>
                  <img
                    src={SignupIcon}
                    alt="signup icon"
                  />
                  <div className="modal-text-2">
                    {/* <a href="/signup.html">Sign Up</a> */}
                    <Link to={"/sign-up"}>Sign Up</Link>

                    <p>Create an account</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
 
export default QuestionModal;