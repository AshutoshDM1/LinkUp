import NavBar from "../components/Navbar";
import "../components/styles/home.css";
import manLogo from "../assets/3d_man.png";
import girlLogo from "../assets/3d_Girl.png";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import LocomotiveScroll from 'locomotive-scroll';
export default function Home() {


const locomotiveScroll = new LocomotiveScroll();

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <>
      <NavBar />
      <div className="main">
        <div className="container">
          <div className="heading">
            <h1>Have Your</h1>
            <h1>Best Chat</h1>
          </div>
          <div className="heading_text">
            <p>Fast, Easy and Unlimited team Chat</p>
          </div>
          <div className="btns">
            <h2 className="sign_in" onClick={() => handleNavigate("/signin")}>
              Try for Free
            </h2>
            <h2 className="login" onClick={() => handleNavigate("/about")}>
              About
            </h2>
          </div>
        </div>
        <div className="container">
          <div id="canvas">
            <img src={manLogo} />
            <img src={girlLogo} />
          </div>
        </div>
      </div>
      <  Footer />
    </>
  );
}
