import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import css from "../components/styles/chat.module.css";
import { useRecoilState } from "recoil";

const Chat = () => {
  return (
    <>
      <NavBar />
      <div className={css.main}>
        <h1 className={css.title}>Chat</h1>
      </div>
      <Footer />
    </>
  );
};

export default Chat;
