import { FaArrowAltCircleUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  const scrollOnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={`${styles["footer"]}`}>
      <div className={`${styles["main-container"]}`}>
        <div>
          <p>Useful Links</p>
          <p>Cooking Basics</p>
          <p>Recipe Inspiration</p>
          <p>Cooking Techniques</p>
          <p>Dietary Needs</p>
          <p></p>
        </div>
        <div>
          <p>Company</p>
          <p>Recipes</p>
          <p>About Us</p>
          <p>IT Consulting</p>
          <p>Contact Us</p>
        </div>
        <div>
          <p>Solution</p>
          <p>Help</p>
          <p>Support</p>
          <p>Clients</p>
          <p>Contacts</p>
        </div>
        <div className={`${styles["getAppdiv"]}`}>
          <p>Get App</p>
          <img src="https://porichiti.vercel.app/img/play-store.png" alt="" />
          <img src="https://porichiti.vercel.app/img/app-store.png" alt="" />
        </div>
      </div>
      <button onClick={scrollOnTop}>
        <FaArrowAltCircleUp />
      </button>
      <p className={`${styles["copyright"]}`}>
        Copyright &copy; Yuvraj Salte 2024 All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
