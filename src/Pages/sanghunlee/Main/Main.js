import React, { Component } from 'react';
import Nav from '../../../Components/Nav/Nav';
import Feed from './Feed';
import '../styles/Common.scss';
import './Main.scss';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      feedList: [],
      inputValue: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedList: data,
        });
      });
  }

  getCommentValue = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  postComment = feedId => {
    if (this.state.inputValue.length > 0) {
      let newFeedList = Array.from(this.state.feedList);
      newFeedList[feedId].comment.push({
        id: this.state.feedList[feedId].comment.length + 1,
        userName: 'simoniful',
        content: this.state.inputValue,
        isLiked: false,
      });
      this.setState({
        feedList: newFeedList,
        inputValue: '',
      });
    }
  };

  postByEnter = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.postComment(e.target.id);
    }
  };

  render() {
    return (
      <section className="Main">
        <Nav />
        <main className="main">
          <div className="mainContainer">
            <section className="feedsBox">
              <div className="feedsWrap">
                <div className="feeds">
                  <Feed
                    feedList={this.state.feedList}
                    inputValue={this.state.inputValue}
                    getCommentValue={this.getCommentValue}
                    postComment={this.postComment}
                    postByEnter={this.postByEnter}
                  />
                </div>
              </div>
            </section>

            <section className="recommandContainer">
              <article className="profileContainer">
                <div className="profileBox">
                  <div className="profileWrap">
                    <div className="myselfieBox">
                      <div className="myselfieWrap">
                        <canvas
                          className="myselfieFrame"
                          height="66"
                          width="66"
                        ></canvas>
                        <a href="/" className="myselfieLink">
                          <img
                            src="/images/sanghunlee/selfie2.jpeg"
                            alt="내 이미지"
                            className="myselfie"
                          ></img>
                        </a>
                      </div>
                    </div>
                    <div className="myIdBox">
                      <div className="mainIdContainer" id="mymainId">
                        <div className="mainIdBox">
                          <div className="mainIdWrap">
                            <a className="mainIdLink" href="/">
                              simoniful
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="subIdContainer" id="mysubId">
                        <div className="subIdBox">
                          <div className="subIdWrap">
                            <div className="subId">simoniful</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="changeButtonContainer">
                      <button className="changeButton">
                        <div className="changeButtonText">전환</div>
                      </button>
                    </div>
                  </div>
                </div>
              </article>

              <article className="storyContainer">
                <div className="storyTitleBox">
                  <div className="storyTitleWrap">
                    <div className="storyTitle">스토리</div>
                  </div>
                  <a href="/" className="seeAllBox">
                    <div className="seeAllText">모두 보기</div>
                  </a>
                </div>
                <div className="storyMainBox">
                  <div className="storyMainWrap">
                    <div className="storyListsBox">
                      <div className="storyLists">
                        <div className="storyList">
                          <div className="storySelfieContainer">
                            <div className="storySelfieBox">
                              <div className="storySelfieWrap">
                                <canvas
                                  className="storySelfieFrame"
                                  height="42"
                                  width="42"
                                ></canvas>
                                <a href="/" className="storySelfieLink">
                                  <img
                                    src="/images/sanghunlee/wecode.jpeg"
                                    alt=""
                                    className="storySelfieImg"
                                  ></img>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="storyUserNameContainer">
                            <div className="storyUserNameBox">
                              <div className="storyUserNameWrap">
                                <span className="storyUserName">
                                  <a href="/" className="storyUserNameLink">
                                    wecode_bootcamp
                                  </a>
                                </span>
                              </div>
                            </div>
                            <div className="storyUserLogintimeBox">
                              <div className="storyUserLogintime">1분 전</div>
                            </div>
                          </div>
                        </div>

                        <div className="storyList">
                          <div className="storySelfieContainer">
                            <div className="storySelfieBox">
                              <div className="storySelfieWrap">
                                <canvas
                                  className="storySelfieFrame"
                                  height="42"
                                  width="42"
                                ></canvas>
                                <a href="/" className="storySelfieLink">
                                  <img
                                    src="/images/sanghunlee/wecode.jpeg"
                                    alt=""
                                    className="storySelfieImg"
                                  ></img>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="storyUserNameContainer">
                            <div className="storyUserNameBox">
                              <div className="storyUserNameWrap">
                                <span className="storyUserName">
                                  <a href="/" className="storyUserNameLink">
                                    wecode_bootcamp
                                  </a>
                                </span>
                              </div>
                            </div>
                            <div className="storyUserLogintimeBox">
                              <div className="storyUserLogintime">1시간 전</div>
                            </div>
                          </div>
                        </div>

                        <div className="storyList">
                          <div className="storySelfieContainer">
                            <div className="storySelfieBox">
                              <div className="storySelfieWrap">
                                <canvas
                                  className="storySelfieFrame"
                                  height="42"
                                  width="42"
                                ></canvas>
                                <a href="/" className="storySelfieLink">
                                  <img
                                    src="/images/sanghunlee/wecode.jpeg"
                                    alt=""
                                    className="storySelfieImg"
                                  ></img>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="storyUserNameContainer">
                            <div className="storyUserNameBox">
                              <div className="storyUserNameWrap">
                                <span className="storyUserName">
                                  <a href="/" className="storyUserNameLink">
                                    wecode_bootcamp
                                  </a>
                                </span>
                              </div>
                            </div>
                            <div className="storyUserLogintimeBox">
                              <div className="storyUserLogintime">1일 전</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article className="storyContainer">
                <div className="storyTitleBox">
                  <div className="storyTitleWrap">
                    <div className="storyTitle">회원님을 위한 추천</div>
                  </div>
                  <a href="/" className="seeAllBox">
                    <div className="seeAllText">모두 보기</div>
                  </a>
                </div>
                <div className="storyMainBox">
                  <div className="storyMainWrap">
                    <div className="storyListsBox">
                      <div className="storyLists">
                        <div className="storyList">
                          <div className="storySelfieContainer">
                            <div className="storySelfieBox">
                              <div className="storySelfieWrap">
                                <canvas
                                  className="storySelfieFrame"
                                  height="42"
                                  width="42"
                                ></canvas>
                                <a href="/" className="storySelfieLink">
                                  <img
                                    src="/images/sanghunlee/wecode.jpeg"
                                    alt=""
                                    className="storySelfieImg"
                                  ></img>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="storyUserNameContainer">
                            <div className="storyUserNameBox">
                              <div className="storyUserNameWrap">
                                <span className="storyUserName">
                                  <a href="/" className="storyUserNameLink">
                                    wecode_bootcamp
                                  </a>
                                </span>
                              </div>
                            </div>
                            <div className="storyUserLogintimeBox">
                              <div className="storyUserLogintime">
                                Westagram 신규가입
                              </div>
                            </div>
                          </div>
                          <div className="storyFollowContainer">
                            <button className="storyFollowButton">
                              <div className="followButtonText">팔로우</div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          </div>
        </main>
      </section>
    );
  }
}

export default Main;
