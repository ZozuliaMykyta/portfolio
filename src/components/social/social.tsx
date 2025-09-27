import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

const social: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <FaGithub />
      <FaLinkedin />
      <FaInstagram />
    </div>
  );
};

export default social;
