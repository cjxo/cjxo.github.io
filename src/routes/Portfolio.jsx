import { useState } from "react";
import styles from "../styles/layout.module.css";
import { MyLink } from "../components/Common";

const ProjectLink = ({ href, name }) => {
  const [hover, setHover] = useState(false);
  return (
    <MyLink
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <p>{name}</p>
      <img
        src={hover ? "./icons/github/github-mark-white.svg" : "./icons/github/github-mark.svg" }
        alt="github icon"
      />
    </MyLink>
  );
};

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <section className={`${styles.category} ${styles.intro}`}>
        <h2 className={styles.title}>My name is Christian.</h2>
        <p>
          I am a fullstack web developer, located in the Philippines, building web apps
          with ReactJS and express. I am currently seeking for job oportunities.
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
      
      <section className={styles.category}>
        <h2 className={styles.title}>Technology</h2>
        <ul className={styles.technologies}>
          <li>
            <h4>Front End</h4>
            <ul className={styles.technology}>
              <li>
                <img
                  src="./icons/html-5-logo-svgrepo-com.svg"
                  alt="HTML logo"
                />
                <p>HTML</p>
              </li>              
              <li>
                <img
                  src="./icons/css-3-svgrepo-com.svg"
                  alt="CSS logo"
                />
                <p>CSS</p>
              </li>              
              <li>
                <img
                  src="./icons/javascript-logo-svgrepo-com.svg"
                  alt="Javascript logo"
                />
                <p>Javascript</p>
              </li>              
              <li>
                <img
                  src="./icons/react-svgrepo-com.svg"
                  alt="React logo"
                />
                <p>React</p>
              </li>
            </ul>
          </li>
          
          <li>
            <h4>Back End</h4>
            <ul className={styles.technology}>
              <li>
                <img
                  src="./icons/icons8-express-js.svg"
                  alt="Express logo"
                />
                <p>Express</p>
              </li>
              
              <li>
                <img
                  src="./icons/nodejs-1-logo-svgrepo-com.svg"
                  alt="NodeJS logo"
                />
                <p>NodeJS</p>
              </li>
              
              <li>
                <img
                  src="./icons/Postgresql_elephant.svg.png"
                  alt="PostgreSQL logo"
                />
                <p>PostgreSQL</p>
              </li>
            </ul>
          </li>
          
        </ul>
      </section>
    </section>
  );
};

export default Portfolio;