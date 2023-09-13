import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { resumedate } from "./resumedata";

const Resume = () => {
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
            d="M3.55546 1.7222C4.07118 1.20648 4.77065 0.916748 5.5 0.916748H13.2917C13.5348 0.916748 13.7679 1.01333 13.9398 1.18523L18.9815 6.2269C19.1534 6.39881 19.25 6.63197 19.25 6.87508V18.3334C19.25 19.0628 18.9603 19.7622 18.4445 20.278C17.9288 20.7937 17.2293 21.0834 16.5 21.0834H5.5C4.77065 21.0834 4.07118 20.7937 3.55546 20.278C3.03973 19.7622 2.75 19.0628 2.75 18.3334V3.66675C2.75 2.9374 3.03973 2.23793 3.55546 1.7222ZM5.5 2.75008C5.25688 2.75008 5.02373 2.84666 4.85182 3.01857C4.67991 3.19048 4.58333 3.42363 4.58333 3.66675V18.3334C4.58333 18.5765 4.67991 18.8097 4.85182 18.9816C5.02373 19.1535 5.25689 19.2501 5.5 19.2501H16.5C16.7431 19.2501 16.9763 19.1535 17.1482 18.9816C17.3201 18.8097 17.4167 18.5765 17.4167 18.3334V7.25478L12.912 2.75008H5.5Z"
            fill="#7F8493"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.8333 0.916748C13.3396 0.916748 13.75 1.32715 13.75 1.83341V6.41675H18.3333C18.8396 6.41675 19.25 6.82715 19.25 7.33342C19.25 7.83968 18.8396 8.25008 18.3333 8.25008H12.8333C12.3271 8.25008 11.9167 7.83968 11.9167 7.33342V1.83341C11.9167 1.32715 12.3271 0.916748 12.8333 0.916748Z"
            fill="#7F8493"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.41667 11.9167C6.41667 11.4104 6.82708 11 7.33334 11H14.6667C15.1729 11 15.5833 11.4104 15.5833 11.9167C15.5833 12.4229 15.1729 12.8333 14.6667 12.8333H7.33334C6.82708 12.8333 6.41667 12.4229 6.41667 11.9167Z"
            fill="#7F8493"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.41667 15.5834C6.41667 15.0772 6.82708 14.6667 7.33334 14.6667H14.6667C15.1729 14.6667 15.5833 15.0772 15.5833 15.5834C15.5833 16.0897 15.1729 16.5001 14.6667 16.5001H7.33334C6.82708 16.5001 6.41667 16.0897 6.41667 15.5834Z"
            fill="#7F8493"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.41667 8.24992C6.41667 7.74366 6.82708 7.33325 7.33334 7.33325H9.16667C9.67293 7.33325 10.0833 7.74366 10.0833 8.24992C10.0833 8.75618 9.67293 9.16659 9.16667 9.16659H7.33334C6.82708 9.16659 6.41667 8.75618 6.41667 8.24992Z"
            fill="#7F8493"
          />
        </svg>
        <p className="uppercase text-sm font-semibold">RESUME</p>
      </div>

      <div className="py-12 ">
        <h1>
          Education <span className="text-secondary">& Experience</span>
        </h1>
      </div>

      <div className="py flex justify-start gap-x-20">
        <div className="w-max">
          <div className="border h-6 w-6 rounded-full"></div>
          <div className="border-l-2 h-40 ml-3 border-darkGray"></div>
          <div className="border h-6 w-6 rounded-full"></div>
          <div className="border-l-2 h-[16.7rem] ml-3 border-darkGray"></div>
          <div className="border h-6 w-6 rounded-full"></div>
          <div className="border-l-2 h-[25.5rem] ml-3 border-darkGray"></div>
          <div className="border h-6 w-6 rounded-full"></div>
        </div>

        <div className="">
          {resumedate.map((item, index) => {
            return (
              <div key={index} className="mb-[3.8rem] ">
                <h4 className="text-primary">{item.date}</h4>
                <h3>{item.title}</h3>
                <h5 className="text-primary">{item.place}</h5>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-6 resume-shadow w-max p-8 rounded-4xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
        >
          <path
            d="M55.6286 48.9304C54.7147 49.2002 53.373 49.2306 51.9345 49.0219C50.3906 48.798 48.8158 48.3261 47.268 47.6306C50.0282 47.229 52.1694 47.3528 54.0009 48.0017C54.4348 48.1554 55.1475 48.5664 55.6286 48.9304ZM40.2285 46.3986C40.1162 46.4291 40.0056 46.458 39.8955 46.4886C39.1528 46.6907 38.4302 46.8879 37.7338 47.0634L36.7948 47.3016C34.9059 47.7795 32.9747 48.2677 31.0672 48.8492C31.7921 47.1011 32.4656 45.3337 33.1251 43.6057C33.6133 42.3266 34.1119 41.0199 34.6275 39.7301C34.8891 40.1621 35.1621 40.5943 35.4461 41.0276C36.7402 42.9986 38.367 44.8209 40.2285 46.3986ZM35.4238 26.6861C35.5462 28.8431 35.0809 30.9182 34.3982 32.9089C33.5572 30.4474 33.1654 27.7292 34.2167 25.5347C34.4863 24.9722 34.7072 24.6714 34.8504 24.5145C35.0717 24.8561 35.3627 25.6204 35.4238 26.6861ZM25.5628 54.0101C25.0903 54.8554 24.608 55.6466 24.1137 56.3938C22.9208 58.1916 20.9699 60.1164 19.9676 60.1164C19.869 60.1164 19.7497 60.1005 19.5753 59.9164C19.463 59.7986 19.445 59.7142 19.4505 59.5991C19.4843 58.9382 20.36 57.7611 21.6286 56.6696C22.7801 55.6794 24.0816 54.7991 25.5628 54.0101ZM58.8199 49.0239C58.6667 46.8223 54.9606 45.4099 54.924 45.3967C53.4913 44.8888 51.9349 44.6421 50.166 44.6421C48.2724 44.6421 46.2309 44.916 43.6091 45.5286C41.2762 43.8748 39.261 41.8044 37.7554 39.5124C37.0905 38.4997 36.4927 37.4889 35.9717 36.5016C37.2437 33.4601 38.3891 30.1899 38.181 26.5273C38.0132 23.5905 36.6889 21.6178 34.8879 21.6178C33.6525 21.6178 32.5888 22.5328 31.7239 24.3399C30.1809 27.5601 30.5865 31.6804 32.9287 36.597C32.0852 38.5783 31.3014 40.6324 30.5428 42.6208C29.5989 45.0934 28.6264 47.6443 27.5302 50.0709C24.4563 51.2873 21.9309 52.7623 19.8263 54.5732C18.4476 55.7574 16.7854 57.5677 16.6906 59.4576C16.6442 60.3476 16.9494 61.1638 17.5696 61.8178C18.2284 62.5121 19.0562 62.8778 19.9663 62.8789C22.9723 62.8789 25.8654 58.7488 26.4142 57.9204C27.5188 56.2554 28.5527 54.3983 29.5657 52.2561C32.1172 51.3339 34.8364 50.6456 37.4719 49.9804L38.4157 49.7406C39.1252 49.5602 39.8627 49.3607 40.6191 49.1537C41.4195 48.9373 42.243 48.7129 43.08 48.4997C45.7862 50.2208 48.6964 51.3433 51.5346 51.7552C53.9252 52.1031 56.0482 51.9013 57.4854 51.1521C58.7786 50.4786 58.8499 49.4392 58.8199 49.0239ZM64.6416 67.9553C64.6416 71.9873 61.0879 72.2359 60.3709 72.2439H14.5216C10.5042 72.2439 10.2623 68.6659 10.2546 67.9553L10.2541 7.04329C10.2541 3.00731 13.8143 2.76262 14.5211 2.75452H45.4931L45.5096 2.77087V14.8574C45.5096 17.2831 46.9761 21.8754 52.5296 21.8754H64.5381L64.6412 21.9784L64.6416 67.9553ZM61.7947 19.1205H52.5317C48.5154 19.1205 48.2724 15.5619 48.267 14.8578V5.53701L61.7947 19.1205ZM67.3963 67.9553V20.8419L48.267 1.63317V1.54379H48.1755L46.6391 0H14.5217C12.0929 0 7.5 1.47251 7.5 7.04458V67.9566C7.5 70.3926 8.96804 75 14.5217 75H60.3752C62.8035 74.9994 67.3963 73.5268 67.3963 67.9553Z"
            fill="#EB5757"
          />
        </svg>

        <h4>Download My Resume</h4>
      </div>
    </div>
  );
};

export default Resume;
