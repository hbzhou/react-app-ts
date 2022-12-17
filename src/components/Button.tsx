import React from "react";

const Button: React.FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> & {
  title?: string;
} = ({ children, title, style, ...rest }) => (
  <button {...rest} style={{ ...style, background: "white", padding: "2px", borderRadius: "10%" }}>
    {title ?? children}
  </button>
);

export default Button;
