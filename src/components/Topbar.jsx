import { Link } from "react-router-dom";
import compStyles from "../styles/components.module.css";

const Topbar = () => {
  return (
    <header className={compStyles.topBar}>
      <Link
        className={compStyles.title}
        to="/"
      >
        My Website
      </Link>
      
      <ul className={compStyles.links}>
        <li>
          <Link to="/">
            Portfolio
          </Link>
        </li>
        
        <li>
          <Link to="blog">
            Blog
          </Link>
        </li>

        <li>
          <Link to="resume">
            Resume
          </Link>
        </li>

        <li>
          <a href="#contact-me">
            Contact Me
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Topbar;
