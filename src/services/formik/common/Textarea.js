import React from "react";

import clsx from "clsx";
import { ErrorMessage, Field } from "formik";

import TextError from "./TextError";

function Textarea(props) {
  const { label, name, required, ...rest } = props;
  return (
    <div className="form-control w-full">
      {(label || required) && (
        <label
          htmlFor={name}
          className="mb-1  font-inter font-medium text-[#3b3b3b] select-none flex items-center gap-1"
        >
          {label && <span className="block mb-[2px] pl-[2px]">{label}</span>}
          {required && <span className="mr-1 text-red-400">*</span>}
        </label>
      )}

      <Field name={name}>
        {({ field, form }) => {
          return (
            <div>
              <textarea
                name={name}
                id={name}
                {...field}
                rows="7"
                placeholder={`${label} `}
                className={clsx(
                  `w-full px-6 py-7 rounded-2xl shadow-primary text-black placeholder:text-black `,
                  form.errors[name] && form.touched[name]
                    ? "form-input-ec"
                    : "form-input-sc"
                )}
                {...rest}
              />
            </div>
          );
        }}
      </Field>

      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default Textarea;
