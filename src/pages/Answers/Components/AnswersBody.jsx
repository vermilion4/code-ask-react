import React, { useState } from "react";
// import { Editor } from "../../AskQuestions/components/Editor";
import { useParams } from "react-router-dom";
import { useEffect} from "react";
import answerIcon from "../../../assets/ANSWER PAGE ICONS/ANSWER-ICON.png"
import shareIcon from "../../../assets/ANSWER PAGE ICONS/SHARE-ICON.png"
import arrowUp from "../../../assets/ANSWER PAGE ICONS/arrow-up.png"
import arrowDown from "../../../assets/ANSWER PAGE ICONS/arrow-down.png"
import star from "../../../assets/ANSWER PAGE ICONS/star.png"
import useAxiosPrivate from "../../../components/hooks/useAxiosPrivate";
import Spinner from "../../../components/Spinner";
import moment from "moment";

export function AnswersBody({Id}) {
  const [isLoading, setIsLoading] = useState(true);
  const [question, setQuestion] = useState({});
  const [answer, setAnswer] = useState({});
  const [allAnswers, setAllAnswers] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const [value, setValue] = useState("");
  const [currentAnswer, setCurrent] = useState('')

  // const navigate = useNavigate()

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



// fetch all answers
// useEffect(() => {
//   async function fetchAnswers() {
//     const response = await axiosPrivate.get(`answers`, {
//       QuestionId: id
//     })

//     setAllAnswers(
//       response.data);

//   console.log(response.data)
  
//   }
//   fetchAnswers()

// }, []);


const handleChange=(e)=>{
  setValue(e.target.value)
}

// const [answerValue, setAnswerValue] = useState({
//   QuestionId : "",
//   content: ""
// })

const answerSentValues= {
  QuestionId: id,
  content:value
}

// const pageLoad =>(e){

// }
 async function handleSubmit(){
  try {
    const res = await axiosPrivate
  .post(`answers`, answerSentValues)
  let id = res.data.id

  const response = await axiosPrivate.get(`answers/${id}`)
  setAnswer(response.data);
  console.log(response.data)

}
   catch (error) {
    console.log(error)
  }


}

//  async function deleteAnswer (){

//   const del = await axiosPrivate.delete(`answers/${id}`)

//   console.log(del)
// }




// Fetch the Answer by id
// useEffect(() => {
//   async function fetchAnswers() {
//     const response = await axiosPrivate.get(`answers/${currentAnswer.id}`)

//     setAnswer(
//       response.data);

//       console.log(response.data)

//   }
//   fetchAnswers()

// }, []);
  
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
                 
                  <span style={{backgroundColor:"#e5e5e5", 
                  padding:"4px", 
                  marginLeft:"10px",
                  borderRadius:"5px"}} > {question.User.username}</span>
                </p>
          <br />
          <p>{question.body}</p>

          <hr className="horizontal-line"/>
          <div className="answer">
                <div className="ans">
                  <img src={answerIcon} alt="" />
                  <h3>Answer</h3>
                </div>
                <h1>|</h1>
                <div classNames="share">
                  <img src={shareIcon}alt="" />
                  <span>Share</span>
                </div>
           </div>
         
           <hr className="horizontal-line" />

           
              <h1 className="suggestion">Answers</h1>
              <p>{answer.content}</p>

              <br />  

              <div className="comment-section" >
                <h3>Comment</h3>

                <div className="comment-details">
                  <div className="rating" style={{display:"flex"}}>
                  <span> <img src={arrowUp} alt="" />{answer.upvotes}</span> 
                 <span><img src={arrowDown} alt="" />{answer.downvotes}</span>    
                  </div>

                  <img src={star} alt="" />
                  <div className="commentator">
                    <p>answered {moment(answer.createdAt).fromNow()}</p>
                    <div className="flex-row">
                      <img
                        src=""
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
                <h2>Comments heere</h2>
               {answer.content}
              </p>
              {/* <span style={{textAlign:"right"}}> {moment(answer.createdAt).fromNow()}</span>
              */}
              <hr />

          <div>
          <textarea
            type="textarea"
            rows="4"
            placeholder="Answers"
            name="body"
            value= {value}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn postButton" onClick={handleSubmit}> POST</button>
          
          </div>


              

          {/* ANSWERS */}


          {/*
          <div className="comment-section">
              <hr className="horizontal-line" />
              <h1 className="suggestion">Answers</h1>
              <p>
                Found that the following code fragment worked best for me. Since
                it uses require to load the package.json, it works regardless of the
                current working directory.
              </p>
              <br />  */}
  


            
          {/* <CodeEditorWindow/> 

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
</>)}
</div>)}