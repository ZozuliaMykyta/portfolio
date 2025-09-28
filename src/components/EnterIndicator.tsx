import React from "react";

const EnterIndicator: React.FC = () => {
  return (
    <div className="absolute left-11 bottom-12 z-50 flex flex-col items-center gap-3">
      <h4 className="uppercase text-[40px] leading-[102.5%] font-bebas text-custom-pink">
        press
      </h4>
      <img src="assets/img/icons/enter.svg" alt="enter" />
    </div>
  );
};

export default EnterIndicator;
