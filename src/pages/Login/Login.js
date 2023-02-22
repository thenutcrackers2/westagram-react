import react from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <article>
      <div class="login_wrapper">
        <div class="login_logo">wetagram</div>
        <form class="login_form">
          <input
            id="LOGIN_ID"
            class="login_text"
            type="text"
            name="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            id="LOGIN_PW"
            class="login_text"
            type="password"
            name="id"
            placeholder="비밀번호"
          />
          <Link to="/main">
            <button id="LOGIN_BTN" class="login_btn" type="button">
              로그인
            </button>
          </Link>
        </form>
        <a class="login_bottom" href="">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </article>
  );
};

export default Login;
