import React from "react";
import { servicedata } from "./servicedata";

const Service = () => {
  return (
    <div id="service" className="my-28">
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
            d="M1.83333 12.8334C1.83333 12.3271 2.24373 11.9167 2.74999 11.9167H9.16666C9.67292 11.9167 10.0833 12.3271 10.0833 12.8334V19.25C10.0833 19.7563 9.67292 20.1667 9.16666 20.1667H2.74999C2.24373 20.1667 1.83333 19.7563 1.83333 19.25V12.8334ZM3.66666 13.75V18.3334H8.25V13.75H3.66666Z"
            fill="#7F8493"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.83333 2.74998C1.83333 2.24372 2.24373 1.83331 2.74999 1.83331H9.16666C9.67292 1.83331 10.0833 2.24372 10.0833 2.74998V9.16665C10.0833 9.67291 9.67292 10.0833 9.16666 10.0833H2.74999C2.24373 10.0833 1.83333 9.67291 1.83333 9.16665V2.74998ZM3.66666 3.66665V8.24998H8.25V3.66665H3.66666Z"
            fill="#7F8493"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.9167 3.66667C11.9167 3.16041 12.3271 2.75 12.8333 2.75H19.25C19.7563 2.75 20.1667 3.16041 20.1667 3.66667C20.1667 4.17293 19.7563 4.58333 19.25 4.58333H12.8333C12.3271 4.58333 11.9167 4.17293 11.9167 3.66667Z"
            fill="#7F8493"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.9167 8.24998C11.9167 7.74372 12.3271 7.33331 12.8333 7.33331H19.25C19.7563 7.33331 20.1667 7.74372 20.1667 8.24998C20.1667 8.75624 19.7563 9.16665 19.25 9.16665H12.8333C12.3271 9.16665 11.9167 8.75624 11.9167 8.24998Z"
            fill="#7F8493"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.9167 13.75C11.9167 13.2437 12.3271 12.8333 12.8333 12.8333H19.25C19.7563 12.8333 20.1667 13.2437 20.1667 13.75C20.1667 14.2562 19.7563 14.6666 19.25 14.6666H12.8333C12.3271 14.6666 11.9167 14.2562 11.9167 13.75Z"
            fill="#7F8493"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.9167 18.3334C11.9167 17.8271 12.3271 17.4167 12.8333 17.4167H19.25C19.7563 17.4167 20.1667 17.8271 20.1667 18.3334C20.1667 18.8396 19.7563 19.25 19.25 19.25H12.8333C12.3271 19.25 11.9167 18.8396 11.9167 18.3334Z"
            fill="#7F8493"
          />
        </svg>
        <p className="uppercase text-sm font-semibold">services</p>
      </div>

      <div className="py-12 ">
        <h1>
          My <span className="text-secondary">Specializations</span>
        </h1>
      </div>

      <div className="grid lg:grid-cols-1 xl:grid-cols-2 ">
        {servicedata.map((item, index) => {
          return (
            <div
              key={index}
              className="box-shadow w-max lg:py-6 2xl:py-8 px-8 2xl:px-14 mb-7 "
            >
              <img className="mb-6" src={item.icon} alt="" />
              <h3 className="mb-4">{item.title}</h3>
              <p className="text-lg text-primary w-[20rem]">{item.des}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
