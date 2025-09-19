import React from "react";

const MainSlide: React.FC = () => {
  return (
    <div className="container">
      <div className="mb-24 flex flex-col justify-center">
        <div className="flex items-center justify-center gap-4">
          <div className="bar mt-1"></div>
          <h4 className="text-custom-purple text-[22px] font-death-star self-end">
            a message from earth
          </h4>
        </div>
        <h1 className="text-[58px] font-death-star text-with-stroke text-transparent purple-shadow">
          hello fellow galaxy member
        </h1>
        <div className="flex items-center justify-center gap-4">
          <h4 className="text-custom-purple text-[22px] font-death-star">
            a message from earth
          </h4>
          <div className="bar mt-1"></div>
        </div>
      </div>
      <h2 className="text-[58px] font-death-star text-with-stroke text-transparent purple-shadow">
        i am mykyta
      </h2>
    </div>
  );
};

export default MainSlide;
