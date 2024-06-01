import NavBar from "../components/Navbar";
import "../components/styles/home.css";

export default function Home() {
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
          <h2 className="sign_in" onClick={() => handleNavigate("/sign-in")}>
            Sign In
          </h2>
          <h2 className="login" onClick={() => handleNavigate("/login")}>
            Login
          </h2>
          </div>
        </div>
        <div className="container"></div>
      </div>
    </>
  );
}
