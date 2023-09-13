import React, { useRef, useState } from "react";

import clsx from "clsx";
import { ErrorMessage, Field, useFormikContext } from "formik";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import TextError from "./TextError";

const Input = (props) => {
  const [passwordType, setPasswordType] = useState(false);
  const { label, name, required, info, type, isLabelModify, icon, ...rest } =
    props;

  const { errors } = useFormikContext();
  const inputRef = useRef<HTMLInputElement>();

  return (
    <div className="w-full text-left">
      {(label || required) && (
        <label
          htmlFor={name}
          className={clsx(
            "mb-2 font-jakarta font-normal select-none flex items-center gap-1 text-white text-xl"
          )}
        >
          {label && <span>{label}</span>}
          {required && <span className="mr-1 text-red-400">*</span>}
        </label>
      )}

      <Field name={name}>
        {({ field, form, meta }) => {
          if (icon) {
            return (
              <div className="shadow-primary rounded-2xl px-6 py-7 bg-white flex gap-5 items-center">
                <div className="h-6">
                  <img className="h-full w-full" alt="" src={icon} />
                </div>

                <input
                  id={name}
                  name={name}
                  placeholder={`${label} `}
                  onChange={(e) => console.log(e.target.files[0])}
                  {...field}
                  className={clsx(
                    `flex-1 bg-transparent p-0 text-black placeholder:text-black`,
                    form.errors[name] && form.touched[name] ? "" : ""
                  )}
                  {...rest}
                />
              </div>
            );
          }
          return type === "password" ? (
            <div className="relative">
              <input
                type={passwordType ? "password" : "text"}
                ref={inputRef}
                id={name}
                name={name}
                placeholder={`${label} `}
                onChange={(e) => console.log(e.target.files[0])}
                {...field}
                className={clsx(
                  `w-full pr-14`,
                  form.errors[name] && form.touched[name] ? "" : ""
                )}
                {...rest}
              />

              <div
                onClick={() => {
                  setPasswordType((current) => !current);
                }}
                className="w-6 h-6 absolute top-0 right-4 translate-y-1/2 text-body"
              >
                {!passwordType ? (
                  <AiOutlineEye size={24} />
                ) : (
                  <AiOutlineEyeInvisible size={24} />
                )}
              </div>
            </div>
          ) : (
            <div>
              <input
                type={type}
                ref={inputRef}
                id={name}
                name={name}
                placeholder={`${label} `}
                onChange={(e) => console.log(e.target.files[0])}
                {...field}
                className={clsx(
                  `w-full bg-transparent border-white border-opacity-10 border-b text-gray-400 py-1`,
                  form.errors[name] && form.touched[name] ? "" : ""
                )}
                {...rest}
              />
            </div>
          );
        }}
      </Field>
      {!errors[name] && info && <div className="text-gray-400">{info}</div>}
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};

export default Input;
