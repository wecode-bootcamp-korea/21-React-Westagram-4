import React from 'react';

class ViewComment extends React.Component {
  constructor() {
    // this.state = {
    //   comment: '',
    //   commentList: [],
    //   pastCommentList: [],
    // };
    super();
    document.body.style.overflow = 'hidden';
  }

  render() {
    return (
      <div className="modal" onClick={this.props.is}>
        <button className="close" onClick={this.props.is}>
          &times;
        </button>
        <div className="modal-container" onClick={e => e.stopPropagation()}>
          <div className="modal-left">
            <img src={this.props.img} alt={this.props.author}></img>
          </div>
          <div className="modal-right">
            <div className="modal-right-header">
              <div className="modal-right-profileImg">
                <img src={this.props.profileImg} alt={this.props.author}></img>
              </div>
              <div className="modal-right-title">{this.props.author}</div>
              <svg
                aria-label="옵션 더 보기"
                fill="#262626"
                height="16"
                viewBox="0 0 48 48"
                width="16"
              >
                <circle
                  clipRule="evenodd"
                  cx="8"
                  cy="24"
                  fillRule="evenodd"
                  r="4.5"
                ></circle>
                <circle
                  clipRule="evenodd"
                  cx="24"
                  cy="24"
                  fillRule="evenodd"
                  r="4.5"
                ></circle>
                <circle
                  clipRule="evenodd"
                  cx="40"
                  cy="24"
                  fillRule="evenodd"
                  r="4.5"
                ></circle>
              </svg>
            </div>
            <div className="modal-right-comment">
              <div className="modal-right-comment-author">
                {/* {pastCommentList.map((comment, index) => {
                  return (
                    <PastComment
                      name={comment.userName}
                      comment={comment.content}
                      key={index}
                    />
                  );
                })} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewComment;
