import React from 'react';
import Comment from '../Feed/Comment/Comment';
import PastComment from '../Feed/Comment/PastComment';
import { Link } from 'react-router-dom';

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      commentList: [],
      pastCommentList: [],
    };
  }

  inputComment = event => {
    this.setState({
      comment: event.target.value,
    });
  };

  postComment = () => {
    this.setState({
      commentList: this.state.commentList.concat([this.state.comment]),
      comment: '',
    });
  };

  componentDidMount() {
    const commentProps = this.props.comments;
    this.setState({ pastCommentList: commentProps });
  }
  render() {
    const { index, profileImg, author, img, likeCount, title, commentCount } =
      this.props;
    const { pastCommentList, commentList, comment } = this.state;
    const { inputComment, postComment } = this;
    return (
      <div className="feed" key={index}>
        <article>
          <div className="article-head">
            <Link to="/" className="article-profile">
              <img src={profileImg} alt="profileImg" />
              <img
                src="images/geonwoojeon/images/icon/Instagram_Stories_ring.svg"
                alt="ringImg"
              />
              <span className="article-ID">{author}</span>
            </Link>
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
          <div className="article-body">
            <img src={img} alt="img2" />
          </div>
          <div className="article-bottom">
            <div className="article-bottom-icon">
              <div className="article-bottom-icon-left">
                <button
                  type="button"
                  className="article-bottom-icon-left-heart"
                >
                  <svg
                    aria-label="좋아요"
                    fill="#262626"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="article-bottom-icon-left-comment"
                >
                  <svg
                    aria-label="댓글 달기"
                    fill="#262626"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path
                      clipRule="evenodd"
                      d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="article-bottom-icon-left-share"
                >
                  <svg
                    aria-label="게시물 공유"
                    fill="#262626"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                  </svg>
                </button>
              </div>
              <div className="article-bottom-icon-right">
                <button type="button" className="article-bottom-icon-left-save">
                  <svg
                    aria-label="저장"
                    fill="#262626"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="article-bottom-thank">
              <Link to="/">
                좋아요 <span>{likeCount}</span>개
              </Link>
            </div>
            <div className="article-bottom-title text">
              {author}
              <span>{title}</span>
            </div>
            <Link to="/" className="article-bottom-more-comment">
              댓글 {commentCount}개 모두 보기
            </Link>
            <div className="article-bottom-comment-box">
              {pastCommentList.map((comment, index) => {
                return (
                  <PastComment
                    name={comment.userName}
                    comment={comment.content}
                    key={index}
                  />
                );
              })}
              <div>
                {commentList.map((comment, index) => {
                  return (
                    <Comment name={'raing_8'} comment={comment} key={index} />
                  );
                })}
              </div>
            </div>
            <div className="article-bottom-past-time">3시간 전</div>
            <div className="article-bottom-input">
              <button type="button" className="article-bottom-input-emoji">
                <svg
                  aria-label="이모티콘"
                  fill="#262626"
                  height="24"
                  viewBox="0 0 48 48"
                  width="24"
                >
                  <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path>
                  <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path>
                </svg>
              </button>
              <form>
                <input
                  className="article-bottom-input-comment"
                  type="text"
                  placeholder="댓글 달기.."
                  value={comment}
                  onChange={inputComment}
                />
                <button
                  type="submit"
                  className="article-bottom-input-posting"
                  disabled={comment.length < 1}
                  onClick={postComment}
                >
                  게시
                </button>
              </form>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Feed;
