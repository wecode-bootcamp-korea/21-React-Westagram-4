import React, { Component } from 'react';
import Comment from './Comment';

class Feed extends Component {
  render() {
    return this.props.feedList.map((feed, index) => {
      return (
        <article className="feed" key={index}>
          <header className="feedTitle">
            <div className="userSelfieBox">
              <div className="userSelfieComp">
                <canvas
                  className="userSelfieFrame"
                  height="42"
                  width="42"
                ></canvas>
                <a className="userSelfieLink" href="/">
                  <img
                    className="userSelfieImg"
                    src={feed.userPicUrl}
                    alt="userSelfie"
                  ></img>
                </a>
              </div>
            </div>
            <div className="userProfileBox">
              <div className="userNameBox">
                <div className="useNameWrap">
                  <span className="userName">
                    <a href="/" className="userNameLink">
                      {feed.userName}
                    </a>
                  </span>
                </div>
              </div>
              <div className="userLocationBox">
                <div className="blank"></div>
                <div className="userLocation">
                  <a href="/" className="userLocationLink">
                    {feed.location}
                  </a>
                </div>
              </div>
            </div>
          </header>

          <div className="feedOptionContainer">
            <button className="feedOptionButton  " type="button">
              <div className="feedOptionWrap ">
                <div
                  className="feedOptionIcon"
                  style={{ height: '24px', width: '24px' }}
                >
                  <svg
                    className="iconSvg"
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
              </div>
            </button>
          </div>

          <div className="feedPhotoContainer">
            <div className="feedPhotoBox">
              <div className="feedPhotoBoxInner">
                <div className="feedPhotoWrap">
                  <img
                    className="userPhoto"
                    src={feed.pictureUrl}
                    alt="userPhoto"
                    sizes="614px"
                  ></img>
                </div>
                <div className="feedPhotoCover"></div>
              </div>
            </div>
          </div>

          <div className="feedAppContainer">
            <section className="feedButtonBox">
              <span className="likeButtonWrap">
                <button className="likeButton " type="button">
                  <div className="likeIconWrap ">
                    <span className="likeIcon">
                      <svg
                        aria-label="좋아요 취소"
                        className="iconSvg"
                        fill="#ed4956"
                        height="24"
                        viewBox="0 0 48 48"
                        width="24"
                      >
                        <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                      </svg>
                    </span>
                  </div>
                </button>
              </span>
              <span className="commentButtonWrap">
                <button className="commentButton " type="button">
                  <div className="commentIconWrap ">
                    <svg
                      aria-label="댓글 달기"
                      className="iconSvg"
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
              </span>
              <span className="shareButtonWrap">
                <button className="shareButton" type="button">
                  <div className="shareIconWrap">
                    <svg
                      aria-label="게시물 공유"
                      className="iconSvg"
                      fill="#262626"
                      height="24"
                      viewBox="0 0 48 48"
                      width="24"
                    >
                      <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                    </svg>
                  </div>
                </button>
              </span>
              <span className="saveButtonWrap">
                <div>
                  <div aria-disabled="false" role="button">
                    <button className="saveButton " type="button">
                      <div className="saveIconWrap ">
                        <svg
                          aria-label="저장"
                          className="iconSvg"
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
                </div>
              </span>
            </section>
          </div>

          <section className="likeCountContainer">
            <div className="likeCountBox">
              <div className="likeUserImgContainer">
                <a className="likeUserImgLink" href="/">
                  <div className="likeUserImgBox">
                    <div
                      className="likeUserImgWrap"
                      style={{
                        height: '20px',
                        width: '20px',
                        order: '0',
                      }}
                    >
                      <span
                        className="likeUserImgFrame"
                        style={{ width: '20px', height: '20px' }}
                      >
                        <img
                          alt="프로필 사진"
                          className="likeUserImg"
                          src={feed.bestFreindPicUrl}
                        ></img>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="likeUserParaContainer">
                <span>
                  <span className="likeUserPara">
                    <a className="majorLikeUserLink" href="/">
                      {feed.bestFreind}
                    </a>
                  </span>
                  님
                  <a className="totalLikeUserLink" href="/">
                    외 <span>{feed.likeCount}</span>명
                  </a>
                  이 좋아합니다
                </span>
              </div>
            </div>
          </section>

          <section>
            <div className="feedParaContainer">
              <div className="feedParaBox">
                <div className="feedParaMain">
                  <div className="paraContentWrap">
                    <span className="paraContent">
                      <a className="postingUser" href="/">
                        {feed.userName}
                      </a>
                    </span>
                    <span className="mainPara">
                      {feed.content}
                      <span className="morePara">
                        ...
                        <button className="moreButton">더 보기</button>
                      </span>
                    </span>
                  </div>
                </div>
                <Comment commentList={feed.comment} />
              </div>
            </div>
          </section>

          <div className="feedPostingTimeBox">
            <a className="feedPostingTImeLink" href="/">
              <time
                className="feedPostingTime"
                dateTime="2021-05-19T13:20:34.000Z"
                title="2021년 5월 19일"
              >
                1시간 전
              </time>
            </a>
          </div>

          <section className="feedCommentContainer">
            <div className="feedCommentBox">
              <form
                className="feedCommentForm"
                onSubmit={this.props.postComment.bind(null, index)}
              >
                <button className="imogeButton" type="button">
                  <div className="imogeIcon">
                    <svg
                      aria-label="이모티콘"
                      className="iconSvg"
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
                <div
                  className="blank"
                  style={{ right: '53px', bottom: '355px' }}
                ></div>
                <textarea
                  id={index}
                  name="comment"
                  placeholder="댓글 달기..."
                  className="postingTextarea"
                  autoCorrect="off"
                  scroll="no"
                  value={this.props.inputValue}
                  onChange={this.props.getCommentValue}
                  onKeyPress={this.props.postByEnter}
                ></textarea>
                <button
                  className="postingButton"
                  type="button"
                  onClick={this.props.postComment.bind(null, index)}
                >
                  게시
                </button>
              </form>
            </div>
          </section>
        </article>
      );
    });
  }
}

export default Feed;
