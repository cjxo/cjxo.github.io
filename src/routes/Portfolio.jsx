import styles from "../styles/layout.module.css";
import Intro from "../components/portfolio/Intro";
import Projects from "../components/portfolio/Projects";
import Technologies from "../components/portfolio/Technologies";
import AboutMe from "../components/portfolio/AboutMe";
import ContactMe from "../components/portfolio/ContactMe";

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <Intro />
      <Projects />
      <Technologies />
      <AboutMe />
      <ContactMe />
    </section>
  );
};

export default Portfolio;
