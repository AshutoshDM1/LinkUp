import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import css from "../components/styles/signUp.module.css";
import girlPic from "../assets/3d_dog_girl.png";
import { Button, TextField } from "@mui/material";

const Login = () => {
  return (
    <>
      <NavBar />
      <div className={css.main}>
        <div className={css.container}>
          <img src={girlPic} alt="picture" />
        </div>
        <div className={css.container}>
          <form className={css.form}>
          <TextField className="input_box" style={{width: "90%", height: "auto"}} id="outlined-basic" label="Enter Your Name" variant="outlined" />
          <TextField className="input_box" style={{width: "90%", height: "auto"}} id="outlined-basic" label="Enter Your Email" variant="outlined" />
          <TextField className="input_box" style={{width: "90%", height: "auto"}} id="outlined-basic" label="Create Your Password" variant="outlined" />
          <TextField className="input_box" style={{width: "90%", height: "auto"}} id="outlined-basic" label="Confirm Your Password" variant="outlined" />
          <Button variant="contained">SignUp</Button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
