import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import css from "../components/styles/signUp.module.css";
import girlPic from "../assets/3d_dog_girl.png";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import {showUser , signUpUser , } from '../services/api.js'

const SignUp = () => {


  const [input, setInput] = useState({
    username : "",
    email: "",
    password: "",
    gender: "",
  });

  const handleName = (e) => {
    setInput({ ...input, username: e.target.value });
  };
  const handleEmail = (e) => {
    setInput({ ...input, email: e.target.value });
  };
  const handlePassword = (e) => {
    setInput({ ...input, password: e.target.value });
  };
  const handleConfirmPass = (e) => {
    setInput({ ...input, gender: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUpUser(input);
  };

  return (
    <>
      <NavBar />
      <div className={css.main}>
        <div className={css.container}>
          <img src={girlPic} alt="picture" />
        </div>
        <div className={css.container}>
          <h1>SignUp Now..</h1>
          <form className={css.form}>
            <TextField
              className="input_box"
              onChange={handleName}
              style={{ width: "90%", height: "auto" }}
              id="outlined-basic"
              label="Enter Your Name"
              variant="outlined"
              value={input.name}
            />
            <TextField
              className="input_box"
              onChange={handleEmail}
              style={{ width: "90%", height: "auto" }}
              id="outlined-basic"
              label="Enter Your Email"
              variant="outlined"
              value={input.email}
            />
            <TextField
              className="input_box"
              onChange={handlePassword}
              style={{ width: "90%", height: "auto" }}
              id="outlined-basic"
              label="Create Your Password"
              variant="outlined"
              value={input.password}
            />
            <TextField
              className="input_box"
              onChange={handleConfirmPass}
              style={{ width: "90%", height: "auto" }}
              id="outlined-basic"
              label="Gender"
              variant="outlined"
              value={input.gender}
            />
            <Button onClick={handleSubmit} variant="contained">
              SignUp
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;