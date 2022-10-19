import React from 'react';
import { Editor } from './Editor';

const Form = () => {
  return (
    <section className='askquestion-main'>
      <div className='title'>
        <h5>Title</h5>
        <p>Ask your question as directly as possible</p>
        <input
          type='text'
          placeholder='e.g Is there a way to get version from package.json in nodejs code?'
        />
      </div>
      <div className='body'>
        <h5>Body</h5>
        <p>
          Include more details about your question to provide more context (can
          include code snippets)
        </p>
        <Editor placeholder={'Write something...'} />
      </div>
      <div className='tags'>
        <h5>Tags</h5>
        <p>Add up to 5 tags to describe what your question is about</p>
        <input type='text' placeholder='e.g javascript web html ' />
      </div>
    </section>
  );
};

export default Form;
