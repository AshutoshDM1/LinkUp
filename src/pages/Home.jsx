import NavBar from "../components/Navbar";
import "../components/styles/home.css";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="main">
        <div className="container">
          <h1>Home Page</h1>;
        </div>
        <div className="container"></div>
      </div>
    </>
  );
}
