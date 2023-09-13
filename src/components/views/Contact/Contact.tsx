import React from "react";

const Contact = () => {
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
            d="M3.66667 4.58333C3.1646 4.58333 2.75001 4.99793 2.75001 5.5V16.5C2.75001 17.0021 3.1646 17.4167 3.66667 17.4167H18.3333C18.8354 17.4167 19.25 17.0021 19.25 16.5V5.5C19.25 4.99793 18.8354 4.58333 18.3333 4.58333H3.66667ZM0.916672 5.5C0.916672 3.98541 2.15208 2.75 3.66667 2.75H18.3333C19.8479 2.75 21.0833 3.98541 21.0833 5.5V16.5C21.0833 18.0146 19.8479 19.25 18.3333 19.25H3.66667C2.15208 19.25 0.916672 18.0146 0.916672 16.5V5.5Z"
            fill="#7F8493"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.08238 4.97432C1.3727 4.55958 1.94427 4.45871 2.35901 4.74903L11 10.7977L19.641 4.74903C20.0557 4.45871 20.6273 4.55958 20.9176 4.97432C21.208 5.38907 21.1071 5.96064 20.6923 6.25096L11.5257 12.6676C11.2101 12.8886 10.79 12.8886 10.4743 12.6676L1.30767 6.25096C0.892922 5.96064 0.792057 5.38907 1.08238 4.97432Z"
            fill="#7F8493"
          />
        </svg>
        <p className="uppercase text-sm font-semibold">contact</p>
      </div>

      <div className="py-12">
        <h1>
          Let's Work <span className="text-secondary">Together!</span>
        </h1>
        <p className="text-primary mt-2.5">
          My Email: tanjina.hemi12@gmail.com
        </p>
      </div>

      <div>
        <form action="#" className="flex flex-col ">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-primary inline-block  uppercase">
                Full Name<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="fName"
                id="fName"
                placeholder="Your Full Name"
                className="w-full border-none placeholder:text-darkGray bg-[#24272c] rounded-md  py-2 focus:outline-none  text-lightGray"
              />
            </div>

            <div>
              <label className="text-primary inline-block ">
                PHONE<span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                name="fnumber"
                id="fnumber"
                placeholder="Your Phone Number"
                className="w-full border-none placeholder:text-darkGray bg-[#24272c] rounded-md  py-2 focus:outline-none  text-lightGray"
              />
            </div>

            <div>
              <label className="text-primary inline-block ">
                {" "}
                EMAIL<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="fEmail"
                id="fEmail"
                placeholder="Your Email Adress"
                className="w-full border-none placeholder:text-darkGray bg-[#24272c] rounded-md  py-2 focus:outline-none  text-lightGray"
              />
            </div>

            <div>
              <label className="text-primary inline-block ">
                YOUR SUBJECT<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="fsub"
                id="fsub"
                placeholder="Your Subject to Talk"
                className="w-full border-none placeholder:text-darkGray bg-[#24272c] rounded-md  py-2 focus:outline-none  text-lightGray"
              />
            </div>

            <div>
              <label className="text-primary inline-block ">
                BUDGET (OPTIONAL)<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="fbudget"
                id="fbudget"
                placeholder="Budget For Your Project"
                className="w-full border-none placeholder:text-darkGray bg-[#24272c] rounded-md  py-2 focus:outline-none  text-lightGray"
              />
            </div>
          </div>

          <div className=" mt-6 border-b border-primary pb-16">
            <label className="text-primary inline-block ">
              MESSAGE<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="fsub"
              id="fsub"
              placeholder="Write Your Message Here"
              className="w-full border-none placeholder:text-darkGray bg-[#24272c] rounded-md  py-2 focus:outline-none  text-lightGray"
            />
          </div>

          <div>
            <button className="mt-12 bg-secondary w-max py-5 px-24  font-bold text-black rounded-full">
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
