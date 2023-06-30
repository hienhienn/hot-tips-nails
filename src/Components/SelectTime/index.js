import React, { useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import { BookedContext } from "../../Pages/Booking/BookingContext";

const SelectTime = ({ setStep }) => {
  const { date, setDate, time, setTime } = useContext(BookedContext);
  const timePicker = {
    morning: [
      "10:00 AM",
      "10:15 AM",
      "10:30 AM",
      "10:45 AM",
      "11:00 AM",
      "11:15 AM",
      "11:30 AM",
      "11:45 AM",
    ],
    afternoon: [
      "12:00 PM",
      "12:15 PM",
      "12:30 PM",
      "12:45 PM",
      "1:00 PM",
      "1:15 PM",
      "1:30 PM",
      "1:45 PM",
      "2:00 PM",
      "2:15 PM",
      "2:30 PM",
      "2:45 PM",
      "3:00 PM",
      "3:15 PM",
      "3:30 PM",
      "3:45 PM",
      "4:00 PM",
      "4:15 PM",
      "4:30 PM",
      "4:45 PM",
    ],
    evening: [
      "5:00 PM",
      "5:15 PM",
      "5:30 PM",
      "5:45 PM",
      "6:00 PM",
      "6:15 PM",
      "6:30 PM",
    ],
  };
  return (
    <div className="w-full max-w-[800px] small:px-0 mx-auto small:flex small:justify-between py-10 grid">
      <div className="p-5 border rounded-lg border-slate-100 shadow-2xl shadow-slate-200 h-fit w-fit small:mx-auto">
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          minDate={new Date()}
          maxDate={new Date().setMonth(new Date().getMonth() + 1)}
          inline
          // showDisabledMonthNavigation
        />
      </div>
      <div className="grid px-5">
        <div className="mb-6">
          <div className="font-semibold text-left mb-2">Morning</div>
          <ul className="grid grid-cols-4 gap-4">
            {timePicker.morning.map((e, index) => (
              <li
                className={`text-[13px] medium:text-[14px] border hover:bg-slate-100 px-2 py-1 rounded-lg cursor-pointer focus:bg-slate-400 ${
                  time === e ? `border-blue-500` : `border-slate-300`
                }`}
                key={index}
                onClick={() => setTime(e)}
              >
                {e}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <div className="font-semibold text-left mb-2">Afternoon</div>
          <ul className="grid grid-cols-4 gap-4">
            {timePicker.afternoon.map((e, index) => (
              <li
                className={`text-[13px] medium:text-[14px] border hover:bg-slate-100 px-2 py-1 rounded-lg cursor-pointer ${
                  time === e ? `border-blue-500` : `border-slate-300`
                }`}
                key={index}
                onClick={() => setTime(e)}
              >
                {e}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <div className="font-semibold text-left mb-2">Evening</div>
          <ul className="grid grid-cols-4 gap-4">
            {timePicker.evening.map((e,index) => (
              <li
                className={`text-[13px] medium:text-[14px] border hover:bg-slate-100 px-2 py-1 rounded-lg cursor-pointer ${
                  time === e ? `border-blue-500` : `border-slate-300`
                }`}
                key={index}
                onClick={() => setTime(e)}
              >
                {e}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button
            className={`w-full px-4 py-2 rounded-lg text-center transition-all duration-300 text-white font-semibold ${
              date && time ? `bg-blue-500` : `bg-slate-400`
            }`}
            onClick={() => {if(date && time) setStep(2)}}
          >
            Continue booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectTime;
