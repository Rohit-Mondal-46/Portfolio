import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <ul className={styles.links}>
        <li className={styles.link}>
          
          <a href="mailto:rohitmondal0046@gmail.com"><img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" /></a>
        </li>
        <li className={styles.link}>
          
          <a href="https://www.linkedin.com/rohit-mondal-rm46/"><img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          /></a>
        </li>
        <li className={styles.link}>
          
          <a href="https://www.github.com/Rohit-Mondal-46"><img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" /></a>
        </li>
      </ul>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      
      <form className={styles.form}>
        <input
          type="email"
          placeholder="Your Email"
          className={styles.input}
        />
        <textarea
          placeholder="Your Query"
          className={styles.textarea}
        ></textarea>
        <button type="submit" className={styles.button}>
          Send
        </button>
      </form>
    </footer>
  );
};
