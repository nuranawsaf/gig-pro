import React, { useState } from "react";

import Link from "next/link";

import { AnimatePresence, Variants, motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";

import { navLinks } from "../nav-links";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton/PrimaryButton";

const drawerVariants: Variants = {
  init: {
    opacity: 0,
    right: -100 + "%",
  },

  animate: {
    opacity: 1,
    right: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },

  close: {
    opacity: 0,
    right: -100 + "%",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const Drawer = ({ toggle }: any) => {
  return (
    <motion.div
      key="drawer"
      variants={drawerVariants}
      initial="init"
      animate={toggle ? "animate" : "close"}
      className=" absolute top-0 left-0  w-full  bg-secondary h-screen flex items-center justify-center"
    >
      <div>
        <ul className="flex flex-col items-center gap-10">
          {navLinks.map((item) => (
            <li key={item.id} className="list-none">
              <Link href={item.href}>
                <span className="text-3xl font-semibold text-white">
                  {item.title}
                </span>
              </Link>
            </li>
          ))}

          <li className="list-none">
            <PrimaryButton
              className="text-lg text-white"
              title="Request Demo"
            />
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

const MobileNavbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="lg:hidden absolute top-0 left-0 right-0 py-6 z-50">
      <div className="relative z-50 px-6 container flex items-center justify-between">
        {/* Logo */}

        <div className="w-10 h-10  rounded-full flex items-center justify-center">
          <button
            onClick={() => {
              setToggle((current) => !current);
            }}
          >
            {toggle ? <span>X</span> : <GiHamburgerMenu size={20} />}
          </button>
        </div>

        <div className="w-32">
          <Link href="/">
            <img src="/assets/images/logo.svg" alt="Brand Logo" />
          </Link>
        </div>

        <div>
          <img src="/assets/icons/shopping.svg" alt="" />
        </div>
      </div>

      <div className=" flex items-center gap-4 lg:gap-11 border-t border-b border-white border-opacity-10 mt-4 mx-6 py-4">
        <div className="flex item-center gap-3">
          <div className="w-8 h-8 p-2 border-2 border-primary flex items-center justify-center rounded-full">
            <img className="" src="/assets/icons/call.svg" alt="" />
          </div>
          <div>
            <h5 className="text-xs lg:text-lg text-primary font-medium">
              Call Us On
            </h5>
            <h5 className="text-sm lg:text-[22px]">987654321</h5>
          </div>
        </div>
        <div className="flex item-center gap-3">
          <div className="w-8 h-8 p-2 border-2 border-primary flex items-center justify-center rounded-full">
            <img src="/assets/icons/email.svg" alt="" />
          </div>
          <div>
            <h5 className="text-xs lg:text-lg text-primary font-medium">
              Email Us:
            </h5>
            <h5 className="text-sm lg:text-[22px]">youemail@gmail.com</h5>
          </div>
        </div>
      </div>

      <AnimatePresence>
        <Drawer toggle={toggle} />
      </AnimatePresence>
    </div>
  );
};

export default MobileNavbar;
