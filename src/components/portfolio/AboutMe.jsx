import styles from "../../styles/components.module.css";
import { MyLink } from "../Common";

const AboutMe = () => {
  return (
    <section className={`${styles.category} ${styles.aboutMe}`}>
      <h2 className={styles.title}>About Me</h2>
      <p>
        My interest in computer programming began when I was around 18 (or 19) years old.
        The first language I learned was C++, guided by the resources on <MyLink href="https://www.learncpp.com/">LearnCPP</MyLink>.
        Over time, I transitioned to C, attracted to its simplicity.
      </p>

      <br />

      <p>
        I learned web development through <MyLink href="https://www.theodinproject.com/">The Odin Project</MyLink>. I have read its entire curriculum, getting my feet
        wet in full stack development; it took me around a year to finish, gaining experience in full-stack development,
        exploring both front-end and back-end technologies.
      </p>
      
      <br />

      <p>
        Currently, I'm looking for opportunities to grow as a developer and contribute to projects.
      </p>
    </section>
  );
};

export default AboutMe;
