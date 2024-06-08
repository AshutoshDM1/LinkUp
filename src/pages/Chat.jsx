import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import css from "../components/styles/chat.module.css";
import Smallchat from "../components/smallchat";
import { Button, TextField } from "@mui/material";

const Chat = () => {
  const [chatState, setChatState] = useState({
    chat1: {
      username: "Ashutosh",
      id: "1",
      message: "Hello, Welcome to LinkUp-Chat",
    },
    chat2: {
      username: "Aakash",
      id: "2",
      message: "Thanks for having me",
    },
    chat3: {
      username: "John",
      id: "3",
      message: "Hi everyone!",
    },
    chat4: {
      username: "Doe",
      id: "4",
      message: "How do I use this chat?",
    },
    chat5: {
      username: "Jane",
      id: "5",
      message: "This platform is great!",
    },
    chat6: {
      username: "Smith",
      id: "6",
      message: "Catch you all later.",
    },
  });

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

  const chatHandle = () => {
    const newMessageKey = `chat${Object.keys(chatState).length + 1}`;
    const newMessage = {
      [newMessageKey]: {
        username: "Ashutosh",
        id: newMessageKey,
        message: input,
      },
    };
    setChatState((prevChatState) => ({
      ...prevChatState,
      ...newMessage
    }));
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
              const id = chatState[chat].id;
              return (
                <Smallchat
                  key={id}
                  id={id}
                  message={chatState[chat].message}
                />
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
            <Button onClick={chatHandle} variant="contained" size="large">Send</Button>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Chat;
