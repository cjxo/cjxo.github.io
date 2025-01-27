import { Link } from "react-router-dom";
import { MyLink } from "./Common";
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
          <MyLink href="https://flowcv.com/resume/swmqout1nq">
            Resume
          </MyLink>
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
