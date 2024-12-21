import React from "react";

function Form() {
  return (
    <form className="" action="#">
      <div className=" flex flex-col my-4">
        <label
          className=" text-[#fff] font-Inconsolata -tracking-wide font-normal text-xl"
          htmlFor="name"
        >
          Full Name
        </label>
        <input
          className=" p-3 rounded-lg bg-[#81797931] border-2 border-[#ffffff6f]"
          type="text"
          name="name"
          id="name"
        />
      </div>

      <div className=" flex flex-col my-4">
        <label
          className=" text-[#fff] font-Inconsolata -tracking-wide font-normal text-xl"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          className=" p-3 rounded-lg bg-[#81797931] border-2 border-[#ffffff6f]"
          type="email"
          name="email"
          id="email"
          placeholder="exampla@gmail.com"
        />
      </div>

      <div className=" flex flex-col my-4">
        <label
          className=" text-[#fff] font-Inconsolata -tracking-wide font-normal text-xl"
          htmlFor="github"
        >
          GitHub Username
        </label>
        <input
          className=" p-3 rounded-lg bg-[#81797931] border-2 border-[#ffffff6f]"
          type="text"
          name="github"
          id="github"
          placeholder="@yourusername"
        />
      </div>

      <div className=" my-4 text-center">
        <button className=" z-10 text-xl font-bold p-3 rounded-lg w-full bg-[#f47260] hover:bg-[#e16150]">
          Generate My Ticket
        </button>
      </div>
    </form>
  );
}

export default Form;
