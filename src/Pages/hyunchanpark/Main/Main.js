import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../../Components/Nav/Nav';
import FeedList from './FeedList';
import './Main.scss';

class Main extends React.Component {
  render() {
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
                        <Link to="/main" className="story-link">
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
                        </Link>
                      </div>
                      <span className="story-name">name</span>
                    </div>

                    <div className="story">
                      <div className="story-link-container">
                        <Link to="/main" className="story-link">
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
                        </Link>
                      </div>
                      <span className="story-name">name</span>
                    </div>

                    <div className="story">
                      <div className="story-link-container">
                        <Link to="/main" className="story-link">
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
                        </Link>
                      </div>
                      <span className="story-name">name</span>
                    </div>
                  </div>
                </div>

                <FeedList />
              </div>

              <aside className="right-contents-container">
                <div className="right-contents">
                  <div className="profile-container transparent">
                    <div className="profile transparent">
                      <Link to="/main" className="userid-link">
                        <img
                          src="/images/hyunchanpark//images/user-icon.jpg"
                          alt="user님의 프로필 사진"
                        />
                      </Link>
                      <div className="userinfo-text">
                        <Link to="/main">userId</Link>
                        <span>username</span>
                      </div>
                    </div>
                    <button className="transparent">전환</button>
                  </div>

                  <div className="recommend-container transparent">
                    <div className="recommend transparent">
                      <span>회원님을 위한 추천</span>
                      <Link to="/main" className="suggest">
                        모두 보기
                      </Link>
                    </div>
                    <ul className="recommend-list">
                      <li className="recommend-item">
                        <div className="item">
                          <Link to="/main" className="item-link">
                            <img
                              src="/images/hyunchanpark/images/insta-sprite.png"
                              alt="other user"
                            />
                          </Link>
                          <div className="username">
                            <Link to="/main">imsj208</Link>
                            <span>kingwoobinkim님 외 6명이 팔로우합니다</span>
                          </div>
                        </div>
                        <button className="follow-button transparent">
                          팔로우
                        </button>
                      </li>
                      <li className="recommend-item">
                        <div className="item">
                          <Link to="/main" className="item-link">
                            <img
                              src="/images/hyunchanpark/images/insta-sprite.png"
                              alt="other user"
                            />
                          </Link>
                          <div className="username">
                            <Link to="/main">jinhyung.lee.5832</Link>
                            <span>ycw12495님 외 1명이 팔로우합니다</span>
                          </div>
                        </div>
                        <button className="follow-button transparent">
                          팔로우
                        </button>
                      </li>
                      <li className="recommend-item">
                        <div className="item">
                          <Link to="/main" className="item-link">
                            <img
                              src="/images/hyunchanpark/images/insta-sprite.png"
                              alt="other user"
                            />
                          </Link>
                          <div className="username">
                            <Link to="/main">msc_940216</Link>
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
                        <Link to="/main">
                          <span>소개</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/main">
                          <span>도움말</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/main">
                          <span>홍보센터</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/main">
                          <span>API</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/main">
                          <span>채용정보</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/main">
                          <span>개인정보처리방침</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/main">
                          <span>약관</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/main">
                          <span>위치</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/main">
                          <span>인기계정</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/main">
                          <span>해시태그</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/main">
                          <span>언어</span>
                        </Link>
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
