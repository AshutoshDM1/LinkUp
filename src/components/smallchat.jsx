import css from "./styles/chat.module.css"

const Smallchat = ({title,message}) => {
  return (
    <>
    <div className={css.chatbody} >
      {message}
    </div>
    </>
  )
}

export default Smallchat