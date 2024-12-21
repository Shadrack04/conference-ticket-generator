import React from "react";
import Logo from "./Logo";

function Header() {
  return (
    <div className=" flex items-center flex-col mb-8">
      <Logo />
      <div className="">
        <h1 className=" text-[#fff] font-Inconsolata font-bold text-2xl my-4 tracking-wider text-center">
          Your Journey to Coding Conf 2025 Starts Here!
        </h1>
        <p className=" text-[#ffffff9a] font-Inconsolata text-xl tracking-wider text-center">
          Secure your spot at next year's biggest coding conference.
        </p>
      </div>
    </div>
  );
}

export default Header;
