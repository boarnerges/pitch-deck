import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#333333] py-4 ">
      <div className="flex text-white text-sm font-thin text-base justify-center gap-2 align-center">
        <p className="">Slide 1</p>
        <p>Slide 2</p>
        <p>Slide 3</p>
      </div>
      <div className="py-4 flex justify-center">
        <p className="flex text-sm py-2 px-4 bg-[#0E93E8] w-fit rounded-xl font-thin text-center text-white justify-center items-center">
          Next Slide
        </p>
      </div>
      <div></div>
      <p className="text-white font-thin text-xs text-center">
        2025 Frontlett Virtualizing. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
