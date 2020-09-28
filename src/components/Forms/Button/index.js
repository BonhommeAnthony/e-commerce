import React from "react";
import "./styles.scss";

const Button = ({ onClick, children, ...otherProps }) => {
  return (
    <button onClick={onClick} className="btn" {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
