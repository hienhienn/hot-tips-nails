import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from '@hookform/resolvers';

// const validateRequired = (label) => yup.string().nullable().required(`Please enter ${label}`);

const InfoBooking = ({setStep}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({});

  const onSubmit = (data) => {
    if(isValid) {
      console.log(data);
      setStep(5);
    }
  };


  return (
    <form
      className="max-w-[440px] mx-auto py-10 px-7"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="font-semibold text-[20px] my-3">How do we say hello?</div>
      <div className="text-[14px] mb-5">
        Your name and phone number will be used to send you appointment
        confirmations and reminders. We’ll also be able to call or text you if
        anything changes.
      </div>
      <input
        className={`py-[15px] px-5 w-full outline-none rounded-lg bg-slate-100 border-2 border-transparent  focus:border-blue-500 transition-all duration-200 ${
          errors.fullName ? `border-red-2` : ``
        }`}
        {...register("fullName", { required: true, maxLength: 50 })}
        placeholder="Full name (*)"
        aria-invalid={errors.fullName ? "true" : "false"}
      />
      <div className="mb-5">
        {errors.fullName?.type === "required" && (
          <div className="text-[12px] text-red-500 text-left ">
            Name is required
          </div>
        )}
      </div>
      <input
        className={`py-[15px] px-5 w-full outline-none rounded-lg bg-slate-100 border-2 border-transparent  focus:border-blue-500 transition-all duration-200 ${
          errors.phoneNumber ? `border-red-2` : ``
        }`}
        {...register("phoneNumber", { required: true, minLength: 10 })}
        placeholder="Phone number (*)"
        type="number"
      />
      <div className="mb-5">
        {errors.phoneNumber?.type === "required" && (
          <div className="text-[12px] text-red-500 text-left ">
            Phone is required
          </div>
        )}
        {errors.phoneNumber?.type === "minLength" && (
          <div className="text-[12px] text-red-500 text-left ">
            Phone must have 10 characters
          </div>
        )}
      </div>
      <input
        className={`py-[15px] px-5 w-full outline-none rounded-lg bg-slate-100 border-2 border-transparent focus:border-blue-500 transition-all duration-200 ${
          errors.email ? `border-red-2` : ``
        }`}
        {...register("email", { pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
        placeholder="Email"
      />
      <div className="mb-5">
        {errors.email?.type === "pattern" && (
          <div className="text-[12px] text-red-500 text-left ">
            Email must be valid
          </div>
        )}
      </div>
      <div className="text-justify text-blue-500 text-[13px] px-3 pb-3">
        (*) is required. Please check your input information before submit.
      </div>
      <textarea
        className="py-[15px] px-5 resize-none h-[200px] w-full outline-none rounded-lg bg-slate-100 border-2 border-transparent focus:border-blue-500 transition-all duration-200"
        {...register("note")}
        placeholder="Appointment notes"
      />
      <div className="mb-5"></div>
      <div className="px-3 pb-6">
        <button
          className={`w-full px-4 py-2 rounded-lg transition-all duration-300 text-white font-semibold ${
            !isValid ? `bg-slate-400` : `bg-blue-500`
          }`}
          onClick={handleSubmit(onSubmit)}
        >
          Book Appointment
        </button>
      </div>
      <div className="text-[14px] mb-5">
        By creating this appointment, you agree to receive automated
        transactional and booking reminder text messages from this merchant.
      </div>
    </form>
  );
};

export default InfoBooking;

// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

// const schema = yup
//   .object()
//   .shape({
//     name: yup.string().required('enter name'),
//     age: yup.number().required(),
//   })
//   .required();

// const InfoBooking = () => {
//   const { register, handleSubmit,formState: { errors }, } = useForm({
    
//     resolver: yupResolver(schema),
//   });

//   return (
//     <form onSubmit={handleSubmit((d) => console.log(d))}>
//       <input {...register('name')} />
//       {errors.name && <span>{errors.name.message}</span>}
//       <input type="number" {...register('age')} />
//       <input type="submit" />
//     </form>
//   );
// };

// export default InfoBooking
