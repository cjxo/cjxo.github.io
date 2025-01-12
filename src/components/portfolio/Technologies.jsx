import PropTypes from "prop-types";
import styles from "../../styles/components.module.css";

const TechnologyList = ({ list }) => {
  return (
    <ul className={styles.technology}>
      {list.map(({ src, name }) => (
        <li key={name}>
          <img
            src={src}
            alt={name + " logo"}
          />
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
};

const Technologies = () => {
  const frontEnd = [
    { src: "./icons/html-5-logo-svgrepo-com.svg", name: "HTML" },
    { src: "./icons/css-3-svgrepo-com.svg", name: "CSS" },
    { src: "./icons/javascript-logo-svgrepo-com.svg", name: "Javascript" },
    { src: "./icons/react-svgrepo-com.svg", name: "React" },
  ];
  
  const backEnd = [
    { src: "./icons/icons8-express-js.svg", name: "Express" },
    { src: "./icons/nodejs-1-logo-svgrepo-com.svg", name: "Node" },
    { src: "./icons/Postgresql_elephant.svg.png", name: "PostgreSQL" },
  ];
  
  const mapToLi = (name, list) => {
    return (
      <li key={name}>
        <h4>{name}</h4>
        <TechnologyList list={list} />
      </li>
    );
  };
  
  return (
    <section className={styles.category}>
      <h2 className={styles.title}>Technology</h2>
      <ul className={styles.technologies}>
        {mapToLi("Front End", frontEnd)}
        {mapToLi("Back End", backEnd)}
      </ul>
    </section>
  );
};

export default Technologies;

TechnologyList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape(
      { 
        src: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }
    ).isRequired
  ).isRequired,
};