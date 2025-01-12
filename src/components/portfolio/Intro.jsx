import styles from "../../styles/components.module.css";
import { MyLink } from "../Common";

const Intro = () => {
  return (
    <section className={`${styles.category} ${styles.intro}`}>
      <h2 className={styles.title}>My name is Christian.</h2>
      <p>
        I am a full-stack web developer based in the Philippines.
        I build web apps with React and Express and am actively seeking for job oportunities.
      </p>
      
      <div className={styles.findMe}>
        <MyLink href="https://github.com/cjxo">
          <img
            src="./icons/github/github-mark.svg"
            alt="github icon"
          />
        </MyLink>
        <MyLink
          href="https://www.linkedin.com/in/christian-jao-25b31a296"
        >
          <img
            src="./icons/linkedin/LI-In-Bug.png"
            alt="linkedin icon"
          />
        </MyLink>
      </div>
    </section>
  );
};

export default Intro;