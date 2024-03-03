import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src="assets/skills/react.png"
              width={70}
              height={70}
              alt="React"
            />
            <div className={styles.aboutItemText}>
              <h3>Experience of ReactJS</h3>
              <p>
                I have experience developing Using ReactJS And Redux Toolkit
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/servericon.png")} alt="Cursor icon" />
          <div className={styles.aboutItemText}>
            <h3>Stadying Backend </h3>
            <p>
              I'm a Stadying NodeJS , Express and  mongoDB 
            </p>
          </div>
        </li>
        </ul>
      </div>
    </section>
  );
};
