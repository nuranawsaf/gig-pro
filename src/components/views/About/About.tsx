import React from "react";
import { AiOutlineUser } from "react-icons/ai";

const About = () => {
  return (
    <div id="about" className="mt-28">
      <div className="flex btn-shadow items-center gap-3 border border-darkGray text-[#7F8493] w-max px-6 py-2 rounded-full">
        <AiOutlineUser />
        <p className="uppercase text-sm font-semibold">About</p>
      </div>

      <div className="py-12 ">
        <h1>
          I love <span className="text-secondary">Experimenting</span> with new
        </h1>
        <h1 className="">Methods and Solutions</h1>
      </div>

      <div className="text-primary -mt-8">
        <p className="text-xl 2xl:text-2xl font-normal">
          `Since beginning my journey as a freelance designer nearly 10 years
          ago, I have done remote work for agencies, consulted for startups, and
          collaborated with talented people to create digital products for both
          business and consumer use. I have designed a wide range of Apps and
          Websites following latest Design trends and tools. I love
          experimenting with new methods and solutions. Everybody wants to
          create something different and amazing, I wants that as well. But it
          does not matter what i want,all that matters whether you are happy
          with my work or not.`
        </p>
      </div>
    </div>
  );
};

export default About;
