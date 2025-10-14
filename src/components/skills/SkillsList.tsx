import React from "react";

const SkillsList: React.FC = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "HTML",
    "CSS",
    "Git",
    "Docker",
    "Tailwind",
    "Next.js",
  ];
  return (
    <div>
      <h3>Here is a list of some of my skills</h3>
      <div>
        {skills.map((skill) => (
          <div key={skill}>{skill}</div>
        ))}
      </div>
    </div>
  );
};

export default SkillsList;
