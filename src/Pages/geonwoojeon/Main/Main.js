import React from 'react';
import './Main.scss';
import Nav from '../../../Components/Nav/Nav';
import Feed from '../Components/Feed/Feed';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      pastCommentList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          pastCommentList: data,
        });
      });
  }
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
                {this.state.pastCommentList.map((comment, index) => {
                  return (
                    <Feed
                      index={index}
                      author={comment.author}
                      likeCount={comment.likeCount}
                      title={comment.title}
                      commentCount={comment.commentCount}
                      img={comment.img}
                      profileImg={comment.profileImg}
                      comments={comment.comments}
                    />
                  );
                })}
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
