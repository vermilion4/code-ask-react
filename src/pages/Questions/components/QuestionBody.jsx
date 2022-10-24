const QuestionBody = () => {
  return (
    <div className='question-page' id='questionPage'>
      <div className='question-top-navbar'>
        <ul>
          <li>
            <a href='/' className='active'>
              All
            </a>
          </li>
          <li>
            <a href='/'>Newest</a>
          </li>
          <li>
            <a href='/'>Unanswered</a>
          </li>
          <li>
            <a href='/'>Answered</a>
          </li>
        </ul>
      </div>
      <div className='questions-wrapper'>
        {/* <div class="questions">
            <div class="question-box">
              <img src="${`https://ui-avatars.com/api/?name=${arrayAuthor.join("+")}`}" alt="" />
              <div class="question-content">
                <div class="question-statement">
                  <p>
                   ${title}
                  </p>
                </div>
                <br />
                <br />
                <div class="question-box-tags">
                  <ul>
                  ${arrayTags.map((tag)=>{

                    return `<li>${tag}</li>`

                  } ).join("")}
                  </ul>
                  <p>asked 9 hours ago by <span>@${author}</span></p>
                </div>
                
              </div>
            </div>
          </div> */}

        <div className='questions'>
          <div className='question-box'>
            <img
              src='https://ui-avatars.com/api/?name=anything'
              alt='avatar profile'
            />
            <div className='question-content'>
              <div className='question-statement'>
                <p>Fetch data using axios is so different from using fetch</p>
              </div>
              <br />
              <br />
              <div className='question-box-tags'>
                <ul>
                  <li>html</li>
                  <li>css</li>
                </ul>
                <p>
                  asked 9 hours ago by <span>@Chidi</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='questions'>
          <div className='question-box'>
            <img
              src='https://ui-avatars.com/api/?name=anything'
              alt='avatar profile'
            />
            <div className='question-content'>
              <div className='question-statement'>
                <p>Fetch data using axios is so different from using fetch</p>
              </div>
              <br />
              <br />
              <div className='question-box-tags'>
                <ul>
                  <li>html</li>
                  <li>css</li>
                </ul>
                <p>
                  asked 9 hours ago by <span>@Chidi</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='questions'>
          <div className='question-box'>
            <img
              src='https://ui-avatars.com/api/?name=anything'
              alt='avatar profile'
            />
            <div className='question-content'>
              <div className='question-statement'>
                <p>Fetch data using axios is so different from using fetch</p>
              </div>
              <br />
              <br />
              <div className='question-box-tags'>
                <ul>
                  <li>html</li>
                  <li>css</li>
                </ul>
                <p>
                  asked 9 hours ago by <span>@Chidi</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='questions'>
          <div className='question-box'>
            <img
              src='https://ui-avatars.com/api/?name=anything'
              alt='avatar profile'
            />
            <div className='question-content'>
              <div className='question-statement'>
                <p>Fetch data using axios is so different from using fetch</p>
              </div>
              <br />
              <br />
              <div className='question-box-tags'>
                <ul>
                  <li>html</li>
                  <li>css</li>
                </ul>
                <p>
                  asked 9 hours ago by <span>@Chidi</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='questions'>
          <div className='question-box'>
            <img
              src='https://ui-avatars.com/api/?name=anything'
              alt='avatar profile'
            />
            <div className='question-content'>
              <div className='question-statement'>
                <p>Fetch data using axios is so different from using fetch</p>
              </div>
              <br />
              <br />
              <div className='question-box-tags'>
                <ul>
                  <li>html</li>
                  <li>css</li>
                </ul>
                <p>
                  asked 9 hours ago by <span>@Chidi</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='questions'>
          <div className='question-box'>
            <img
              src='https://ui-avatars.com/api/?name=anything'
              alt='avatar profile'
            />
            <div className='question-content'>
              <div className='question-statement'>
                <p>Fetch data using axios is so different from using fetch</p>
              </div>
              <br />
              <br />
              <div className='question-box-tags'>
                <ul>
                  <li>html</li>
                  <li>css</li>
                </ul>
                <p>
                  asked 9 hours ago by <span>@Chidi</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='questions'>
          <div className='question-box'>
            <img
              src='https://ui-avatars.com/api/?name=anything'
              alt='avatar profile'
            />
            <div className='question-content'>
              <div className='question-statement'>
                <p>Fetch data using axios is so different from using fetch</p>
              </div>
              <br />
              <br />
              <div className='question-box-tags'>
                <ul>
                  <li>html</li>
                  <li>css</li>
                </ul>
                <p>
                  asked 9 hours ago by <span>@Chidi</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='questions'>
          <div className='question-box'>
            <img
              src='https://ui-avatars.com/api/?name=anything'
              alt='avatar profile'
            />
            <div className='question-content'>
              <div className='question-statement'>
                <p>Fetch data using axios is so different from using fetch</p>
              </div>
              <br />
              <br />
              <div className='question-box-tags'>
                <ul>
                  <li>html</li>
                  <li>css</li>
                </ul>
                <p>
                  asked 9 hours ago by <span>@Chidi</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionBody;
