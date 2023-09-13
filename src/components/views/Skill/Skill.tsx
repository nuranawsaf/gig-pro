import React from "react";
import { skilldata } from "./skilldata";

const Skill = () => {
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
          <g clip-path="url(#clip0_37_132)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.7685 10.3518C17.1265 9.99383 17.7069 9.99383 18.0648 10.3518L20.8148 13.1018C21.1728 13.4598 21.1728 14.0402 20.8148 14.3982L14.3982 20.8148C14.0402 21.1728 13.4598 21.1728 13.1018 20.8148L10.3518 18.0648C9.99383 17.7069 9.99383 17.1265 10.3518 16.7685L16.7685 10.3518ZM12.2964 17.4167L13.75 18.8703L18.8703 13.75L17.4167 12.2964L12.2964 17.4167Z"
              fill="#7F8493"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.18515 1.18515C1.41095 0.959341 1.73799 0.867322 2.04841 0.942251L15.3401 4.15058C15.6871 4.23434 15.9539 4.51188 16.0239 4.86189L17.3989 11.7369C17.459 12.0374 17.3649 12.3481 17.1482 12.5648L12.5648 17.1482C12.3481 17.3649 12.0374 17.459 11.7369 17.3989L4.86189 16.0239C4.51188 15.9539 4.23434 15.6871 4.15058 15.3401L0.942251 2.04841C0.867322 1.73799 0.959341 1.41095 1.18515 1.18515ZM3.07636 3.07636L5.79539 14.3409L11.6154 15.5049L15.5049 11.6154L14.3409 5.79539L3.07636 3.07636Z"
              fill="#7F8493"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.18516 1.18516C1.54314 0.827177 2.12354 0.827177 2.48152 1.18516L9.43535 8.13899C9.79333 8.49697 9.79333 9.07737 9.43535 9.43535C9.07737 9.79333 8.49697 9.79333 8.13899 9.43535L1.18516 2.48152C0.827177 2.12354 0.827177 1.54314 1.18516 1.18516Z"
              fill="#7F8493"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.0833 9.16666C9.57707 9.16666 9.16666 9.57707 9.16666 10.0833C9.16666 10.5896 9.57707 11 10.0833 11C10.5896 11 11 10.5896 11 10.0833C11 9.57707 10.5896 9.16666 10.0833 9.16666ZM7.33333 10.0833C7.33333 8.56455 8.56455 7.33333 10.0833 7.33333C11.6021 7.33333 12.8333 8.56455 12.8333 10.0833C12.8333 11.6021 11.6021 12.8333 10.0833 12.8333C8.56455 12.8333 7.33333 11.6021 7.33333 10.0833Z"
              fill="#7F8493"
            />
          </g>
          <defs>
            <clipPath id="clip0_37_132">
              <rect width="22" height="22" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p className="uppercase text-sm font-semibold">my skill</p>
      </div>

      <h1 className="py-12">
        My <span className="text-secondary">Advantages</span>
      </h1>

      <div className="grid lg:grid-cols-3 xl:grid-cols-4  ">
        {skilldata.map((item, index) => {
          return (
            <div key={index} className="w-max ">
              <div className="box-shadow py-6 px-7 lg:mt-6 xl:mt-0">
                <img src={item.icon} alt="" />
              </div>
              <h5 className="mt-7 text-center">{item.name}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
