import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import css from "../components/styles/about.module.css";
import teamLogo from '../assets/3d_team_chat.png'

export default function About() {
  return (
    <>
      <NavBar />
      <div className={css.main}>
        <div className={css.container}>
          <img src={teamLogo} alt="Team Logo" />
        </div>
        <div className={css.container}>
          <div className={css.aboutContainer}>
            <h1>About LinkUp</h1>
            <p>
              LinkUp is a modern, fast, and easy-to-use team chat app that helps
              you stay connected with your team, no matter where you are.
            </p>
            <h2>What makes LinkUp special?</h2>
            <ul>
              <li>
                Unlimited team chat: Connect with your entire team, create
                groups, and share files without limits.
              </li>
              <li>
                Fast and reliable: Enjoy smooth communication without lag or
                interruptions.
              </li>
              <li>
                Simple and intuitive: Designed to be easy to use for anyone, no
                matter their technical skills.
              </li>
              <li>
                Mobile-friendly: Stay connected on the go with our mobile app.
              </li>
            </ul>
            <h2>Why choose LinkUp?</h2>
            <ul>
              <li>
                Boost team collaboration: Streamline communication, share ideas
                quickly, and work efficiently together.
              </li>
              <li>
                Improve productivity: Stay organized, track conversations, and
                avoid unnecessary emails.
              </li>
              <li>
                Enhance communication: Build stronger relationships and foster a
                positive team dynamic.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
