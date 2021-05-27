import React from 'react';
import './Login.scss';
import { Link, withRouter } from 'react-router-dom';

class LoginWoo extends React.Component {
  goToMain = () => {
    this.props.history.push('/mainwoo');
  };

  render() {
    return (
      <div className="login">
        <main>
          <div className="login-box">
            <h1 className="title">westagram</h1>
            <form className="input-boxes">
              <input
                id="email-input-box"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                id="password-input-box"
                type="password"
                placeholder="비밀번호"
              />
            </form>
            <button
              onClick={this.goToMain}
              type="button"
              id="login-button"
              value="0"
            >
              로그인
            </button>
            <div className="progerss-bar">
              <div className="grogress-bar-left"></div>
              <div className="preogress-bar-text">또는</div>
              <div className="grogress-bar-right"></div>
            </div>
            <button
              type="button"
              className="facebook-button"
              id="facebooke-login"
            >
              <span>
                <img
                  src="/images/geonwoojeon/images/icon/facebook.png"
                  alt="facebook"
                />
              </span>
              Facebook으로 로그인
            </button>
            <button
              type="button"
              className="facebook-button"
              id="forget-password"
            >
              비밀번호를 잊으셨나요?
            </button>
          </div>
          <div className="sign-up-box">
            <div>
              계정이 없으신가요? <Link to="/main">가입하기</Link>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(LoginWoo);
