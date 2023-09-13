import React from "react";
import { herodata } from "./herodata";
import { AiOutlineHome } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="mt-24">
      <div className="flex btn-shadow items-center gap-3 border border-darkGray text-[#7F8493] w-max px-6 py-2 rounded-full">
        <AiOutlineHome />
        <p className="uppercase text-sm font-semibold">introduce</p>
      </div>

      <div className="py-12 ">
        <h6 className="text-base 2xl:text-xl text-primary mb-6 mt-6">
          WELCOME TO MY WORLD
        </h6>
        <h1>
          Hi This is <span className="text-secondary">Hemi</span>
        </h1>
        <h1 className="">Expert UX UI Specialist</h1>
      </div>

      <div className="text-primary -mt-8">
        <p className="text-xl 2xl:text-2xl font-normal">
          I design and code beautifully simple things and i love to play
          <br />
          with white space. Just simple like that!
        </p>
      </div>

      <div className="text-primary w-full flex gap-x-40 mt-16">
        <div className="">
          <h1 className="text-secondary">10+</h1>
          <p className="text-lg">
            YEARS OF
            <br />
            EXPERIENCE
          </p>
        </div>
        <div>
          <h1 className="text-secondary">200+</h1>
          <p className="text-lg">
            PROJECT COMPLETED ON
            <br />
            20+ COUNTRIES
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
