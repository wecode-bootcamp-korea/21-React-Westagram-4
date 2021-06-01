import React from 'react';
import { Link } from 'react-router-dom';

class Comment extends React.Component {
  render() {
    const { comment, onRemoveComment, onToggleLike } = this.props;

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
                onClick={e => onRemoveComment(e)}
              />
            ) : null}

            <i
              className={`${
                // Likers.find(liker => liker === 'hyunchan')
                comment.isLiked ? 'fas' : 'far'
              } fa-heart`}
              id={comment.id}
              onClick={e => onToggleLike(e)}
            />
          </button>
        </div>
      </>
    );
  }
}

export default Comment;
