// src/index.js

import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Router from "./Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />); // 초기 설정
// Main 컴포넌트 확인 시에는 root.render(<Main />);
// Login 컴포넌트 확인 시에는 root.render(<Login />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
