import React, { useState, useEffect } from "react";
// import { MyEditor } from "./Editor";
import { MyEditor } from "./DraftEditor";
import useAxiosPrivate from "../../../components/hooks/useAxiosPrivate";
import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  const axiosPrivate = useAxiosPrivate();
  const [formBody, setFormBody] = useState("");

  const [formValue, setformValue] = useState({
    title: "",
    body: "",
    tags: "",
  });

  function convert(str){
    var eachStr = str.split(',');
    var total = []
  
    for(let i = 0; i < eachStr.length; i++){
        total.push({
            "name": eachStr[i]
        })
    }
    
    return total;
}
  const handleChange = (event) => {
      setformValue({
        ...formValue,
        [event.target.name]: event.target.value,
      });
    
  };

  // useEffect(() => {
  //   console.log('hi')
  //   setformValue({
  //     ...formValue,
  //     body: `${formBody}`,
  //   });

  // }, [formBody, formValue]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const databaseFormValue = {
      title: formValue.title,
      body: formValue.body,
      tags: convert(formValue.tags),
    }
    console.log(formValue);
    console.log(databaseFormValue);

    try{
    const res = axiosPrivate
      .post(`questions`,databaseFormValue)
      .then((response) => {
        console.log(response);
      });}
      catch(error){
        console.log(error);
      }
  };

  return (
    <>
      <section className="askquestion-main">
        <div className="title">
          <h5>Title</h5>
          <p>Ask your question as directly as possible</p>
          <input
            type="text"
            placeholder="e.g Is there a way to get version from package.json in nodejs code?"
            name="title"
            value={formValue.title}
            onChange={handleChange}
          />
        </div>
        <div className="body">
          <h5>Body</h5>
          <p>
            Include more details about your question to provide more context
            (can include code snippets)
          </p>
          <textarea
            type="textarea"
            rows="4"
            className="askquestion-body"
            placeholder="Enter more informaion about question..."
            name="body"
            value={formValue.body}
            onChange={handleChange}
          />

          {/* <MyEditor setFormBody={setFormBody}></MyEditor> */}

          {/* <Editor
            placeholder={"Write something..."}
            value={formBody}
            // value={formValue.body}
            onChange={handleFormBody}
            name="body"
          /> */}
        </div>

        <div className="tags">
          <h5>Tags</h5>
          <p>Add up to 5 tags to describe what your question is about</p>
          <input
            type="text"
            name="tags"
            placeholder="e.g javascript web html "
            value={formValue.tags}
            onChange={handleChange}
          />
        </div>
      </section>
      <button class="askquestion-button" onClick={handleSubmit}>
        POST QUESTION
      </button>
    </>
  );
};

export default Form;
