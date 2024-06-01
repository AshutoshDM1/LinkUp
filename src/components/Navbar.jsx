import { useNavigate } from "react-router-dom";
import "./styles/navbar.css";

export default function NavBar() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="navbar">
      <div className="navbar_main">
        <h1 id="logo">LinkUp</h1>
        <div id="nav_links">
          <a href="https://github.com/AshutoshDM1/LinkUp" target="_blank" rel="noopener noreferrer">
            <h2 className="github">GitHub</h2>
          </a>
          <h2 className="about" onClick={() => handleNavigate('/about')}>About</h2>
          <h2 className="sign_in" onClick={() => handleNavigate('/sign-in')}>Sign In</h2>
          <h2 className="login" onClick={() => handleNavigate('/login')}>Login</h2>
        </div>
      </div>
    </div>
  );
}
