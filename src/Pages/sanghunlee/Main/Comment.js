import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return this.props.commentList.map((comment, i) => {
      return (
        <div className="feedParaSub" key={i}>
          <div className="paraCommentWrap">
            <span className="commentContent">
              <a className="postingUser" href="/">
                {comment.userName}
              </a>
            </span>
            <span className="mainPara">{comment.content}</span>
          </div>
          <span>
            <div className="commentLikeIcon">
              <button className="commentLikeButton" type="button">
                <div className="commentLikeIconWrap">
                  <span>
                    <svg
                      aria-label="좋아요"
                      className="iconSvg"
                      fill="#262626"
                      height="12"
                      viewBox="0 0 48 48"
                      width="12"
                    >
                      <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                    </svg>
                  </span>
                </div>
              </button>
            </div>
          </span>
        </div>
      );
    });
  }
}

export default Comment;
