import { useState } from "react";
import PropTypes from "prop-types";
import styles from "../../styles/components.module.css";
import { MyLink } from "../Common";

const ProjectLink = ({ href, name }) => {
  const [hover, setHover] = useState(false);
  return (
    <MyLink
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={styles.buttonLike}
    >
      <p>{name}</p>
      <img
        src={hover ? "./icons/github/github-mark-white.svg" : "./icons/github/github-mark.svg" }
        alt="github icon"
      />
    </MyLink>
  );
};

const Projects = () => {
  return (
    <section className={`${styles.category}`}>
      <h3 className={styles.title}>Projects</h3>
      
      <ul className={styles.projectGrid}>
        <li>
          <h4>Social App</h4>
          
          <p>An instagram clone made with React for the frontend and Express for the backend</p>
          
          <div className={styles.links}>
            <ProjectLink href="https://github.com/cjxo/social-app-client" name="Client Code"/>
            <ProjectLink href="https://github.com/cjxo/social-app-server" name="API Code"/>
          </div>
        </li>
        
        <li>
          <h4>Social App</h4>
          
          <p>An instagram clone made with React for the frontend and Express for the backend</p>
          
          <div className={styles.links}>
            <ProjectLink href="https://github.com/cjxo/social-app-client" name="Client Code"/>
            <ProjectLink href="https://github.com/cjxo/social-app-server" name="API Code"/>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
export { ProjectLink };

ProjectLink.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};