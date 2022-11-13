import React, { useState } from 'react';
import '../../stylesheets/FAQ.css';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer';


const dataFrequentlyAsked = [
    {
        question: `What is CodeAsk?`,
        answer: `Lorem ipsum dolor sit amet.
        Hic illum vitae iusto impedit aut reprehenderit
       recusandae maxime earum? Cumque omnis eum beatae nostrum? Neque
       sapiente molestiae deleniti impedit, eveniet atque?`
    },
    {
        question: `Is CodeAsk beginner friendly?`,
        answer: `Lorem ipsum dolor sit amet.
         Hic illum vitae iusto impedit aut reprehenderit
        recusandae maxime earum? Cumque omnis eum beatae nostrum? Neque
        sapiente molestiae deleniti impedit, eveniet atque?`
    },
    {
        question: `Can people advertise their brands on CodeAsk?`,
        answer: `Lorem ipsum dolor sit amet.
         Hic illum vitae iusto impedit aut reprehenderit
        recusandae maxime earum? Cumque omnis eum beatae nostrum? Neque
        sapiente molestiae deleniti impedit, eveniet atque?`
    },
    {
        question: `Are there answers to questions on cloud computing or is it just
        restricted to web development?`,
        answer: `Lorem ipsum dolor sit amet.
         Hic illum vitae iusto impedit aut reprehenderit
        recusandae maxime earum? Cumque omnis eum beatae nostrum? Neque
        sapiente molestiae deleniti impedit, eveniet atque?`
    },
    {
        question: `Is CodeAsk entirely free?`,
        answer: `Lorem ipsum dolor sit amet.
         Hic illum vitae iusto impedit aut reprehenderit
        recusandae maxime earum? Cumque omnis eum beatae nostrum? Neque
        sapiente molestiae deleniti impedit, eveniet atque?`
    },
    {
        question: `is CodeAsk for backend developers only?`,
        answer: `Lorem ipsum dolor sit amet.
        Hic illum vitae iusto impedit aut reprehenderit
       recusandae maxime earum? Cumque omnis eum beatae nostrum? Neque
       sapiente molestiae deleniti impedit, eveniet atque?`
    },
    {
        question: `Are there version control solutions on the platform?`,
        answer: `Lorem ipsum dolor sit amet.
        Hic illum vitae iusto impedit aut reprehenderit
       recusandae maxime earum? Cumque omnis eum beatae nostrum? Neque
       sapiente molestiae deleniti impedit, eveniet atque?`
    }
];

export const Faq = () => {
    const [accordion, setActiveAccordion] = useState(-1)

    function toggleAccordion(index) {
        if(index === accordion){
            setActiveAccordion(-1);
            return;
        }
        setActiveAccordion(index);
    }
  return (
    <React.Fragment>
        <Header />
        <div className='faq-container'>
            <div className='head-intro'>
                <h1>Frequently Asked Questions</h1>
                <p>
                    Got a question? If you don't see your question here, reach us on the{' '}
                    <Link to = "/about-us">Contact Page
                    </Link>
               </p>
               </div>
               {dataFrequentlyAsked.map((item, index) =>
                    <div key={index} onClick={() => toggleAccordion(index)}>
                        <div className='frequent-questions'>
                        <h2 className='{ accordion === index ? "active" : ""}'>
                            {item.question}
                        </h2>
                        <div>
                            {accordion === index ? (
                            <><span className='verticle'>-</span></> 
                            ) : (
                            <><span className='verticle'>+</span></>
                            )}
                        </div>
                        </div>
                        <div className='hidden-content'>
                            <p className={accordion === index ? "active" : "inactive"}>
                                {item.answer}
                            </p>
                        </div>

                    </div>
                )}

            
                
        </div>
        <Footer />
    </React.Fragment>
  )
}
export default Faq;

