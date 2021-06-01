import React, { Component } from 'react';
import Feed from './Feed';

class CommentInput extends Component {
  render() {
    const { id, commentValue, isCommentBtnDisable, onCommentValue } =
      this.props;

    return (
      <>
        <input
          id={id}
          type="text"
          className="comment-input"
          defaultValue={commentValue ? commentValue : ''}
          onChange={onCommentValue}
          aria-label="댓글 달기..."
          placeholder="댓글 달기..."
          autoComplete="off"
          autoCorrect="off"
        />
        <button
          className="post-button"
          type="submit"
          disabled={isCommentBtnDisable}
        >
          게시
        </button>
      </>
    );
  }
}

export default CommentInput;
