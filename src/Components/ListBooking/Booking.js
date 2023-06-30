import React, { useContext } from "react";
import "reactjs-popup/dist/index.css";
import { BookedContext } from "../../Pages/Booking/BookingContext";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";

const Booking = ({
  ctg,
  detail,
  index,
  selectService,
  isActived,
  setShowPopup,
  listBooked,
}) => {
  const { booked, setBooked } = useContext(BookedContext);

  return (
    <li className="mb-6 last:mb-0 font-sans">
      <div
        onClick={(index) => selectService(index)}
        className={`border border-blue-200 rounded-lg font-semibold py-4 px-6 text-left uppercase active:bg-slate-200 flex justify-between ${
          isActived === index ? `border-blue-600` : ``
        }`}
      >
        <span>{ctg}</span>
        {isActived === index ? (
          <FaAngleUp className="h-5 w-6" style={{ color: "#3b82f6" }} />
        ) : (
          <FaAngleDown className="h-5 w-6" style={{ color: "#3b82f6" }} />
        )}
      </div>
      <ul className={isActived === index ? "block" : "hidden"}>
        {detail?.map((ele) => (
          <li
            className={`mt-4 ml-6 border border-blue-200 rounded-lg  py-4 px-6 text-left hover:bg-blue-50 flex justify-between items-center ${
              listBooked.find((e) => e.ser.id === ele.id) ? `selected` : ``
            }`}
            key={ele.id}
            onClick={() => {
              if (!listBooked.find((e) => e.ser.id === ele.id))
                setShowPopup(true);
              setBooked(ele);
            }}
          >
            <div>
              <div className="font-semibold">{ele.name} </div>
              <div className="text-[14px] leading-6 flex mt-1">
                <span className="py-[2px] pr-1">
                  <AiOutlineClockCircle className="w-5 h-5 " />
                </span>
                {ele.time}
                <span className="w-1.5 h-1.5 rounded-full flex-none bg-black my-auto mx-3"></span> 
                {ele.price}
              </div>
              <div className="font-semibold text-blue-500 mt-1">
                {listBooked.find((e) => e.ser.id === ele.id)
                  ? listBooked.find((e) => e.ser.id === ele.id).staff.name
                  : ""}
              </div>
            </div>
            <div>
              {listBooked.find((e) => e.ser.id === ele.id) ? (
                <BsCheckCircleFill
                  className="h-5 w-6"
                  style={{ color: "#3b82f6" }}
                />
              ) : (
                <RiCheckboxBlankCircleLine
                  className="h-5 w-6"
                  style={{ color: "#bfdbfe" }}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Booking;
