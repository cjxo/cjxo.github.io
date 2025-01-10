import PropTypes from "prop-types";
const MyLink = ({ href, children, ...rest }) => {
  return (
    <a
      href={href}
      rel="noreferrer"
      target="_blank"
      {...rest}
    >
      {children}
    </a>
  )
};

export { MyLink };

MyLink.propTypes = {
  href: PropTypes.string,
};