import React from "react";
import Social from "../social/Social";
import SkillsHero from "../skills/SkillsHero";
import SkillsList from "../skills/SkillsList";

const SkillsSlide: React.FC = () => {
  return (
    <div>
      <Social />
      <SkillsHero />
      <SkillsList />
    </div>
  );
};

export default SkillsSlide;
