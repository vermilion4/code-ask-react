import React, { useState } from "react";
import { Editor } from "./Editor";
import useAxiosPrivate from "../../../components/hooks/useAxiosPrivate";

const Form = () => {
  const axiosPrivate = useAxiosPrivate();

  const [reactQuill, setReactQuill] = useState({})

  const handleChanges = (event) => {
    setReactQuill({
      [event.target.name]: "boy"
    })
  }


  const [formValue, setformValue] = useState({
    title: "",
    body: "",
    tags: "",
  });

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(reactQuill)

    // console.log(formValue)
    // const res = axiosPrivate
    //   .post(`questions`, questionData)
    //   .then((response) => {
    //     console.log(response);
    //   });
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
          <Editor
            placeholder={"Write something..."}
            // value={formValue.body}
            // value={this.state.content}
            // onChange={handleChange}
            value={reactQuill}
            onChange={handleChanges}
            name="body"
          />
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
