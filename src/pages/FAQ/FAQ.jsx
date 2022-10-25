import React from 'react';
import '../../stylesheets/FAQ.css';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer';

export default function FAQ() {
  return (
    <React.Fragment>
      <Header />
      <div className='faq-container'>
        <div className='head-intro'>
          <h1>Frequently Asked Questions</h1>
          <p>
            Got a question? If you don't see your question here, reach us on the{' '}
            <a href='./ourteam.html'>contact page</a>
          </p>
        </div>
        <div className='frequent-questions'>
          <h2>What is CodeAsk?</h2>
          <i className='fas fa-chevron-down' id='fas-1' />
        </div>
        <div className='hidden-content' id='hidden-content-1'>
          <p>
            Lorem ipsum dolor sit amet.
            <br /> <br /> Hic illum vitae iusto impedit aut reprehenderit
            recusandae maxime earum? Cumque omnis eum beatae nostrum? Neque
            sapiente molestiae deleniti impedit, eveniet atque?
          </p>
          <i className='fas fa-times' />
        </div>
        <div className='frequent-questions'>
          <h2>Is CodeAsk free?</h2>
          <i className='fas fa-chevron-down' id='fas-2' />
        </div>
        <div className='hidden-content' id='hidden-content-2'>
          <p>
            Lorem ipsum dolor sit amet.
            <br /> <br /> Hic illum vitae iusto impedit aut reprehenderit
            recusandae maxime earum? Cumque omnis eum beatae nostrum? Neque
            sapiente molestiae deleniti impedit, eveniet atque?
          </p>
          <i className='fas fa-times' />
        </div>
        <div className='frequent-questions'>
          <h2>Is CodeAsk beginner friendly?</h2>
          <i className='fas fa-chevron-down' id='fas-3' />
        </div>
        <div className='hidden-content' id='hidden-content-3'>
          <p>
            Lorem ipsum dolor sit amet.
            <br /> <br /> Hic illum vitae iusto impedit aut reprehenderit
            recusandae maxime earum? Cumque omnis eum beatae nostrum? Neque
            sapiente molestiae deleniti impedit, eveniet atque?
          </p>
          <i className='fas fa-times' />
        </div>
        <div className='frequent-questions'>
          <h2>is CodeAsk for backend developers only?</h2>
          <i className='fas fa-chevron-down' id='fas-4' />
        </div>
        <div className='hidden-content' id='hidden-content-4'>
          <p>
            Lorem ipsum dolor sit amet.
            <br /> <br /> Hic illum vitae iusto impedit aut reprehenderit
            recusandae maxime earum? Cumque omnis eum beatae nostrum? Neque
            sapiente molestiae deleniti impedit, eveniet atque?
          </p>
          <i className='fas fa-times' />
        </div>
        <div className='frequent-questions'>
          <h2>Can people advertise their brands on CodeAsk?</h2>
          <i className='fas fa-chevron-down' id='fas-5' />
        </div>
        <div className='hidden-content' id='hidden-content-5'>
          <p>
            Lorem ipsum dolor sit amet.
            <br /> <br /> Hic illum vitae iusto impedit aut reprehenderit
            recusandae maxime earum? Cumque omnis eum beatae nostrum? Neque
            sapiente molestiae deleniti impedit, eveniet atque?
          </p>
          <i className='fas fa-times' />
        </div>
        <div className='frequent-questions'>
          <h2>
            Are there answers to questions on cloud computing or is it just
            restricted to web development?
          </h2>
          <i className='fas fa-chevron-down' id='fas-6' />
        </div>
        <div className='hidden-content' id='hidden-content-6'>
          <p>
            Lorem ipsum dolor sit amet.
            <br /> <br /> Hic illum vitae iusto impedit aut reprehenderit
            recusandae maxime earum? Cumque omnis eum beatae nostrum? Neque
            sapiente molestiae deleniti impedit, eveniet atque?
          </p>
          <i className='fas fa-times' />
        </div>
        <div className='frequent-questions'>
          <h2>Is CodeAsk entirely free?</h2>
          <i className='fas fa-chevron-down' id='fas-7' />
        </div>
        <div className='hidden-content' id='hidden-content-7'>
          <p>
            Lorem ipsum dolor sit amet.
            <br /> <br /> Hic illum vitae iusto impedit aut reprehenderit
            recusandae maxime earum? Cumque omnis eum beatae nostrum? Neque
            sapiente molestiae deleniti impedit, eveniet atque?
          </p>
          <i className='fas fa-times' />
        </div>
        <div className='frequent-questions'>
          <h2>Are there version control solutions on the platform?</h2>
          <i className='fas fa-chevron-down' id='fas-8' />
        </div>
        <div className='hidden-content' id='hidden-content-8'>
          <p>
            Lorem ipsum dolor sit amet.
            <br /> <br /> Hic illum vitae iusto impedit aut reprehenderit
            recusandae maxime earum? Cumque omnis eum beatae nostrum? Neque
            sapiente molestiae deleniti impedit, eveniet atque?
          </p>
          <i className='fas fa-times' />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
