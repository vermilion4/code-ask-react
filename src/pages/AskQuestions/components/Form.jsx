import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { MyEditor } from "./Editor";
// import { MyEditor } from "./DraftEditor";
import useAxiosPrivate from "../../../components/hooks/useAxiosPrivate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { convert } from "./convert"

const Form = () => {
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const [formBody, setFormBody] = useState("");
  const [postButton, setPostButton] = useState(true);

  const notifyError = (error) => {
    toast.error(error, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

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
  };

  // useEffect(() => {
  //   console.log('hi')
  //   setformValue({
  //     ...formValue,
  //     body: `${formBody}`,
  //   });

  // }, [formBody, formValue]);

  const handleSubmit = (event) => {
    if (
      formValue.title === "" ||
      formValue.body === "" ||
      formValue.tags === ""
    ) {
      notifyError("Fill all fields");
    } else {
      event.preventDefault();
      setPostButton(false);

      const databaseFormValue = {
        title: formValue.title,
        body: formValue.body,
        tags: convert(formValue.tags),
      };
      
        try {
          const res = axiosPrivate
            .post(`questions`, databaseFormValue)
            .then((response) => {
              console.log(response);
              navigate("/questions");
            })
            .catch((err) => {
              notifyError("Question not submitted");
            });
        } catch (error) {
          notifyError("Question not submitted");
        } finally {
          setPostButton(true);
        }
     
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
            required
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
            required
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
            required
          />
        </div>
      </section>
      <button
        class="askquestion-button"
        onClick={handleSubmit}
        disabled={postButton ? false : true}
      >
        POST QUESTION
      </button>
      <ToastContainer />
    </>
  );
};

export default Form;
