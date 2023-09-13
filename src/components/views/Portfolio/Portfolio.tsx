import Link from "next/link";
import React from "react";
import { portfoliodata } from "./portfoliodata";

const Portfolio = () => {
  return (
    <div className="my-28">
      <div className="flex btn-shadow items-center gap-3 border border-darkGray text-[#7F8493] w-max px-6 py-2 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.83333 2.74998C1.83333 2.24372 2.24373 1.83331 2.74999 1.83331H9.16666C9.67292 1.83331 10.0833 2.24372 10.0833 2.74998V9.16665C10.0833 9.67291 9.67292 10.0833 9.16666 10.0833H2.74999C2.24373 10.0833 1.83333 9.67291 1.83333 9.16665V2.74998ZM3.66666 3.66665V8.24998H8.25V3.66665H3.66666Z"
            fill="#7F8493"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.9167 2.74998C11.9167 2.24372 12.3271 1.83331 12.8333 1.83331H19.25C19.7563 1.83331 20.1667 2.24372 20.1667 2.74998V9.16665C20.1667 9.67291 19.7563 10.0833 19.25 10.0833H12.8333C12.3271 10.0833 11.9167 9.67291 11.9167 9.16665V2.74998ZM13.75 3.66665V8.24998H18.3333V3.66665H13.75Z"
            fill="#7F8493"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.9167 12.8334C11.9167 12.3271 12.3271 11.9167 12.8333 11.9167H19.25C19.7563 11.9167 20.1667 12.3271 20.1667 12.8334V19.25C20.1667 19.7563 19.7563 20.1667 19.25 20.1667H12.8333C12.3271 20.1667 11.9167 19.7563 11.9167 19.25V12.8334ZM13.75 13.75V18.3334H18.3333V13.75H13.75Z"
            fill="#7F8493"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.83333 12.8334C1.83333 12.3271 2.24373 11.9167 2.74999 11.9167H9.16666C9.67292 11.9167 10.0833 12.3271 10.0833 12.8334V19.25C10.0833 19.7563 9.67292 20.1667 9.16666 20.1667H2.74999C2.24373 20.1667 1.83333 19.7563 1.83333 19.25V12.8334ZM3.66666 13.75V18.3334H8.25V13.75H3.66666Z"
            fill="#7F8493"
          />
        </svg>
        <p className="uppercase text-sm font-semibold">portfolio</p>
      </div>

      <div className="py-12 ">
        <h1>
          My Featured <span className="text-secondary">Projects</span>
        </h1>
      </div>

      <div className="text-primary -mt-8">
        <p className="text-xl 2xl:text-2xl font-normal">
          Everybody wants to create something different and amazing, I wants
          that as well. But it does not matter what i want,all that matters
          whether you are happy with my work or not.
        </p>
        <div className="mt-8 grid lg:grid-cols-1 xl:grid-cols-2 gap-6">
          {portfoliodata.map((item, index) => {
            return (
              <div
                key={index}
                className="w-max lg:p-2.5 2xl:p-4 bg-shadow  relative group"
              >
                <Link href={item.href}>
                  <img src={item.pic} alt="" />
                  <div className="port-hover">
                    <h3 className="mt-32 text-center text-white">Click Here</h3>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
