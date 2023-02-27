import './Login.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [isActive, setIsActive] = useState(true);

  const goToMain = () => {
    navigate('/main');
  };

  const isPassedLogin = isActive => {
    return id.includes('@') && pw.length >= 5
      ? setIsActive(!isActive)
      : setIsActive(isActive);
  };
  console.log(isActive);

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
        <div className="loginLogo">wetagram</div>
        <form className="loginForm">
          <input
            id="loginId"
            className="loginText"
            type="text"
            name="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserId}
            onKeyUp={isPassedLogin}
          />
          <input
            id="loginPw"
            className="loginText"
            type="password"
            name="password"
            placeholder="비밀번호"
            onChange={saveUserPw}
            onKeyUp={isPassedLogin}
          />

          <button
            disabled={isActive}
            id="activeBtn"
            className={isActive ? 'unactiveBtn' : 'activeBtn'}
            type="button"
            onClick={goToMain}
          >
            로그인
          </button>
        </form>
        <a className="loginBottom" href="#">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </article>
  );
};

export default Login;
