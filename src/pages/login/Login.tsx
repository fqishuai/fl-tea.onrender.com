import { useSearchParams } from "react-router-dom";
import './login.scss';
import { useState } from "react";
import { axiosInstance } from 'src/api';
import loginBg from 'src/assets/login_bg@2x.png';

export default function Login() {
  const [userName, setUserName] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [searchParams] = useSearchParams();

  const redirectUrlValue = searchParams.get('redirectUrl');

  async function handleLogin() {
    try {
      const loginResult = await axiosInstance.post('login', {
        userName,
        password,
      });
      localStorage.setItem('token', loginResult.data.token)
      if (redirectUrlValue) window.location.assign(redirectUrlValue);
    } catch (error: any) {
      if (error && error.response) console.error(error.response.data);
    }
  }

  return <div className="login-wrapper">
    <div className="logo">
      <img src={`${process.env.PUBLIC_URL}/logo512.png`} alt='logo' />
      <div>F&L tea<span className="dot"></span>个人品牌<span className="dot"></span>个人作品</div>
    </div>
    <div className="main-content">
      <div>
        <input value={userName ?? ''} onChange={(event) => {
          setUserName(event.target.value);
        }} />
      </div>
      <div>
        <input type='password' value={password ?? ''} onChange={(event) => {
          setPassword(event.target.value);
        }} />
      </div>
      <div onClick={handleLogin}>点击登录</div>
    </div>
    <div className="footer">
      <img src={loginBg} alt='bg-img' />
    </div>
  </div>
}