import './Login.scss';
import react, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  function saveUserId(event) {
    setId(event.target.value);
    console.log('id', id);
  }

  function saveUserPw(event) {
    setPw(event.target.value);
    console.log('pw', pw);
  }

  return (
    <article>
      <div className="loginWrapper">
        <div className="login_logo">wetagram</div>
        <form className="login_form">
          <input
            id="LOGIN_ID"
            className="login_text"
            type="text"
            name="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserId}
          />
          <input
            id="LOGIN_PW"
            className="login_text"
            type="password"
            name="id"
            placeholder="비밀번호"
            onChange={saveUserPw}
          />
          <Link to="/main">
            <button id="LOGIN_BTN" className="login_btn" type="button">
              로그인
            </button>
          </Link>
        </form>
        <a className="login_bottom" href="">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </article>
  );
};

export default Login;
