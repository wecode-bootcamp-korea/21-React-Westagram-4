import React, { Component } from 'react';
import CommentList from './CommentList';
import './Main.scss';

class Feed extends Component {
  render() {
    const {
      id,
      userName,
      city,
      userImgSrc,
      feedImgSrc,
      feedLike,
      feedLikeCounts,
      contentText,
      comments,
    } = this.props;
    return (
      <>
        <article className="feed" id={id}>
          <header>
            <div className="header-contents-align">
              <div className="user-image-container">
                <a href="/">
                  <img
                    src={userImgSrc}
                    className="user-image"
                    alt="사용자 이미지"
                  />
                </a>
              </div>
              <div className="user-info-container">
                <div className="user-info">
                  <a href="/">
                    <span className="user-name">{userName}</span>
                  </a>
                  <span className="city">
                    {city}
                    {/* <span>•</span>
                    195 */}
                  </span>
                </div>
              </div>
            </div>
            <button>•••</button>
          </header>

          <div className="feed-image">
            <img src={feedImgSrc} alt="feedImage" />
          </div>

          <div className="comments">
            <div className="comments-icons">
              <div>
                <button>
                  <div className="icon-heart">
                    <svg
                      aria-label="좋아요"
                      className="_8-yf5"
                      fill={feedLike ? 'red' : '#262626'}
                      height="24"
                      viewBox="0 0 48 48"
                      width="24"
                    >
                      <path
                        d={
                          feedLike
                            ? 'M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z'
                            : 'M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z'
                        }
                      ></path>
                    </svg>
                  </div>
                </button>

                <button>
                  <div className="icon-reply">
                    <svg
                      aria-label="댓글 달기"
                      className="_8-yf5"
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
                  </div>
                </button>

                <button>
                  <div className="icon-share">
                    <svg
                      aria-label="게시물 공유"
                      className="_8-yf5"
                      fill="#262626"
                      height="24"
                      viewBox="0 0 48 48"
                      width="24"
                    >
                      <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                    </svg>
                  </div>
                </button>
              </div>

              <button className="button-bookmark">
                <div className="icon-bookmark">
                  <svg
                    aria-label="저장"
                    className="_8-yf5"
                    fill="#262626"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                  </svg>
                </div>
              </button>
            </div>

            <div className="like-counts">
              <a href="/">
                좋아요
                <span>{feedLikeCounts}</span>개
              </a>
            </div>

            <div className="user-comment-container">
              <div className="user-comment">
                <a href="/" className="comment-id">
                  {userName}
                </a>
                <span>{contentText}</span>
              </div>

              <CommentList comments={comments} />
            </div>
          </div>
        </article>
      </>
    );
  }
}

export default Feed;
