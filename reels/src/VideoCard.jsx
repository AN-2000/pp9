import { useState } from "react";

let VideoCard = (props) => {
  let [boxOpen, setBoxOpen] = useState(false);
  let [playing, setPlaying] = useState(false);

  return (
    <div className="video-card">
      <video
        onClick={(e) => {
          if (playing) {
            setPlaying(false);
            e.currentTarget.pause();
          } else {
            setPlaying(true);
            e.currentTarget.play();
          }
        }}
        src={props.post.url}
      ></video>
      <span className="material-icons-outlined like">favorite_border</span>
      <span
        className="material-icons-outlined comment"
        onClick={() => {
          if (boxOpen) setBoxOpen(false);
          else setBoxOpen(true);
        }}
      >
        chat_bubble
      </span>
      <p className="username">
        <b>@username</b>
      </p>
      <p className="song">
        <span className="material-icons-outlined">music_note</span>
        <marquee>song name</marquee>
      </p>

      {boxOpen ? (
        <div className="comment-box">
          <button
            className="comment-box-close-btn"
            onClick={() => {
              setBoxOpen(false);
            }}
          >
            Close
          </button>

          <div className="all-comments"></div>
          <div className="comment-form">
            <input />
            <button>Post</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default VideoCard;
