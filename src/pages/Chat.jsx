import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import css from "../components/styles/chat.module.css";
import Smallchat from "../components/smallchat";
import { Button, TextField } from "@mui/material";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { chatAtom } from "../state/atoms/atoms";
import { postChatPosts } from "../services/api";

const Chat = () => {
  const [chatState, setChatState] = useRecoilState(chatAtom);

  const chatEndRef = useRef(null);
  const chatSectionRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatState]);

  const [input, setInput] = useState("");

  const inputHandle = (event) => {
    setInput(event.target.value);
  };

  const chatHandle = async () => {
    const newMessageKey = `chat${Object.keys(chatState).length + 1}`;
    const newMessage = {
      [newMessageKey]: {
        username: "Ashutosh",
        _id: newMessageKey,
        message: input,
      },
    };
    console.log(newMessage)
    setChatState((prevChatState) => ({
      ...prevChatState,
      ...newMessage,
      
    }));
    let {username , message } = newMessage[newMessageKey] ;
    const userData = {
      username : username,
      message : message
    }
    console.log(userData)
    try {
      const response = await postChatPosts(userData);
      console.log(response)
    } catch (error) {
      alert(error)
    }
    setInput("");
  };

  return (
    <>
      <NavBar />
      <div className={css.main}>
        <div className={css.container}>
          <div className={css.nav}>
            <div className={css.title}>LinkUp-Chat</div>
          </div>
          <div ref={chatSectionRef} className={css.chatSection}>
            {Object.keys(chatState).map((chat) => {
              const id = chatState[chat]._id;
              return (
                <Smallchat key={id} id={id} message={chatState[chat].message} />
              );
            })}
            <div ref={chatEndRef}></div>
          </div>
          <div className={css.inputBox}>
            <div className={css.inputTitle}>
              <TextField
                value={input}
                onChange={inputHandle}
                style={{
                  backgroundColor: "#fff",
                  width: "94%",
                }}
                id="outlined-basic"
                label="Enter your message here..."
                variant="standard"
              />
            </div>
            <Button onClick={chatHandle} variant="contained" size="large">
              Send
            </Button>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Chat;
