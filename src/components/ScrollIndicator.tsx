import React from "react";

const ScrollIndicator: React.FC = () => {
  return (
    <div className="absolute right-15 bottom-12 z-50 flex flex-col items-center gap-3">
      <h4 className="uppercase text-[40px] leading-[102.5%] font-bebas text-custom-pink">
        scroll
      </h4>
      <img src="assets/img/icons/scroll.svg" alt="scroll" />
    </div>
  );
};

export default ScrollIndicator;
