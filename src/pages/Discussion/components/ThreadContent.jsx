import { Editor } from "./Editor";


function ThreadContent({topic}) {


  return (
    <div className="thread">
    <div>
      <h4>Thread</h4>
      <div className="each-thread">
        <div className="img">
          <img src={topic.User.profile_image} alt={topic.User.username} />
        </div>
        <div className="info">
          <p className="user">{topic.User.username}</p>
          <p className="date">{topic.createdAt}</p>
          <p className="topic">{topic.topic}</p>
        </div>
      </div>

      {/* <p className="each-thread-reply">2 replies</p>
      <div className="solution-wrapper">
        <div className="img">
          <img src={ClementPic} alt />
        </div>
        <div>
          <div className="solution-info">
            <h5>filla97</h5>
            <p>2 days ago</p>
          </div>
          <div className="solution-brief">
            <p>Will this make Docker start up automatical? </p>
            <p>
              {" "}
              Because whenever I installed docker on e.g ubuntu WSL2, then I
              had to start daemon manually which was pain in the ass
            </p>
            <p> It didn't happen on normal Debian</p>
          </div>
        </div>
      </div>
      <div className="solution-wrapper">
        <div className="img">
          <img src={JoyPic} alt />
        </div>
        <div>
          <div className="solution-info">
            <h5>Joyoffiong</h5>
            <p>3 hours ago</p>
          </div>
          <div className="solution-brief">
            <p>
              Solid - looking forward to it. I installed `systemd` manually in
              the past to experiment with some snaps on WSL - so good to see
              it officially supported now.
            </p>
          </div>
        </div>
      </div> */}

      <Editor placeholder={"Enter text here..."} />
    </div>
  </div>
  )
}

export default ThreadContent