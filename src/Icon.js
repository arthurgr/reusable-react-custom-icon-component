import React from "react";
import PropTypes from "prop-types";

const icons = {
  GOOGLE_DRIVE: "M227.78,0C171.27,0,125.55,46.23,125.55,102.74L125,924.65c0,56.5,45.72,102.74,102.22,102.74h617c56.5,0,102.74-46.24,102.74-102.74V308.22L638.73,0ZM587.36,359.59V77.05L869.89,359.59Z"
};

const Icon = ({ width, height, icon, fill }) => {
  return (
      <svg
          width={width}
          height={height}
          viewBox="0 0 1024 1024"
          aria-labelledby={icon}
      >
          <title id={icon}>{icon}</title>
          <path fill={fill} d={icons[icon]} />
      </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string
};

Icon.defaultProps = {
  width: null,
  height: null,
  fill: null
};

export default Icon;
