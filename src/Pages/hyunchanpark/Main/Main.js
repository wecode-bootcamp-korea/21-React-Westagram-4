import React from 'react';
import Nav from '../../../Components/Nav/Nav';
import Feeds from './Feeds';
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

                <Feeds />
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
