import React from "react";

import Link from "next/link";

import { navLinks } from "../nav-links";
import Image from "next/image";
import { useRouter } from "next/router";

const DesktopNavbar: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="hidden lg:block absolute top-1/2 -translate-y-1/2  right-10  z-50 ">
      <div className="bg-shadow w-max p-[1.1rem] rounded-xl   mb-4 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 34 34"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.83331 8.49992C2.83331 7.71752 3.46758 7.08325 4.24998 7.08325H29.75C30.5324 7.08325 31.1666 7.71752 31.1666 8.49992C31.1666 9.28232 30.5324 9.91659 29.75 9.91659H4.24998C3.46758 9.91659 2.83331 9.28232 2.83331 8.49992Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.83331 16.9999C2.83331 16.2175 3.46758 15.5833 4.24998 15.5833H29.75C30.5324 15.5833 31.1666 16.2175 31.1666 16.9999C31.1666 17.7823 30.5324 18.4166 29.75 18.4166H4.24998C3.46758 18.4166 2.83331 17.7823 2.83331 16.9999Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.83331 25.4999C2.83331 24.7175 3.46758 24.0833 4.24998 24.0833H29.75C30.5324 24.0833 31.1666 24.7175 31.1666 25.4999C31.1666 26.2823 30.5324 26.9166 29.75 26.9166H4.24998C3.46758 26.9166 2.83331 26.2823 2.83331 25.4999Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="">
        <div className="flex items-center justify-between  gap-40 ">
          <ul className="list-none  space-y-12  bg-shadow rounded-xl px-4 py-6">
            {navLinks.map((item) => (
              <li className="list-none" key={item.id}>
                <Link href={item.href}>
                  <span className="cursor-pointer lg:text-lg xl:text-[22px] text-white font-regular ">
                    <img className="text-lightGray" src={item.title} alt="" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
