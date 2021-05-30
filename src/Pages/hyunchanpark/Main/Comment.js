import React from 'react';
import { Link } from 'react-router-dom';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      seqNum,
      userId,
      commentText,
      Likers,
      onToggleLike,
      onRemoveComment,
    } = this.props;

    return (
      <>
        <div className="comment">
          <div className="comment-content">
            <Link to="/main" className="comment-id">
              {userId}
            </Link>
            <span>{commentText}</span>
          </div>
          <button>
            {userId === 'hyunchan' ? (
              <i
                className="far fa-trash-alt"
                id={seqNum}
                onClick={e => onRemoveComment(e)}
              />
            ) : null}

            <i
              className={`${
                Likers.find(liker => liker === 'hyunchan') ? 'fas' : 'far'
              } fa-heart`}
              id={seqNum}
              onClick={onToggleLike}
            />
          </button>
        </div>
      </>
    );
  }
}

export default Comment;
