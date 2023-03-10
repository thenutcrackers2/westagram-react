import react from 'react';
import './Main.scss';

const Main = () => {
  return (
    <>
      <nav>
        <div class="nav-contents">
          <div class="nav-logo">
            <img
              class="logo-img"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"
            />
            <div class="vertical-line"></div>
            <img
              class="logo-text"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo_text.png"
            />
          </div>

          <input class="nav-search" placeholder="검색" />

          <div class="nav-link">
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" />
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" />
          </div>
        </div>
      </nav>

      <main>
        <div class="feeds">
          <article>
            <div class="feed-user-id-box">
              <div class="feed-user-pic-wrap">
                <img src="images/miniprofile.jpeg" alt="" />
              </div>
              <div class="feed-user-id">kitaegram</div>
              <div class="feed-three-dot-wrap">
                <div class="three-dot-menu">
                  <a href="#">
                    <img
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- 피드 사진 --> */}
            <div class="feed-img-wrap">
              <img src="images/feedPic.jpeg" alt="" />
            </div>
            {/* <!-- 피드 아이콘 --> */}
            <div class="feed-icons-wrap">
              <div class="feed-icons-left">
                <div class="icon-heart">
                  <a href="#">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                  </a>
                </div>
                <div class="icon-balloon">
                  <a href="#">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" />
                  </a>
                </div>
                <div class="icon-share">
                  <a href="#none">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png" />
                  </a>
                </div>
              </div>
              <div class="feed-icon-rignt">
                <div class="icon-bookmark">
                  <a href="#">
                    {' '}
                    <img
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- 피드 댓글 --> */}
            <div class="feed-repl-wrap">
              <div class="feed-like-text-wrap">
                <button>
                  좋아요 <span>60</span>개
                </button>
              </div>
              <div class="feed-repls">
                <span>
                  <a href="#" class="user-id">
                    kitaegram
                  </a>
                  in 몽골
                  <span>...</span>
                  <button class="all-repl">더보기</button>
                </span>
                <span class="mention">
                  <a href="#">댓글 5개 모두보기</a>
                </span>

                {/* <!-- 댓글시작 --> */}
                <span class="others-repl">
                  <a href="#" class="user-id">
                    USER_ID
                  </a>
                  <a
                    href="#
            "
                    class="mention"
                  >
                    @user.id
                  </a>
                  댓글이다.
                  <button type="button" class="repl-hover-three-dot hidden">
                    <img
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                      alt=""
                    />
                  </button>
                  <button type="button" class="heart-btn">
                    <img
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                      alt=""
                    />
                  </button>
                </span>
                {/* <!-- 추가댓글  --> */}
                <span class="others-repl">
                  <a href="#" class="user-id">
                    USER_ID
                  </a>
                  <a
                    href="#
          "
                    class="mention"
                  >
                    @user.id
                  </a>
                  댓글이다.
                  <button type="button" class="repl-hover-three-dot hidden">
                    <img
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                      alt=""
                    ></img>
                  </button>
                  <button type="button" class="heart-btn">
                    <img
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                      alt=""
                    />
                  </button>
                </span>
                {/* <!-- 추가댓글 끝 --> */}
              </div>
              <span class="feed-time">2시간 전</span>
            </div>
            {/* <!-- 댓글쓰기 --> */}
            <div class="send-repl-wrap">
              <div class="form-div">
                <div class="input-wrap">
                  <input
                    class="repl-input"
                    type="text"
                    placeholder="댓글 달기..."
                  />
                </div>
                <div class="submit-wrap">
                  <button class="repl-btn opacity-0-5" type="button">
                    게시
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div class="main-right">
          <div class="my-profile-wrap">
            <div class="my-pic-wrap">
              <img src="images/miniprofile.jpeg" alt="" />
            </div>
            <div class="my-pic-text">
              <div>kitaegram</div>
            </div>
          </div>
          <div class="side-box">
            <div class="side-title">
              <div>스토리</div>
              <div>모두 보기</div>
            </div>
            <div class="side-list-wrap">
              <div class="side-list">
                <ul>
                  <li>
                    <a href="#">
                      <div class="user-profile-wrap">
                        <div class="user-pic-wrap">
                          <img src="images/miniprofile.jpeg" alt="" />
                        </div>
                        <div class="user-profile-text">
                          <div>kitaegram</div>
                          <div>4시간 전</div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="side-box">
            <div class="side-title">
              <div>회원님을 위한 추천</div>
              <div>모두 보기</div>
            </div>
            <div class="side-list-wrap">
              <div class="side-list">
                <ul>
                  <li>
                    <a href="#">
                      <div class="user-profile-wrap">
                        <div class="user-pic-wrap">
                          <img src="images/ger.jpeg" alt="" />
                        </div>
                        <div class="user-profile-text">
                          <div>random_id</div>
                          <div>instagram 신규 가입</div>
                        </div>
                        <form action="">
                          <div class="follow-btn">
                            <button type="submit">팔로우</button>
                          </div>
                        </form>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="side-foot">
            <nav>
              <ul>
                <li>
                  <a href="#">Instagram 정보</a>
                </li>
                <li>
                  <a href="#">도움말</a>
                </li>
                <li>
                  <a href="#">홍보 센터</a>
                </li>
                <li>
                  <a href="#">API</a>
                </li>
                <li>
                  <a href="#">채용 정보</a>
                </li>
                <li>
                  <a href="#">개인정보처리방침</a>
                </li>
                <li>
                  <a href="#">약관</a>
                </li>
                <li>
                  <a href="#">디렉터리</a>
                </li>
                <li>
                  <a href="#">프로필</a>
                </li>
                <li>
                  <a href="#">해시태그</a>
                </li>
                <li>
                  <a href="#">언어</a>
                </li>
              </ul>
            </nav>
            <span>© 2023 INSTAGRAM</span>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
