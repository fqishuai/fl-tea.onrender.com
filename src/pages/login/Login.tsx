import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return <div className="login-wrapper">
    <h2>登录页</h2>
    <div onClick={() => navigate('/home')}>跳到首页</div>
  </div>
}