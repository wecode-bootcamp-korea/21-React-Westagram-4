import React from 'react';
import './Main.scss';
import Nav from '../../../Components/Nav/Nav';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      commentList: [],
    };
  }

  inputComment = event => {
    this.setState({
      comment: event.target.value,
    });
    console.log(this.state.comment);
  };

  postComment = () => {
    this.setState({
      commentList: this.state.commentList.concat([this.state.comment]),
      comment: '',
    });
  };

  render() {
    return (
      <>
        <div className="main">
          <Nav />
          <main>
            <section id="main-section">
              <div id="main-left">
                <div className="story">
                  <div className="story-image">
                    <ul>
                      <li>
                        <a href="/">
                          <img
                            className="story-profile"
                            src="images/geonwoojeon/images/profile/1.jpeg"
                            alt="1"
                          />
                        </a>
                        <span className="story-ID">j_u_n98</span>
                        <img
                          className="stroy-ring"
                          src="images/geonwoojeon/images/icon/Instagram_Stories_ring.svg"
                          alt=""
                        />
                      </li>
                      <li>
                        <a href="/">
                          <img
                            className="story-profile"
                            src="images/geonwoojeon/images/profile/2.jpeg"
                            alt="2"
                          />
                        </a>
                        <span className="story-ID">eru77</span>
                        <img
                          className="stroy-ring"
                          src="images/geonwoojeon/images/icon/Instagram_Stories_ring.svg"
                          alt=""
                        />
                      </li>
                      <li>
                        <a href="/">
                          <img
                            className="story-profile"
                            src="images/geonwoojeon/images/profile/3.jpeg"
                            alt="3"
                          />
                        </a>
                        <span className="story-ID">rktbs1</span>
                        <img
                          className="stroy-ring"
                          src="images/geonwoojeon/images/icon/Instagram_Stories_ring.svg"
                          alt=""
                        />
                      </li>
                      <li>
                        <a href="/">
                          <img
                            className="story-profile"
                            src="images/geonwoojeon/images/profile/4.jpeg"
                            alt="4"
                          />
                        </a>
                        <span className="story-ID">gemsto..</span>
                        <img
                          className="stroy-ring"
                          src="images/geonwoojeon/images/icon/Instagram_Stories_ring.svg"
                          alt=""
                        />
                      </li>
                      <li>
                        <a href="/">
                          <img
                            className="story-profile"
                            src="images/geonwoojeon/images/profile/5.jpeg"
                            alt="5"
                          />
                        </a>
                        <span className="story-ID">l_s._</span>
                        <img
                          className="stroy-ring"
                          src="images/geonwoojeon/images/icon/Instagram_Stories_ring.svg"
                          alt=""
                        />
                      </li>
                      <li>
                        <a href="/">
                          <img
                            className="story-profile"
                            src="images/geonwoojeon/images/profile/6.jpeg"
                            alt="6"
                          />
                        </a>
                        <span className="story-ID">aydddd__</span>
                        <img
                          className="stroy-ring"
                          src="images/geonwoojeon/images/icon/Instagram_Stories_ring.svg"
                          alt=""
                        />
                      </li>
                      <li>
                        <a href="/">
                          <img
                            className="story-profile"
                            src="images/geonwoojeon/images/profile/7.jpeg"
                            alt="7"
                          />
                        </a>
                        <span className="story-ID">p_s_l.O</span>
                        <img
                          className="stroy-ring"
                          src="images/geonwoojeon/images/icon/Instagram_Stories_ring.svg"
                          alt=""
                        />
                      </li>
                      <li>
                        <a href="/">
                          <img
                            className="story-profile"
                            src="images/geonwoojeon/images/profile/8.jpeg"
                            alt="8"
                          />
                        </a>
                        <span className="story-ID">cdaa_p</span>
                        <img
                          className="stroy-ring"
                          src="images/geonwoojeon/images/icon/Instagram_Stories_ring.svg"
                          alt=""
                        />
                      </li>
                    </ul>
                  </div>
                  <button type="button" className="story-arrow">
                    <div className="story-arrow-image"></div>
                  </button>
                </div>
                <div className="feed">
                  <article>
                    <div className="article-head">
                      <a href="/" className="article-profile">
                        <img
                          src="images/geonwoojeon/images/profile/me.jpeg"
                          alt=""
                        />
                        <img
                          src="images/geonwoojeon/images/icon/Instagram_Stories_ring.svg"
                          alt=""
                        />
                        <span className="article-ID">raing_8</span>
                      </a>
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
                      <img
                        src="images/geonwoojeon/images/feed/ipad2.jpeg"
                        alt="2"
                      />
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
                          <button
                            type="button"
                            className="article-bottom-icon-left-save"
                          >
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
                        <a href="/">
                          좋아요 <span>123</span>개
                        </a>
                      </div>
                      <div className="article-bottom-title text">
                        raing_8<span> 아이패드 드로잉 🔥</span>
                      </div>
                      <a href="/" className="article-bottom-more-comment">
                        댓글 9개 모두 보기
                      </a>
                      <div className="article-bottom-comment-box">
                        <div className="article-bottom-comment text">
                          Skd_d.S<span> 우왕 멋쪄</span>
                          <span>
                            <svg
                              className="article-bottom-comment heart"
                              aria-label="좋아요"
                              height="12"
                              viewBox="0 0 48 48"
                              width="12"
                            >
                              <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                            </svg>
                          </span>
                        </div>
                        <div className="article-bottom-comment text">
                          m_M.M_mk<span> 👍👍👍👍</span>
                          <span>
                            <svg
                              className="article-bottom-comment heart"
                              aria-label="좋아요"
                              height="12"
                              viewBox="0 0 48 48"
                              width="12"
                            >
                              <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                            </svg>
                          </span>
                        </div>
                        <div>
                          {this.state.commentList.map((comment, index) => {
                            return (
                              <div
                                className="article-bottom-comment text"
                                key={index}
                              >
                                raing_8<span> {comment}</span>
                                <span>
                                  <i class="fas fa-times"></i>
                                  <svg
                                    className="article-bottom-comment heart"
                                    aria-label="좋아요"
                                    height="12"
                                    viewBox="0 0 48 48"
                                    width="12"
                                  >
                                    <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                                  </svg>
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="article-bottom-past-time">3시간 전</div>
                      <div className="article-bottom-input">
                        <button
                          type="button"
                          className="article-bottom-input-emoji"
                        >
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
                            value={this.state.comment}
                            onChange={this.inputComment}
                          />
                          <button
                            type="submit"
                            className="article-bottom-input-posting"
                            disabled={this.state.comment.length < 1}
                            onClick={this.postComment}
                          >
                            게시
                          </button>
                        </form>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="feed">
                  <article>
                    <div className="article-head">
                      <a href="/" className="article-profile">
                        <img
                          src="images/geonwoojeon/images/profile/1.jpeg"
                          alt=""
                        />
                        <img
                          src="images/geonwoojeon/images/icon/Instagram_Stories_ring.svg"
                          alt=""
                        />
                        <span className="article-ID">dda_._._asa</span>
                      </a>
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
                      <img
                        src="images/geonwoojeon/images/feed/ka1.jpeg"
                        alt="2"
                      />
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
                          <button
                            type="button"
                            className="article-bottom-icon-left-save"
                          >
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
                        <a href="/">
                          좋아요 <span>98</span>개
                        </a>
                      </div>
                      <div className="article-bottom-title text">
                        dda_._._asa<span> 이게 낭만이지~</span>
                      </div>
                      <a href="/" className="article-bottom-more-comment">
                        댓글 9개 모두 보기
                      </a>
                      <div className="article-bottom-comment-box">
                        <div className="article-bottom-comment text">
                          Skd_d.S<span> 아 뭐야뭐야 나는 왜빼 ㅠ </span>
                          <span>
                            <svg
                              className="article-bottom-comment heart"
                              aria-label="좋아요"
                              height="12"
                              viewBox="0 0 48 48"
                              width="12"
                            >
                              <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                            </svg>
                          </span>
                        </div>
                        <div className="article-bottom-comment text">
                          m_M.M_mk<span> zzzzz</span>
                          <span>
                            <svg
                              className="article-bottom-comment heart"
                              aria-label="좋아요"
                              height="12"
                              viewBox="0 0 48 48"
                              width="12"
                            >
                              <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                            </svg>
                          </span>
                        </div>
                        <div>
                          {this.state.commentList.map((comment, index) => {
                            return (
                              <div
                                className="article-bottom-comment text"
                                key={index}
                              >
                                raing_8<span> {comment}</span>
                                <span>
                                  <i class="fas fa-times"></i>
                                  <svg
                                    className="article-bottom-comment heart"
                                    aria-label="좋아요"
                                    height="12"
                                    viewBox="0 0 48 48"
                                    width="12"
                                  >
                                    <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                                  </svg>
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="article-bottom-past-time">1일 전</div>
                      <div className="article-bottom-input">
                        <button
                          type="button"
                          className="article-bottom-input-emoji"
                        >
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
                            value={this.state.comment}
                            onChange={this.inputComment}
                          />
                          <button
                            type="submit"
                            className="article-bottom-input-posting"
                            disabled={this.state.comment.length < 1}
                            onClick={this.postComment}
                          >
                            게시
                          </button>
                        </form>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="feed">
                  <article>
                    <div className="article-head">
                      <a href="/" className="article-profile">
                        <img
                          src="images/geonwoojeon/images/profile/1.jpeg"
                          alt=""
                        />
                        <img
                          src="images/geonwoojeon/images/icon/Instagram_Stories_ring.svg"
                          alt=""
                        />
                        <span className="article-ID">dlsamm66</span>
                      </a>
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
                      <img
                        src="images/geonwoojeon/images/feed/cho.jpeg"
                        alt="2"
                      />
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
                          <button
                            type="button"
                            className="article-bottom-icon-left-save"
                          >
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
                        <a href="/">
                          좋아요 <span>76</span>개
                        </a>
                      </div>
                      <div className="article-bottom-title text">
                        dlsamm66<span> 초콜릿 같지않은 초콜릿💩</span>
                      </div>
                      <a href="/" className="article-bottom-more-comment">
                        댓글 13개 모두 보기
                      </a>
                      <div className="article-bottom-comment-box">
                        <div className="article-bottom-comment text">
                          Skd_d.S<span> 나도 한입 찬스!</span>
                          <span>
                            <svg
                              className="article-bottom-comment heart"
                              aria-label="좋아요"
                              height="12"
                              viewBox="0 0 48 48"
                              width="12"
                            >
                              <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                            </svg>
                          </span>
                        </div>
                        <div className="article-bottom-comment text">
                          m_M.M_mk<span> zzzzz</span>
                          <span>
                            <svg
                              className="article-bottom-comment heart"
                              aria-label="좋아요"
                              height="12"
                              viewBox="0 0 48 48"
                              width="12"
                            >
                              <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                            </svg>
                          </span>
                        </div>
                        <div>
                          {this.state.commentList.map((comment, index) => {
                            return (
                              <div
                                className="article-bottom-comment text"
                                key={index}
                              >
                                raing_8<span> {comment}</span>
                                <span>
                                  <i class="fas fa-times"></i>
                                  <svg
                                    className="article-bottom-comment heart"
                                    aria-label="좋아요"
                                    height="12"
                                    viewBox="0 0 48 48"
                                    width="12"
                                  >
                                    <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                                  </svg>
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="article-bottom-past-time">20분 전</div>
                      <div className="article-bottom-input">
                        <button
                          type="button"
                          className="article-bottom-input-emoji"
                        >
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
                            value={this.state.comment}
                            onChange={this.inputComment}
                          />
                          <button
                            type="submit"
                            className="article-bottom-input-posting"
                            disabled={this.state.comment.length < 1}
                            onClick={this.postComment}
                          >
                            게시
                          </button>
                        </form>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div id="main-right">
                <div className="main-right-profile">
                  <div className="main-right-profile-image">
                    <img
                      src="images/geonwoojeon/images/profile/me.jpeg"
                      alt="me"
                    />
                  </div>
                  <div className="main-right-profile-nickname">
                    raing_8
                    <div className="main-right-profile-name">전건우</div>
                  </div>
                  <div className="main-right-profile-transform">전환</div>
                </div>
                <div className="main-right-push">
                  <p>회원님들 위한 추천</p>
                  <span>모두 보기</span>
                </div>
                <div className="main-right-follow">
                  <div className="main-right-follow-image">
                    <img
                      src="images/geonwoojeon/images/profile/10.jpeg"
                      alt="10"
                    />
                  </div>
                  <div className="main-right-follow-nickname">
                    c.zOOOn
                    <div className="main-right-follow-comment">
                      회원님을 팔로우합니다
                    </div>
                  </div>
                  <div className="main-right-follow-button">팔로우</div>
                </div>
                <div className="main-right-follow">
                  <div className="main-right-follow-image">
                    <img
                      src="images/geonwoojeon/images/profile/5.jpeg"
                      alt="5"
                    />
                  </div>
                  <div className="main-right-follow-nickname">
                    heong.as
                    <div className="main-right-follow-comment">
                      회원님을 팔로우합니다
                    </div>
                  </div>
                  <div className="main-right-follow-button">팔로우</div>
                </div>
                <div className="main-right-follow">
                  <div className="main-right-follow-image">
                    <img
                      src="images/geonwoojeon/images/profile/8.jpeg"
                      alt="8"
                    />
                    <img
                      src="images/geonwoojeon/images/icon/Instagram_Stories_ring.svg"
                      alt=""
                    />
                  </div>
                  <div className="main-right-follow-nickname">
                    csdn_93
                    <div className="main-right-follow-comment">
                      회원님을 팔로우합니다
                    </div>
                  </div>
                  <div className="main-right-follow-button">팔로우</div>
                </div>
                <div className="main-right-follow">
                  <div className="main-right-follow-image">
                    <img
                      src="images/geonwoojeon/images/profile/11.jpeg"
                      alt="11"
                    />
                  </div>
                  <div className="main-right-follow-nickname">
                    hy_min._.
                    <div className="main-right-follow-comment">
                      회원님을 팔로우합니다
                    </div>
                  </div>
                  <div className="main-right-follow-button">팔로우</div>
                </div>
                <div className="main-right-follow">
                  <div className="main-right-follow-image">
                    <img
                      src="images/geonwoojeon/images/profile/5.jpeg"
                      alt="5"
                    />
                  </div>
                  <div className="main-right-follow-nickname">
                    ahffkdb
                    <div className="main-right-follow-comment">
                      회원님을 팔로우합니다
                    </div>
                  </div>
                  <div className="main-right-follow-button">팔로우</div>
                </div>
                <ul className="main-right-terms">
                  <li>소개</li>
                  <li>도움말</li>
                  <li>홍보 센터</li>
                  <li>API</li>
                  <li>채용 정보</li>
                  <li>개인정보처리방침</li>
                  <li>약관</li>
                  <li>위치</li>
                  <li>인기계정</li>
                  <li>해시태그</li>
                  <li>언어</li>
                </ul>
                <div className="main-right-terms-bottom">
                  © 2021 INSTAGRAM FROM FACEBOOK
                </div>
              </div>
            </section>
          </main>
        </div>
      </>
    );
  }
}

export default Main;
