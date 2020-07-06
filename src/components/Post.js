import React from "react";
import "./Post.css";
import { Icon } from "@blueprintjs/core";

function Post({ votes, img, title, link, author, comments }) {
  return (
    <div className="post">
      <div className="votes">
        <button className="arrows">
          <Icon icon="arrow-up" iconSize="23" color="grey" />
        </button>
        <div className="votes-number">{votes}</div>
        <button className="arrows">
          <Icon icon="arrow-down" iconSize="23" color="grey" />
        </button>
      </div>
      <img src={img} alt="image1" />
      <div className="info">
        <div className="title">
          <a
            href={`https://www.reddit.com${link}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </div>
        <div className="author-info">
          Submitted 12 hours ago by <span className="author">{author}</span>
        </div>
        <div className="comment-info">
          <span className="comments">
            <span>{comments}</span> comments
          </span>{" "}
          share save hide report pocket
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Post;
