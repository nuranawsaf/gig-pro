import React from "react";
import { FaTwitter, FaDribbble, FaInstagram, FaGithub } from "react-icons/fa";
import { VscMail } from "react-icons/vsc";
import { profileiconsdata } from "./sidebardata";

const Sidebar = () => {
  return (
    <div className="h-full flex items-center justify-end">
      <div className="bg-shadow py-6 px-5 ">
        <div className="py-9 px-8 border border-darkGray rounded-3xl sb  ">
          <div className=" h-[253px] w-full">
            <img
              className="rounded-[2.5rem] h-full w-full object-cover"
              src="/assets/images/profile.jpg"
              alt=""
            />
          </div>

          <div className="text-center font-medium mt-8">
            <h4 className="font-medium">Tanjina Nusrat Hemi</h4>
            <h5 className="text-primary">
              UX/UI Designer
              <br />
              Bangladesh, Dhaka
            </h5>
          </div>

          <div></div>

          <div className="grid grid-cols-4  gap-y-5 mt-9">
            {profileiconsdata.map((item) => {
              return (
                <div className="icon-shadow  w-max p-4 flex items-center justify-center">
                  <img src={item.icon} alt="" />
                </div>
              );
            })}
          </div>

          <div className="my-8 flex justify-center">
            <button className="text-center flex justify-center rounded-full items-center uppercase font-medium gap-2 bg-secondary py-4 w-full text-black">
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
