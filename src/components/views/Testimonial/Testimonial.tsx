import React from "react";
import { MdNavigateNext } from "react-icons/md";

const Testimonial = () => {
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
            d="M4.58333 3.66671C4.34021 3.66671 4.10706 3.76328 3.93515 3.93519C3.76324 4.1071 3.66666 4.34026 3.66666 4.58337V17.037L5.76848 14.9352C5.94039 14.7633 6.17355 14.6667 6.41666 14.6667H17.4167C17.6598 14.6667 17.8929 14.5701 18.0648 14.3982C18.2368 14.2263 18.3333 13.9932 18.3333 13.75V4.58337C18.3333 4.34026 18.2368 4.1071 18.0648 3.93519C17.8929 3.76328 17.6598 3.66671 17.4167 3.66671H4.58333ZM2.63878 2.63883C3.15451 2.12311 3.85398 1.83337 4.58333 1.83337H17.4167C18.146 1.83337 18.8455 2.12311 19.3612 2.63883C19.8769 3.15455 20.1667 3.85403 20.1667 4.58337V13.75C20.1667 14.4794 19.8769 15.1789 19.3612 15.6946C18.8455 16.2103 18.146 16.5 17.4167 16.5H6.79636L3.39818 19.8982C3.13601 20.1604 2.74174 20.2388 2.3992 20.0969C2.05667 19.955 1.83333 19.6208 1.83333 19.25V4.58337C1.83333 3.85403 2.12306 3.15456 2.63878 2.63883Z"
            fill="#7F8493"
          />
        </svg>
        <p className="uppercase text-sm font-semibold">Testimonial</p>
      </div>

      <div className="py-12">
        <h1>
          Trusted by <span className="text-secondary">Hundred Clients</span>
        </h1>
        <p className="text-primary mt-2.5">WHAT MY CLIENTS SAY</p>
      </div>

      <div className="w-full flex gap-10 ">
        <div className="py-7 px-9 bg-shadow">
          <img src="/assets/images/dp.svg" alt="" />
          <h4 className="mt-6">Brandon Faulcon</h4>
          <p className="text-lg text-center text-primary">
            Prince Teck
            <br />
            United States
          </p>
        </div>

        <div className="w-full ">
          <div className="flex justify-between">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="87"
                height="87"
                viewBox="0 0 87 87"
                fill="none"
              >
                <g clip-path="url(#clip0_44_225)">
                  <path
                    d="M77.7121 11.9101L77.7121 27.8513L76.0461 28.0578C73.2751 28.3105 70.6315 28.8907 68.6803 31.4857C66.7604 34.0391 65.5795 38.4573 65.3987 46.1661L65.3867 46.6778L65.8985 46.6778L86.5 46.6778L86.5 75.1172L49.2727 75.1172L49.2727 49.08C49.2727 34.7752 51.3166 25.601 55.826 20.034C60.9572 13.6995 68.6657 12.4141 75.8046 12.0124C75.8048 12.0124 75.8049 12.0123 75.8051 12.0123L77.7121 11.9101Z"
                    fill="#24272C"
                    stroke="#BCBCBC"
                  />
                  <path
                    d="M17.4075 46.6778L37.7273 46.6778L37.7273 75.1172L0.500008 75.1172L0.500005 49.08C0.500004 34.7785 2.61315 25.6023 7.12311 20.034C12.254 13.6999 20.0324 12.4141 27.173 12.0123L27.1733 12.0123L28.9394 11.9119L28.9394 27.8552L27.4118 28.058C24.6409 28.3109 22.0311 28.892 20.1159 31.4895C18.2335 34.0426 17.0884 38.4596 16.9076 46.1661L16.8956 46.6778L17.4075 46.6778Z"
                    fill="#24272C"
                    stroke="#BCBCBC"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_44_225">
                    <rect width="87" height="87" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="flex gap-6">
              <div className="w-max h-max bg-shadow rounded-xl p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.2517 7.49818C22.805 8.05143 22.805 8.94841 22.2517 9.50165L14.7534 16.9999L22.2517 24.4982C22.805 25.0514 22.805 25.9484 22.2517 26.5017C21.6985 27.0549 20.8015 27.0549 20.2482 26.5017L11.7482 18.0017C11.195 17.4484 11.195 16.5514 11.7482 15.9982L20.2482 7.49818C20.8015 6.94494 21.6985 6.94494 22.2517 7.49818Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="w-max h-max bg-shadow rounded-xl p-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.7482 7.49818C12.3015 6.94494 13.1985 6.94494 13.7517 7.49818L22.2517 15.9982C22.805 16.5514 22.805 17.4484 22.2517 18.0017L13.7517 26.5017C13.1985 27.0549 12.3015 27.0549 11.7482 26.5017C11.195 25.9484 11.195 25.0514 11.7482 24.4982L19.2465 16.9999L11.7482 9.50165C11.195 8.94841 11.195 8.05143 11.7482 7.49818Z"
                    fill="#10BF62"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-shadow pt-8 pb-10 px-11 mt-8">
            <div className="flex items-center justify-between">
              <h4 className="text-[1.8rem]">Travel App UX/UI Design</h4>
              <img src="/assets/images/star.svg" alt="" />
            </div>

            <h6 className="text-lg text-primary">Via Upwork. May 31 - 2023</h6>
            <p className="text-lg text-primary mt-8">
              Tan did an amazing job I am now welcoming her to my team <br />
              as the head of Creative Design."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
