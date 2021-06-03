import React from 'react';
import { Link } from 'react-router-dom';

class Comment extends React.Component {
  render() {
    const { feedId, comment, onRemoveComment, onToggleLike } = this.props;

    return (
      <>
        <div className="comment" id={comment.id}>
          <div className="comment-content">
            <Link to="/main" className="comment-id">
              {comment.userName}
            </Link>
            <span>{comment.content}</span>
          </div>
          <button>
            {comment.userName === 'hyunchan' ? (
              <i
                className="far fa-trash-alt"
                id={comment.id}
                onClick={e => onRemoveComment(e, feedId)}
              />
            ) : null}

            <i
              className={`${
                // comment.isLiked
                comment.Likers &&
                comment.Likers.find(liker => liker === 'hyunchan')
                  ? 'fas'
                  : 'far'
              } fa-heart`}
              id={comment.id}
              onClick={e => onToggleLike(e, feedId)}
            />
          </button>
        </div>
      </>
    );
  }
}

export default Comment;
