import React from "react";



function AnswersBody (){
    <>
         <h1>
            Is there a way to get version from package.json in nodejs code?
          </h1>
          <div className="tags">
            <ul>
              <li>nodejs</li>
              <li>npm</li>
              <li>version</li>
              <li>package.json</li>
            </ul>
            <p>asked 5 hours ago by <span>@clement</span></p>
          </div>
          <p>
            Is there a way to get the version set in package.json in a nodejs
            app? I would want something like this
          </p>
          <br />
          <br />
          <pre>
          {/* <code>
            var port = process.env.PORT || 3000
            app.listen port
            console.log(`Express server listening on ${port}`, app.address().port, app.settings.env, app.VERSION)
          </code> */}
          </pre>
          <hr />
          <div className="answer">
            <div className="ans">
              <img src="../IMAGES/ANSWER PAGE ICONS/ANSWER-ICON.png" alt="" />
              <h3>Answer</h3>
            </div>
            <h1>|</h1>
            <div classNames="share">
              <img src="../IMAGES/ANSWER PAGE ICONS/SHARE-ICON.png" alt="" />
              <h3>Share</h3>
            </div>
          </div>
          <hr className="horizontal-line" />
          <h1 className="suggestion">Answers</h1>
          <p>
            I found that the following code fragment worked best for me. Since
            it uses require to load the package.json, it works regardless of the
            current working directory.
          </p>
          <br />
          <pre>
          <code>
            var pjson = require('./package.json');
            console.log(pjson.version)
          </code>
          </pre>
          <div className="comment-section">
            <h3>Comment</h3>
            <div className="comment-details">
              <div className="rating">
                <img src="../IMAGES/ANSWER PAGE ICONS/arrow-up.png" alt="" />
                <img src="../IMAGES/ANSWER PAGE ICONS/arrow-down.png" alt="" />
              </div>
              <img src="../IMAGES/ANSWER PAGE ICONS/star.png" alt="" />
              <div className="commentator">
                <p>answered 1 hour ago</p>
                <div className="flex-row">
                  <img
                    src="../IMAGES/ANSWER PAGE ICONS/Ajiboye.png"
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
            I found that the following code fragment worked best for me. Since
            it uses require to load the package.json, it works regardless of the
            current working directory. - Clement Agunbiade
            <span>Aug 25, 2022 at 19:15</span>
          </p>
          <hr />

          <p className="more-comments">
            Using ES6 modules you can do the following:
          </p>
          <pre>
          {/* <code>
            import {version} = require('./package.json');
          </code> */}
          </pre>
          <br />
          <div className="comment-section">
            <h3>Comment</h3>
            <div className="comment-details">
              <div className="rating">
                <img src="../IMAGES/ANSWER PAGE ICONS/arrow-up.png" alt="" />
                <img src="../IMAGES/ANSWER PAGE ICONS/arrow-down.png" alt="" />
              </div>
              <div className="commentator">
                <p>answered 2 hours ago</p>
                <div className="flex-row">
                  <img
                    src="../IMAGES/ANSWER PAGE ICONS/adaeze.png"
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
            I found that the following code fragment worked best for me. Since
            it uses require to load the package.json, it works regardless of the
            current working directory. - Clement Agunbiade
            <span>Aug 25, 2022 at 19:15</span>
          </p>
          <hr />
          <div className="top-weekly hide">
            <h2>Top Weekly</h2>
            <a href=""
              ><div className="hot-topics">
                <img src="../IMAGES/TOP-WEEKLY/Ellipse 1.png" alt="avatar" />
                <p>
                  How to install software or upgrade from an old unsupported
                  release
                </p>
              </div></a
            >
            <a href=""
              ><div className="hot-topics">
                <img src="../IMAGES/TOP-WEEKLY/Ellipse 2.png" alt="avatar" />
                <p>How to resize partitions</p>
              </div></a
            >
            <a href=""
              ><div className="hot-topics">
                <img src="../IMAGES/TOP-WEEKLY/Ellipse 3.png" alt="avatar" />
                <p>
                  Does any international law support the claim that "Taiwan's
                  independence or not should be decided by Taiwanese people, not
                  by any other country"?
                </p>
              </div></a
            >
            <a href=""
              ><div className="hot-topics">
                <img src="../IMAGES/TOP-WEEKLY/Ellipse 4.png" alt="avatar" />
                <p>
                  Solution gets worse as I increase Precision and Accuracy goals
                </p>
              </div></a
            >
            <a href=""
              ><div className="hot-topics">
                <img src="../IMAGES/TOP-WEEKLY/Ellipse 5.png" alt="avatar" />
                <p>
                  Aiming to get electricity for my cabin via underground burial.
                  Few questions
                </p>
              </div></a
            >
          </div>
          <p className="other-suggestions">
            Know someone who can answer? Share a link to this question via
            <a href="">email</a>, <a href="">Twitter</a>, or
            <a href="">Facebook.</a>
          </p>
          <br />
          <br />
          <p className="your-answer">Your answer</p>
          <div className="enter-answer-header">
            <div>
              <a href=""
                ><img src="../IMAGES/ANSWER PAGE ICONS/undo-left.png" alt=""
              /></a>
              <a href=""
                ><img src="../IMAGES/ANSWER PAGE ICONS/undo-right.png" alt=""
              /></a>
            </div>
            <div>
              <a href=""
                ><img src="../IMAGES/ANSWER PAGE ICONS/text.png" alt=""
              /></a>
              <a href=""
                ><img
                  src="../IMAGES/ANSWER PAGE ICONS/arrow-down (2).png"
                  alt=""
              /></a>
            </div>
            <div>
              <a href=""
                ><img src="../IMAGES/ANSWER PAGE ICONS/justify.png" alt=""
              /></a>
              <a href=""
                ><img
                  src="../IMAGES/ANSWER PAGE ICONS/arrow-down (2).png"
                  alt=""
              /></a>
            </div>
            <div>
              <a href=""
                ><img src="../IMAGES/ANSWER PAGE ICONS/bold.png" alt=""
              /></a>
              <a href=""
                ><img src="../IMAGES/ANSWER PAGE ICONS/italics.png" alt=""
              /></a>
              <a href=""
                ><img src="../IMAGES/ANSWER PAGE ICONS/underline.png" alt=""
              /></a>
              <a href=""
                ><img src="../IMAGES/ANSWER PAGE ICONS/linethrough.png" alt=""
              /></a>
              <a href=""
                ><img src="../IMAGES/ANSWER PAGE ICONS/tag.png" alt=""
              /></a>
              <a href=""
                ><img src="../IMAGES/ANSWER PAGE ICONS/erase.png" alt=""
              /></a>
            </div>
            <div>
              <a href=""
                ><img src="../IMAGES/ANSWER PAGE ICONS/bullet.png" alt=""
              /></a>
              <a href=""
                ><img src="../IMAGES/ANSWER PAGE ICONS/numbering.png" alt=""
              /></a>
            </div>
            <div>
              <a href=""
                ><img src="../IMAGES/ANSWER PAGE ICONS/link.png" alt=""
              /></a>
              <a href=""
                ><img src="../IMAGES/ANSWER PAGE ICONS/thumbnail.png" alt=""
              /></a>
              <a href=""
                ><img src="../IMAGES/ANSWER PAGE ICONS/close-tag.png" alt=""
              /></a>
              <a href=""
                ><img src="../IMAGES/ANSWER PAGE ICONS/quote.png" alt=""
              /></a>
              <a href=""
                ><img src="../IMAGES/ANSWER PAGE ICONS/dash.png" alt=""
              /></a>
            </div>
          </div>
          <div className="text">
            <textarea name="" id="" cols="100" rows="10"></textarea>
            <a href="" className="btn">POST</a>
          </div>
       
    

    </>
}
export default AnswersBody