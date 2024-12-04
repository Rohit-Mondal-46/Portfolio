import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/logo3.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img style={{ filter: "invert(1)" }} src={getImageUrl("about/front-end-programming.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              I specialize in frontend development, creating responsive and engaging user interfaces 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img style={{ filter: "invert(1)" }} src={getImageUrl("about/backend-coding.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I have expertise in backend development, ensuring robust and scalable server-side functionality
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img style={{ filter: "invert(1)" }} src={getImageUrl("about/ux-design.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
              I excel in UI/UX design, delivering intuitive and user-focused experiences
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
