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

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
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

      <section className={styles.category} id="contact-me">
        <h2 className={styles.title}>Contact Me</h2>
        <form className={styles.contactMeForm}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
          <button className={styles.buttonLike}>Submit Message</button>
        </form>
      </section>
    </section>
  );
};

export default Portfolio;
