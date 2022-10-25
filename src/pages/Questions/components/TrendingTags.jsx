import React from "react";

// Would be replaced with API for TrendingTags
const tags = ['React', 'Python', 'nodeJS', 'tailwind', 'css', 'c++', 'Go', 'Java', 'SCSS', 'SASS', 'Swift', 'Ionic']

const TrendingTags = () => {
    return (
      <div className="trending-tags">
        <h2>Trending tags</h2>
        <ul>
          {tags.map( (eachTag, index) => {

            return(
              <li key={index}>{eachTag}</li>
            );
          })}
        </ul>
      </div>
    );
}
 
export default TrendingTags;