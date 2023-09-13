import React from "react";
import { pricedata } from "./pricedata";

const Pricing = () => {
  return (
    <div className="my-28">
      <div className="flex btn-shadow items-center gap-3 border border-darkGray text-[#7F8493] w-max px-6 py-2 rounded-full">
        <p className="uppercase text-sm font-semibold">$ pricing</p>
      </div>
      <h1 className="my-12">
        My <span className=" text-secondary">Pricing</span>
      </h1>

      <div className="grid grid-cols-2 xl:gap-11 lg:gap-4 ">
        {pricedata.map((item, index) => {
          return (
            <div
              key={index}
              className=" box-shadow lg:py-4 xl:py-11 xl:px-12 lg:px-4"
            >
              <div className=" border-b border-lightGray pb-5">
                <h4 className="text-[1.8rem] font-medium">{item.title}</h4>
                <p className="text-primary mt-1 mb-5">{item.sub}</p>
                <h2 className="text-secondary text-6xl font-semibold">
                  {item.price}
                  <span className="text-2xl text-lightGray">hours</span>
                </h2>
              </div>

              <div className="mt-5 gap-y-8 space-y-4 text-primary ">
                <li>{item.des}</li>
                <li>{item.des2}</li>
                <li>{item.des3}</li>
                <li>{item.des4}</li>
                <li>{item.des5}</li>
                <li>{item.des6}</li>
                <li>{item.des7}</li>
                <li>{item.des8}</li>
              </div>

              <div className="mt-11">
                <button className="text-black text-lg font-medium bg-secondary w-full rounded-full py-2.5 xl:py-4">
                  {item.btn}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
