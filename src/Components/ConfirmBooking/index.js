import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { BookedContext } from "../../Pages/Booking/BookingContext";
import { AiOutlineCalendar } from "react-icons/ai";

const ConfirmBooking = ({ list, setStep, setList }) => {
  const { date, time } = useContext(BookedContext);

  const removeBooked = (e) => {
    const newList = list.filter((ele) => ele.ser.id !== e.ser.id);
    setList(newList);
    console.log(list, newList);
  };
  return (
    <div className="container px-5 mx-auto list-booking-ser">
      <div className="py-10 max-w-[500px] mx-auto">
        <div className="text-[14px] mb-4">
          Review and confirm selections below
        </div>
        <ul className="w-full">
          {list?.map((e, index) => (
            <li
              className="mb-3 p-4 last:mb-0 border border-slate-100 shadow-lg shadow-slate-200  mx-auto text-left rounded-lg flex justify-between"
              key={index}
            >
              <div>
                <div>{e.ser.name}</div>
                <div className="font-semibold text-blue-500 mt-2">
                  {e.staff.name}
                </div>
              </div>
              <div className="flex items-center cursor-pointer">
                <RxCross1
                  className="w-5 h-5"
                  style={{ color: "#3b82f6" }}
                  onClick={() => removeBooked(e)}
                />
              </div>
            </li>
          ))}
          {date && time && (
            <li className="mb-3 p-4 last:mb-0 border border-slate-100 shadow-lg shadow-slate-200  mx-auto text-left rounded-lg flex justify-between">
              <div>
                <div className="mb-2">
                  {date.toLocaleString("en-US", { weekday: "long" })},{" "}
                  {date.toLocaleString("en-US", { month: "long" })}{" "}
                  {date.getDate()}
                </div>
                <div>{time}</div>
              </div>
              <div className="flex items-center cursor-pointer">
                <AiOutlineCalendar
                  className="w-5 h-5"
                  style={{ color: "#3b82f6" }}
                  onClick={() => setStep(3)}
                />
              </div>
            </li>
          )}
        </ul>
        <div className="w-full">
          <button
            className="w-full text-[17px] font-semibold text-blue-500 border border-blue-500 mt-6 py-2 rounded-lg"
            onClick={() => setStep(1)}
          >
            Add more service
          </button>
        </div>
        <div className="w-full">
          <button
            className="w-full text-[17px] font-semibold text-white bg-blue-500 my-6 py-2 rounded-lg"
            onClick={() => {
              if (!date || !time) setStep(3);
              else setStep(4);
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBooking;
