import React from "react";

const SkillsHero: React.FC = () => {
  return (
    <div className="container flex flex-col items-center justify-center !mt-[150px]">
      <div className="bar mb-[-10px]"></div>
      <h4 className="text-[58px] uppercase font-death-star pink-stroke text-transparent purple-shadow text-center">
        my skills
      </h4>
      <div className="bar"></div>
    </div>
  );
};

export default SkillsHero;
