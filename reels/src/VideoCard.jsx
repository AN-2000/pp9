import { useState } from "react";

let VideoCard = () => {
  let [boxOpen, setBoxOpen] = useState(false);

  return (
    <div className="video-card">
      <video src="https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4"></video>
      <span class="material-icons-outlined like">favorite_border</span>
      <span
        class="material-icons-outlined comment"
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
        <span class="material-icons-outlined">music_note</span>
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
