import React from 'react';
import { Link } from 'react-router-dom';

class Comment extends React.Component {
  render() {
    const {
      id,
      userName,
      commentValue,
      defaultComments,
      isLiked,
      onToggleLike,
      onRemoveComment,
    } = this.props;

    return (
      <>
        <div className="comment">
          <div className="comment-content">
            <Link to="/main" className="comment-id">
              {userName}
            </Link>

            {/* TODO: 여기에 defaultComments 와 input창에서 입력된 댓글추가를 어떻게 할건지 고민 */}
            <span>{commentValue}</span>
          </div>
          <button>
            {userName === 'hyunchan' ? (
              <i
                className="far fa-trash-alt"
                id={id}
                onClick={e => onRemoveComment(e)}
              />
            ) : null}

            <i
              className={`${
                // Likers.find(liker => liker === 'hyunchan')
                isLiked ? 'fas' : 'far'
              } fa-heart`}
              id={id}
              onClick={e => onToggleLike(e)}
            />
          </button>
        </div>
      </>
    );
  }
}

export default Comment;
