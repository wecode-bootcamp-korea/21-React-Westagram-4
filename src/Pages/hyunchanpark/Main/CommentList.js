import React, { Component } from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';
import './Main.scss';

class CommentList extends Component {
  render() {
    const {
      id,
      commentList,
      commentValue,
      onCommentValue,
      isCommentSubmitDisable,
      onSubmitCommentForm,
      onToggleLike,
      onRemoveComment,
    } = this.props;

    // const isCommentBtnDisable =
    //   commentValue && commentValue.length > 0 ? false : true;
    return (
      <>
        <div>
          <div className="all-comments-show">
            <a href="/">
              댓글 <span>12,739</span>개 모두 보기
            </a>
          </div>

          <div className="other-comments">
            {commentList &&
              commentList.map((comment, i) => (
                <Comment
                  key={i}
                  comment={comment}
                  onToggleLike={onToggleLike}
                  onRemoveComment={onRemoveComment}
                />
              ))}
          </div>

          <div className="time-container">
            <a href="/">
              <time
                className=""
                dateTime="2021-05-17T18:16:28.000Z"
                title="2021년 5월 18일"
              >
                2일 전
              </time>
            </a>
          </div>
        </div>

        <div className="post-comment">
          <div className="comment-form-container">
            <form className="comment-form" onSubmit={onSubmitCommentForm}>
              <button className="emoji-button">
                <div className="svg">
                  <svg
                    aria-label="이모티콘"
                    className=""
                    fill="#262626"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path>
                    <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path>
                  </svg>
                </div>
              </button>
              <CommentInput
                id={id}
                commentValue={commentValue}
                isCommentBtnDisable={isCommentSubmitDisable}
                onCommentValue={onCommentValue}
              />
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default CommentList;
