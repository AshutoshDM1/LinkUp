import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import css from "../components/styles/chat.module.css";
import Smallchat from "../components/smallchat";
import { Button, TextField, CircularProgress } from "@mui/material";
import { RecoilRoot, useRecoilState, useRecoilStateLoadable, useRecoilValue } from "recoil";
import { chatAtom } from "../state/atoms/atoms";
import { postChatPosts } from "../services/api";

const Chat = () => {
  const [chatState, setChatState] = useRecoilStateLoadable(chatAtom);
  const [isPosting, setIsPosting] = useState(false);

  const chatEndRef = useRef(null);
  const chatSectionRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (chatState.state === "hasValue") {
      scrollToBottom();
    }
  }, [chatState]);

  const [input, setInput] = useState("");

  const inputHandle = (event) => {
    setInput(event.target.value);
  };

  const chatHandle = async () => {
    const newMessageKey = `chat${Object.keys(chatState.contents).length + 1}`;
    const newMessage = {
      [newMessageKey]: {
        username: "Ashutosh",
        _id: newMessageKey,
        message: input,
      },
    };
    console.log(newMessage);

    setChatState((prevChatState) => ({
      ...prevChatState,
      ...newMessage,
    }));

    let { username, message } = newMessage[newMessageKey];
    const userData = {
      username: username,
      message: message,
    };
    console.log(userData);

    setIsPosting(true);
    try {
      const response = await postChatPosts(userData);
      console.log(response);
    } catch (error) {
      alert(error);
    } finally {
      setIsPosting(false);
    }
    setInput("");
  };

  if (chatState.state === "loading") {
    return (
      <>
        <div className={css.loaderMain}  >
          <img src="/loading_2.svg" />
        </div>
      </>
    );
  }

  if (chatState.state === "hasError") {
    return (
      <>
        <h1>Error loading chat</h1>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div className={css.main}>
        <div className={css.container}>
          <div className={css.nav}>
            <div className={css.title}>LinkUp-Chat</div>
          </div>
          <div ref={chatSectionRef} className={css.chatSection}>
            {Object.keys(chatState.contents).map((chat) => {
              const id = chatState.contents[chat]._id;
              return (
                <Smallchat key={id} id={id} message={chatState.contents[chat].message} />
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
                disabled={isPosting}
              />
            </div>
            <Button onClick={chatHandle} variant="contained" size="large" disabled={isPosting}>
              {isPosting ? <CircularProgress size={24} /> : "Send"}
            </Button>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Chat;
