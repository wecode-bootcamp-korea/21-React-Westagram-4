import React, { Component } from 'react';
import Comment from './Comment';
import './Main.scss';

class CommentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultComments: this.props.comments,
      commentList: [],
      commentValue: '',
      isCommentSubmitDisable: true,
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     commentList: COMMENT,
  //   });
  // }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data,
        });
      });
  }

  onCommentValue = e => {
    this.setState({ commentValue: e.target.value });
  };

  onSubmitCommentForm = e => {
    e.preventDefault();

    const { commentList, commentValue } = this.state;
    if (commentValue === '') return;

    this.setState({
      commentList: [
        ...commentList,
        {
          id: commentList.length + 1,
          userName: 'hyunchan',
          content: commentValue.trim(),
          isLiked: false,
        },
      ],
      commentValue: '',
    });
  };

  onRemoveComment = e => {
    const { commentList } = this.state;

    this.setState({
      commentList: commentList.filter(
        comment => comment.id !== Number(e.target.id)
      ),
    });
  };

  onToggleLike = e => {
    const { commentList } = this.state;
    console.log(e.target.id);
    this.setState({
      isLiked: !commentList[e.target.id].isLiked,
    });
  };

  render() {
    const { commentList, commentValue, defaultComments } = this.state;
    const isCommentBtnDisable =
      this.state.commentValue.length > 0 ? false : true;
    return (
      <>
        <div>
          <div className="all-comments-show">
            <a href="/">
              댓글 <span>12,739</span>개 모두 보기
            </a>
          </div>

          <div className="other-comments">
            {commentList.map((comment, i) => (
              <Comment
                key={comment.id}
                id={comment.id}
                userName={comment.userName}
                defaultComments={defaultComments}
                commentValue={comment.content}
                isLiked={comment.isLiked}
                onToggleLike={this.onToggleLike}
                onRemoveComment={this.onRemoveComment}
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
            <form className="comment-form" onSubmit={this.onSubmitCommentForm}>
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
              <input
                type="text"
                className="comment-input"
                value={commentValue}
                onChange={this.onCommentValue}
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
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default CommentList;
