import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comment from './Comment';

class CommentList extends Component {
  render() {
    const { feedId, commentList, onToggleLike, onRemoveComment } = this.props;

    return (
      <>
        <div>
          <div className="all-comments-show">
            <Link to="/main">
              댓글 <span>12,739</span>개 모두 보기
            </Link>
          </div>

          <div className="other-comments">
            {commentList &&
              commentList.map((comment, i) => (
                <Comment
                  key={i}
                  feedId={feedId}
                  comment={comment}
                  onToggleLike={onToggleLike}
                  onRemoveComment={onRemoveComment}
                />
              ))}
          </div>

          <div className="time-container">
            <Link to="/main">
              <time
                className=""
                dateTime="2021-05-17T18:16:28.000Z"
                title="2021년 5월 18일"
              >
                2일 전
              </time>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default CommentList;
