import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = { userId: '', userPw: '' };
  }

  validateId = email => {
    const emailRegExp =
      /[a-zA-Z0-9.-_+!]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,}(?:.[a-zA-Z0-9]{2,3})?/;
    let isValidEmail = false;
    const idRegExp = new RegExp(emailRegExp);

    if (idRegExp.test(email)) {
      isValidEmail = true;
    }
    return isValidEmail;
  };

  validatePassword = password => {
    const passwordRegExp = /[a-zA-Z0-9]{5,100}/;
    let isValidPassword = false;
    const pwRegExp = new RegExp(passwordRegExp);

    if (pwRegExp.test(password)) {
      isValidPassword = true;
    }
    return isValidPassword;
  };

  validateInputData = (id, pw) => {
    return this.validateId(id) && this.validatePassword(pw);
  };

  handleInput = e => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        this.validateInputData(this.state.userId, this.state.userPw);
      }
    );
  };

  handleSubmit = e => {
    console.log('submit');

    e.preventDefault();
    if (this.validateInputData(this.state.userId, this.userPw)) return;

    this.props.history.push('/main');
  };

  render() {
    const { userId, userPw } = this.state;
    const isDisabled = this.validateInputData(userId, userPw) ? false : true;

    return (
      <>
        <section className="entire-container">
          <div className="entire">
            <div className="entire_top content">
              <div className="login_container">
                <h1>westagram</h1>
                <div className="form_container">
                  <form onSubmit={this.handleSubmit}>
                    <input
                      type="text"
                      name="userId"
                      placeholder="전화번호, 사용자 이름 또는 이메일"
                      value={this.state.userId}
                      onChange={this.handleInput}
                    />
                    <input
                      type="password"
                      name="userPw"
                      placeholder="비밀번호"
                      value={this.state.userPw}
                      onChange={this.handleInput}
                    />
                    <Link to="/main">
                      <button
                        className="login-button"
                        type="submit"
                        disabled={isDisabled}
                        onClick={this.handleSubmit}
                      >
                        로그인
                      </button>
                    </Link>
                  </form>

                  <div className="line_container">
                    <div className="line"></div>
                    <div className="line-word">또는</div>
                    <div className="line"></div>
                  </div>

                  <button className="social-login-button">
                    <img
                      src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ1NS43MyA0NTUuNzMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1NS43MyA0NTUuNzM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiMzQTU1OUY7IiBkPSJNMCwwdjQ1NS43M2gyNDIuNzA0VjI3OS42OTFoLTU5LjMzdi03MS44NjRoNTkuMzN2LTYwLjM1M2MwLTQzLjg5MywzNS41ODItNzkuNDc1LDc5LjQ3NS03OS40NzUNCgloNjIuMDI1djY0LjYyMmgtNDQuMzgyYy0xMy45NDcsMC0yNS4yNTQsMTEuMzA3LTI1LjI1NCwyNS4yNTR2NDkuOTUzaDY4LjUyMWwtOS40Nyw3MS44NjRoLTU5LjA1MVY0NTUuNzNINDU1LjczVjBIMHoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
                      alt="facebook button"
                    />
                    <span>Facebook으로 로그인</span>
                  </button>
                </div>

                <a className="search-password" href="/">
                  비밀번호를 잊으셨나요?
                </a>
              </div>
            </div>

            <div className="entire_bottom content">
              <p>
                계정이 없으신가요?&nbsp;
                <a href="https://www.instagram.com/accounts/emailsignup/">
                  가입하기
                </a>
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(Login);
