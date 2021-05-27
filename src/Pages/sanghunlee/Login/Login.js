import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/Common.scss';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      userPw: '',
      btnControl: 'disabled',
    };
  }

  goToMain = e => {
    e.preventDefault();
    this.props.history.push('/main');
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  changeBtnColor = () => {
    this.state.userId.includes('@') && this.state.userPw.length > 4
      ? this.setState({ btnControl: '' })
      : this.setState({ btnControl: 'disabled' });
  };

  render() {
    let login = (
      <main className="Login">
        <section className="container">
          <section className="contentsBox">
            <h1 className="logo">westagram</h1>
            <div className="formWrap">
              <form>
                <div className="inputBox">
                  <input
                    type="text"
                    maxLength="75"
                    name="userId"
                    className="userInput"
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                    autoComplete="off"
                    onChange={this.handleInput}
                    onKeyUp={this.changeBtnColor}
                  />
                </div>
                <div className="inputBox">
                  <input
                    type="password"
                    name="userPw"
                    className="userInput"
                    placeholder="비밀번호"
                    autoComplete="off"
                    onChange={this.handleInput}
                    onKeyUp={this.changeBtnColor}
                  />
                </div>
                <div className="buttonBox">
                  <button
                    className={'loginButton ' + this.state.btnControl}
                    onClick={this.goToMain}
                    type="submit"
                  >
                    로그인
                  </button>
                </div>
                <div className="sepBox">
                  <hr className="beforePara"></hr>
                  <div className="sepPara">또는</div>
                  <hr className="afterPara"></hr>
                </div>
                <div className="facebookLoginBox">
                  <button className="facebookLoginButton" type="button">
                    <span
                      className="facebookLogo"
                      style={{
                        backgroundImage: 'url(/images/sanghunlee/facebook.png)',
                      }}
                    ></span>
                    <span className="facebookPara">Facebook으로 로그인</span>
                  </button>
                </div>
                <a href="/" className="forgottenPassword">
                  비밀번호를 잊으셨나요?
                </a>
              </form>
            </div>
          </section>
          <section className="subContentsBox">
            <div className="acoountBox">
              <p className="checkAccount">
                계정이 없으신가요?
                <a href="/" className="join">
                  가입하기
                </a>
              </p>
            </div>
          </section>
          <section className="recommandBox">
            <p className="recommandPara">앱을 다운로드하세요.</p>
            <div className="recommandLinkBox">
              <a href="/" className="recommandLink">
                <img
                  className="recommandImg"
                  src="/images/sanghunlee/appstore.png"
                  alt="App Store에서 이용 가능"
                ></img>
              </a>
              <a href="/" className="recommandLink">
                <img
                  className="recommandImg"
                  src="/images/sanghunlee/android.png"
                  alt="Google Play에서 이용 가능"
                ></img>
              </a>
            </div>
          </section>
        </section>
      </main>
    );
    return login;
  }
}

export default withRouter(Login);
