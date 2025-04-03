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

const LiveLink = ({ href }) => {
  const [hover, setHover] = useState(false);
  return (
    <MyLink
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={styles.buttonLike}
    >
      <p>Live</p>
      <img
        src={hover ? "./icons/redirect-active-svgrepo-com.svg" : "./icons/redirect-svgrepo-com.svg" }
        alt="open live project"
      />
    </MyLink>
  );
};

const ProjectCard = ({ title, description, clientHref, serverHref, liveLinkHref }) => {
  return (
    <li>
      <h4>{title}</h4>
      <p>{description}</p>
      
      <div className={styles.links}>
        <ProjectLink href={clientHref} name="Client" />
        {serverHref && <ProjectLink href={serverHref} name="API" />}
        {liveLinkHref && <LiveLink href={liveLinkHref} />}
      </div>
    </li>
  );
};

const Projects = () => {
  const projects = [
  /*
    {
      id: 1,
      title: "Social App",
      description: "An Instagram clone made with React for the frontend and Express for the backend",
      clientHref: "https://github.com/cjxo/social-app-client",
      serverHref: "https://github.com/cjxo/social-app-server",
    },*/
    {
      id: 1,
      title: "Real Time Chat App",
      description: "A real time chat app that uses React for the frontend and Express and SocketIO for the backend.",
      clientHref: "https://github.com/cjxo/real-time-chat-client",
      serverHref: "https://github.com/cjxo/real-time-chat-server",
      liveLinkHref: "https://real-time-chat-fullstack.onrender.com/sign-in",
    },
    {
      id: 2,
      title: "Inventory App",
      description: "LootBox is an inventory app that uses React for the frontend and Express for the backend.",
      clientHref: "https://github.com/cjxo/inventory-app-client",
      serverHref: "https://github.com/cjxo/inventory-app-server",
      liveLinkHref: "https://inventory-app-fullstack.onrender.com/",
    },
    {
      id: 3,
      title: "Resume Builder Client",
      description: "A simple front-end only resume builder with HTML, CSS, and React.",
      clientHref: "https://github.com/cjxo/resume-builder-client",
      liveLinkHref: "https://resume-builder-client.netlify.app/",
    },
  ];
  return (
    <section className={`${styles.category}`}>
      <h3 className={styles.title}>Projects</h3>
      
      <ul className={styles.projectGrid}>
        {projects.map(({ id, title, description, clientHref, serverHref, liveLinkHref }) => (
          <ProjectCard key={id} title={title} description={description} clientHref={clientHref} serverHref={serverHref} liveLinkHref={liveLinkHref} />
        ))}
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

LiveLink.propTypes = {
  href: PropTypes.string.isRequired,
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  clientHref: PropTypes.string.isRequired,
  serverHref: PropTypes.string,
  liveLinkHref: PropTypes.string,
};
