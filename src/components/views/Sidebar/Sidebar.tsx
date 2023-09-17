import React from "react";
import { VscMail } from "react-icons/vsc";
import { profileiconsdata } from "./sidebardata";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-full flex items-center justify-end w-full">
      <div className="bg-shadow 2xl:py-6 py-3 2xl:px-5 px-2.5">
        <div className="2xl:py-9 py-5 2xl:px-8 px-4 border border-darkGray rounded-3xl sb  ">
          <div className="lg:h-40 2xl:h-[253px] w-full">
            <img
              className="rounded-3xl 2xl:rounded-[2.5rem] h-full w-full object-cover"
              src="/assets/images/profile.JPEG"
              alt=""
            />
          </div>

          <div className="text-center font-medium lg:mt-3 2xl:mt-8">
            <h4 className="font-medium">Tanjina Nusrat Hemi</h4>
            <h5 className="text-primary">
              UX/UI Designer
              <br />
              Bangladesh, Dhaka
            </h5>
          </div>

          <div className="grid grid-cols-4  gap-y-5 mt-9">
            {profileiconsdata.map((item, index) => {
              return (
                <div
                  key={index}
                  className="icon-shadow  w-max 2xl:p-4 p-3 flex items-center justify-center"
                >
                  <Link href={item.href} target="_blank">
                    <img className="lg:w-5 2xl:w-max" src={item.icon} alt="" />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="lg:mt-6 2xl:mt-12 flex justify-center ">
            <button className="text-center flex justify-center rounded-full items-center uppercase font-medium gap-2 bg-secondary py-2.5 2xl:py-4 w-full text-black">
              <VscMail className="text-lg" />
              Hire Me!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
