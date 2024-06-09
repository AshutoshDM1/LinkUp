import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import css from "../components/styles/login.module.css";
import girlPic from "../assets/3d_man_2.png";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { login, getToken } from "../services/api.js";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  useEffect(() => {
    const token = getToken();
    if (token === null) {
      console.log("it null");
    } else {
      alert("Your have been Logined")
      navigate("/chat")
    }
  }, []);

  const [input, setinput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setinput({ ...input, [event.target.name]: event.target.value });
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const { username, password, confirmPassword } = input;
    const userData = { username, password };
    if (password !== confirmPassword) {
      return alert("The Password Missmatch Enter again");
    }
    try {
      const response = await login(userData);
      alert("Successfully signed up!");
      navigate("/chat")
    } catch (error) {
      console.error(error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <>
      <NavBar />
      <div className={css.main}>
        <div className={css.container}>
          <img src={girlPic} alt="picture" />
        </div>
        <div className={css.container}>
          <h1>Login</h1>
          <form className={css.form}>
            <TextField
              className="input_box"
              name="username"
              style={{ width: "90%", height: "auto" }}
              id="outlined-basic"
              label="Enter Your Name"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              className="input_box"
              name="password"
              style={{ width: "90%", height: "auto" }}
              id="outlined-basic"
              label="Enter Your Password"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              className="input_box"
              name="confirmPassword"
              style={{ width: "90%", height: "auto" }}
              id="outlined-basic"
              label="Confirm Your Password"
              variant="outlined"
              onChange={handleChange}
            />
            <Button variant="contained" onClick={handleClick}>
              Login
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
