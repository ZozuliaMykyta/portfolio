import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

const Social: React.FC = () => {
  const socialLinks = [
    {
      Icon: FaGithub,
      href: "https://github.com/ZozuliaMykyta",
      label: "GitHub",
    },
    { Icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { Icon: FaInstagram, href: "#", label: "Instagram" },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-7 absolute top-[50%] left-15 -translate-y-1/2 z-50">
      {socialLinks.map(({ Icon, href, label }) => (
        <a key={label} href={href} target="_blank" aria-label={label}>
          <Icon className="text-4xl text-custom-pink cursor-pointer hover:text-opacity-80 transition-all duration-300" />
        </a>
      ))}
    </div>
  );
};

export default Social;
