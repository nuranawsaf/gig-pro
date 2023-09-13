import React from "react";

const CallToActions: React.FC = () => {
  return (
    <section className="bg-[#FAFAFAFA] py-20 lg:py-28">
      <div className="container">
        <div className="w-full lg:w-[826px] mx-auto text-center">
          <h3 className="text-theme-blue-dark leading-[130%]">
            Teal Media works extensively with mission-driven organizations and
            nonprofits that tackle the world&apos;s most pressing challenges.
          </h3>

          <p className="mt-6 text-base w-full lg:w-[682px] mx-auto">
            We are a design agency with a dedicated team of UX research, web
            design & development, brand and content strategy professionals to
            support leading nonprofits that work on issues including, but not
            limited to:
          </p>

          <div className=" hidden  mt-12 p-2 pl-6 bg-white w-max mx-auto md:flex  gap-6 shadow-[0_4px_30px_rgba(0,0,0,.1)]">
            <input
              type="text"
              className="bg-transparent focus:outline-none p-0"
              placeholder="Enter email address"
            />

            <button className="py-4 px-6 bg-primary text-white capitalize">
              Get Started
            </button>
          </div>

          <div className="mt-10 flex md:hidden flex-col gap-4">
            <input
              className="focus:outline-none px-6 py-4"
              type="text"
              placeholder="Enter your Email"
            />
            <button className="bg-primary px-6 py-4 text-white">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActions;
