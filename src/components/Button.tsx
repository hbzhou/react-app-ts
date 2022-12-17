import React, { ButtonHTMLAttributes, DetailedHTMLFactory } from "react";

const Button: React.FC<DetailedHTMLFactory<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { children: React.ReactNode }> = ({
  children,
}) => <button>{children}</button>;

export default Button;
