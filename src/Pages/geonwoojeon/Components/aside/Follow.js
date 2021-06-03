import React from 'react';

class Follow extends React.Component {
  render() {
    return (
      <div className="main-right-follow">
        <div className="main-right-follow-image">
          <img src={this.props.profileImg} alt="profile-10" />
        </div>
        <div className="main-right-follow-nickname">
          {this.props.nickName}
          <div className="main-right-follow-comment">회원님을 팔로우합니다</div>
        </div>
        <div className="main-right-follow-button">팔로우</div>
      </div>
    );
  }
}

export default Follow;
