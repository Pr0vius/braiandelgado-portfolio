import React from "react";
import PropTypes from "prop-types";

const HtmlLogo = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 96}
    height={props.height || 96}
    {...props}
  >
    <path
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#e65100",
        fillOpacity: 1,
      }}
      d="M82 10H14l6 68 28 8 28-8Zm0 0"
    />
    <path
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#ff6d00",
        fillOpacity: 1,
      }}
      d="M48 16v63.8l22.398-6.402 5-57.398Zm0 0"
    />
    <path
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#fff",
        fillOpacity: 1,
      }}
      d="M48 50v-8h17.2l-1.4 23L48 70.2v-8.4l8.2-2.8.6-9Zm17.8-16 .598-8H48v8Zm0 0"
    />
    <path
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#eee",
        fillOpacity: 1,
      }}
      d="M48 61.8v8.4L32.2 65l-.802-11h8l.403 5ZM38.2 34H48v-8H29.8l1.4 24H48v-8h-9.2Zm0 0"
    />
  </svg>
);

HtmlLogo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};
export default HtmlLogo;
