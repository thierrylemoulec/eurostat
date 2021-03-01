import React from "react";
import PropTypes from "prop-types";

const Country = ({ code, picture }) => {
  return (
    <img
      className="rounded-full h-5 mb-2 object-cover w-5"
      src={picture?.url}
      alt={`country flag : ${code}`}
    />
  );
};

Country.propTypes = {
  code: PropTypes.string.isRequired,
  picture: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

Country.defaultProps = {
  code: "unknown",
  picture: {
    url:
      "data:image/svg+xml,%3Csvg width='80' height='52' viewBox='0 0 80 52' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M45.6 51.5L28.3 40.1 1.7 51.5l15.8-18.4L0 21.7h27.2L45.6 0v21.7h26.2L45.6 32.9v18.6z' fill='%2320194D'/%3E%3Cpath d='M78.3 10.6c1 0 1.7-.7 1.7-1.7V1.7c0-1-.8-1.7-1.7-1.7H50v10.6h28.3zM78.3 51.5c1 0 1.7-.8 1.7-1.7v-7.2c0-1-.8-1.7-1.7-1.7H50v10.6h28.3z' fill='%2320194D'/%3E%3C/svg%3E",
  },
};

export default Country;
