import React from 'react';
import Nav from '../../../Components/Nav/Nav';
import Comment from './Comment';

import './Main.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      commentList: [
        {
          seqNum: 1,
          userId: 'rinmi_kun',
          commentText: ' It’s looks like a painting at first',
          Likers: ['whois?', 'hyunchan'],
        },
        {
          seqNum: 2,
          userId: 'whois?',
          commentText: 'fucking',
          Likers: [],
        },
        {
          seqNum: 3,
          userId: 'hyunchan',
          commentText: 'awesome',
          Likers: ['hyunchan'],
        },
        {
          seqNum: 4,
          userId: 'geonwoo',
          commentText: 'pretty',
          Likers: [],
        },
        {
          seqNum: 5,
          userId: 'sanghun',
          commentText: 'handsome',
          Likers: ['hyunchan'],
        },
        {
          seqNum: 6,
          userId: 'hyunchan',
          commentText: 'awesome',
          Likers: [],
        },
      ],
      commentText: '',
      isCommentSubmitDisable: true,
    };
  }

  onCommentText = e => {
    this.setState({ commentText: e.target.value });
  };

  onSubmitCommentForm = e => {
    e.preventDefault();
    const { commentList, commentText } = this.state;
    if (commentText === '') return;

    this.setState({
      commentList: [
        ...commentList,
        {
          seqNum: commentList[commentList.length - 1].seqNum + 1,
          userId: 'hyunchan',
          commentText: commentText.trim(),
          Likers: [],
        },
      ],
      commentText: '',
    });
  };

  onRemoveComment = e => {
    const { commentList } = this.state;

    this.setState({
      commentList: commentList.filter(
        comment => comment.seqNum !== Number(e.target.id)
      ),
    });
  };

  onToggleLike = e => {
    //TODO: like버튼 n depth obj state change
    this.setState({
      Likers: this.state.Likers.concat(['hyunchan']),
    });
  };

  render() {
    const { commentList, commentText } = this.state;

    const isCommentBtnDisable =
      this.state.commentText.length > 0 ? false : true;
    return (
      <>
        <Nav />
        <div className="main-container">
          <main className="section-container">
            <section className="main-section">
              <div className="left-contents">
                <div className="stories">
                  <div className="story-container">
                    <div className="story">
                      <div className="story-link-container">
                        <a href="/" className="story-link">
                          <div
                            className="link-background"
                            style={{
                              background:
                                'url("/images/hyunchanpark/images/insta-sprite.png) no-repeat -306px -66px',
                            }}
                          >
                            <div className="image-container">
                              <div
                                className="image-link"
                                style={{
                                  background:
                                    'url("/images/hyunchanpark/images/insta-sprite.png") no-repeat -306px 0px',
                                }}
                              ></div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <span className="story-name">name</span>
                    </div>

                    <div className="story">
                      <div className="story-link-container">
                        <a href="/" className="story-link">
                          <div
                            className="link-background"
                            style={{
                              background:
                                'url("/images/hyunchanpark/images/insta-sprite.png") no-repeat -306px -66px',
                            }}
                          >
                            <div className="image-container">
                              <div
                                className="image-link"
                                style={{
                                  background:
                                    'url("/images/hyunchanpark/images/insta-sprite.png") no-repeat -306px 0px',
                                }}
                              ></div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <span className="story-name">name</span>
                    </div>

                    <div className="story">
                      <div className="story-link-container">
                        <a href="/" className="story-link">
                          <div
                            className="link-background"
                            style={{
                              background:
                                'url("/images/hyunchanpark/images/insta-sprite.png") no-repeat -306px -66px',
                            }}
                          >
                            <div className="image-container">
                              <div
                                className="image-link"
                                style={{
                                  background: `url(/images/hyunchanpark/images/insta-sprite.png) no-repeat -306px 0px`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <span className="story-name">name</span>
                    </div>
                  </div>
                </div>

                <div className="feeds">
                  <article className="feed">
                    <header>
                      <div className="header-contents-align">
                        <div className="user-image-container">
                          <a href="/">
                            <img
                              src="/images/hyunchanpark/images/insta-mini.jpg"
                              className="user-image"
                              alt="사용자 이미지"
                            />
                          </a>
                        </div>
                        <div className="user-info-container">
                          <div className="user-info">
                            <a href="/">
                              <span className="user-name">instagram</span>
                            </a>
                            <span className="city">
                              KAYTRANADA
                              <span>•</span>
                              195
                            </span>
                          </div>
                        </div>
                      </div>
                      <button>•••</button>
                    </header>

                    <div className="feed-image">
                      <img
                        src="https://images.unsplash.com/photo-1621419079793-73020baef9eb?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="foods in table"
                      />
                    </div>

                    <div className="comments">
                      <div className="comments-icons">
                        <div>
                          <button>
                            <div className="icon-heart">
                              <svg
                                aria-label="좋아요"
                                className="_8-yf5"
                                fill="#262626"
                                height="24"
                                viewBox="0 0 48 48"
                                width="24"
                              >
                                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
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
                          <span>216,608</span>개
                        </a>
                      </div>

                      <div className="user-comment-container">
                        <div className="user-comment">
                          <a href="/" className="comment-id">
                            instagram
                          </a>
                          <span>My freestyle riding represents who I am. </span>
                        </div>

                        <div className="all-comments-show">
                          <a href="/">
                            댓글 <span>12,739</span>개 모두 보기
                          </a>
                        </div>

                        <div className="other-comments">
                          {commentList.map((comment, i) => (
                            <Comment
                              key={i}
                              seqNum={comment.seqNum}
                              userId={comment.userId}
                              username={comment.username}
                              commentText={comment.commentText}
                              Likers={comment.Likers}
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
                    </div>

                    <div className="post-comment">
                      <div className="comment-form-container">
                        <form
                          className="comment-form"
                          onSubmit={this.onSubmitCommentForm}
                        >
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
                            value={commentText}
                            onChange={this.onCommentText}
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
                  </article>
                </div>
              </div>

              <aside className="right-contents-container">
                <div className="right-contents">
                  <div className="profile-container transparent">
                    <div className="profile transparent">
                      <a className="userid-link" href="/">
                        <img
                          src="/images/hyunchanpark//images/user-icon.jpg"
                          alt="user님의 프로필 사진"
                        />
                      </a>
                      <div className="userinfo-text">
                        <a href="/">userId</a>
                        <span>username</span>
                      </div>
                    </div>
                    <button className="transparent">전환</button>
                  </div>

                  <div className="recommend-container transparent">
                    <div className="recommend transparent">
                      <span>회원님을 위한 추천</span>
                      <a className="suggest" href="/">
                        모두 보기
                      </a>
                    </div>
                    <ul className="recommend-list">
                      <li className="recommend-item">
                        <div className="item">
                          <a className="item-link" href="/">
                            <img
                              src="/images/hyunchanpark/images/insta-sprite.png"
                              alt="other user"
                            />
                          </a>
                          <div className="username">
                            <a href="/">imsj208</a>
                            <span>kingwoobinkim님 외 6명이 팔로우합니다</span>
                          </div>
                        </div>
                        <button className="follow-button transparent">
                          팔로우
                        </button>
                      </li>
                      <li className="recommend-item">
                        <div className="item">
                          <a className="item-link" href="/">
                            <img
                              src="/images/hyunchanpark/images/insta-sprite.png"
                              alt="other user"
                            />
                          </a>
                          <div className="username">
                            <a href="/">jinhyung.lee.5832</a>
                            <span>ycw12495님 외 1명이 팔로우합니다</span>
                          </div>
                        </div>
                        <button className="follow-button transparent">
                          팔로우
                        </button>
                      </li>
                      <li className="recommend-item">
                        <div className="item">
                          <a className="item-link" href="/">
                            <img
                              src="/images/hyunchanpark/images/insta-sprite.png"
                              alt="other user"
                            />
                          </a>
                          <div className="username">
                            <a href="/">msc_940216</a>
                            <span>회원님을 팔로우합니다</span>
                          </div>
                        </div>
                        <button className="follow-button transparent">
                          팔로우
                        </button>
                      </li>
                    </ul>
                  </div>

                  <footer>
                    <ul>
                      <li>
                        <a href="/">
                          <span>소개</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span>도움말</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span>홍보센터</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span>API</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span>채용정보</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span>개인정보처리방침</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span>약관</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span>위치</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span>인기계정</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span>해시태그</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span>언어</span>
                        </a>
                      </li>
                    </ul>
                    <span>© 2021 Instagram from Facebook</span>
                  </footer>
                </div>
              </aside>
            </section>
          </main>
        </div>
      </>
    );
  }
}

export default Main;
