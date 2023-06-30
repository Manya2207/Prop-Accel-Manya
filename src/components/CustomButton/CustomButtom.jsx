import React from "react";
import "./styles.css";

const CustomButtom = ({ buttonName = "button" }) => {
  return <button className="custom-button">{buttonName}</button>;
};

export default CustomButtom;
