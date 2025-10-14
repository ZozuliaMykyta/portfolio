import React from "react";
import Hero from "../Hero";
import Social from "../social/Social";
import Info from "../info/Info";

const MainSlide: React.FC = () => {
  return (
    <div>
      <Hero />
      <Social />
      <Info />
    </div>
  );
};

export default MainSlide;
