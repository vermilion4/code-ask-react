import React from "react";
import { Link } from 'react-router-dom';

// Would be replaced with API for Top Weekly Questions
const topWeekly = [
  {
    id: 0,
    img: "Peter Johnson",
    question:
      "How to install software or upgrade from an old unsupported release",
  },

  {
    id: 1,
    img: "mariam Yasmin",
    question: "How to resize partitions",
  },

  {
    id: 2,
    img: "Chukwuebuka Nwoporo",
    question:
      "Does any international law support the claim that Taiwan's independence or not should be decided by Taiwanese people, not by any other country?",
  },

  {
    id: 3,
    img: "Pete Tate",
    question: "Solution gets worse as I increase Precision and Accuracy goals",
  },

  {
    id: 4,
    img: "Jack Preed",
    question:
      "Aiming to get electricity for my cabin via underground burial. Few questions",
  },
];

const TopWeekly = () => {
  return (
    <div className="top-weekly">
      <h2>Top Weekly</h2>
      {topWeekly.map(({ id, img, question }) => {
        return (
          // Link here should go to discusion page for each question
            <Link to= {`${id}`} key={id}>     
            <div className="hot-topics">
              <img
                src={`https://ui-avatars.com/api/?name=${img}`}
                alt="avatar profile"
              />
              <p>{question}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default TopWeekly;
