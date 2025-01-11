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
          <Link>
            Portfolio
          </Link>
        </li>
        
        <li>
          <Link>
            Blog
          </Link>
        </li>

        <li>
          <Link>
            Resume
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Topbar;
