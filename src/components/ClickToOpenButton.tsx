import React from "react";
import Arrow from "../assets/img/arrow.svg";

const ClickToOpenButton: React.FC = () => {
  return (
    <div className="absolute left-[50%] -translate-x-[50%] bottom-[180px] z-50">
      <div className="relative">
        <img
          src={Arrow}
          alt="Arrow Icon"
          className="absolute top-[-24px] left-[-32px] purple-shadow"
        />
        <h3 className="text-center text-[39px] font-death-star white-stroke purple-shadow text-transparent">
          Click
          <br /> to Open
        </h3>
        <img
          src={Arrow}
          alt="Arrow Icon"
          className="absolute bottom-[-36px] right-[-48px] rotate-180 purple-shadow"
        />
      </div>
    </div>
  );
};

export default ClickToOpenButton;
