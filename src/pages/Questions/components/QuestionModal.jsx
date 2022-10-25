const QuestionModal = () => {
    return (
      <div className="modal login-modal">
        <div className="modal-pop">
          <span id="closeButton">x</span>
          <h1>Sign in to see solutions</h1>
          <div className="modal-content">
            <div className="sign-in">
              <div>
                {/* <img src="/IMAGES/bx_log-in.png" alt /> */}
                <div className="modal-text-1">
                  <a href="/signin.html">Sign In</a>
                  <p>View all solutions</p>
                </div>
              </div>
            </div>
            <div className="sign-up">
              <div>
                {/* <img src="/IMAGES/Vector.png" alt /> */}
                <div className="modal-text-2">
                  <a href="/signup.html">Sign Up</a>
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