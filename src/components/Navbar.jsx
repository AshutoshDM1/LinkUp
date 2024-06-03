import { useNavigate } from "react-router-dom";
import "./styles/navbar.css";
import logo from '../assets/chat_ app_ logo.png' 

export default function NavBar() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="navbar">
      <div className="navbar_main">
        <div id="logo">
          <h1>LinkUp</h1>
          <img src={logo}/>
        </div>
        <div id="nav_links">
          <a href="https://github.com/AshutoshDM1/LinkUp" target="_blank" rel="noopener noreferrer">
            <h2 className="github">GitHub</h2>
          </a>
          <h2 className="about" onClick={() => handleNavigate('/')}>Home</h2>
          <h2 className="about" onClick={() => handleNavigate('/about')}>About</h2>
          <h2 className="sign_in" onClick={() => handleNavigate('/signUp')}>SignUp</h2>
          <h2 className="login" onClick={() => handleNavigate('/login')}>Login</h2>
        </div>
      </div>
    </div>
  );
}
