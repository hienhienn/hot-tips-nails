import React, { useEffect } from "react";
import { useContext } from "react";
import { BookedContext, StaffContext } from "../../Pages/Booking/BookingContext";

const Staff = ({ list, showPopup, setServiceTab }) => {
  const {staff, setStaff} = useContext(StaffContext);
  const {booked, setBooked} = useContext(BookedContext);

  return (
    <ul className="mx-auto max-w-[500px] small:max-w-[800px] grid small:grid-cols-2 gap-4">
      <li className="border border-blue-200 rounded-lg font-semibold py-4 px-6 text-left flex justify-between" key={-1}>
        <div className="align-middle">Any available staff</div>
        <button 
          className="rounded-3xl border border-blue-500 bg-blue-500 text-white px-2.5 py-1.5 font-semibold"
          onClick={() => {
            setStaff({name: 'Any available staff', id: -1});
            if(!booked) setServiceTab(true);
          }}
        >
          Booking
        </button>
      </li>
      {list?.map((s) => (
        <li className="border border-blue-200 rounded-lg font-semibold py-4 px-6 text-left flex justify-between" key={s.id}>
          <div className="align-middle">{s.name}</div>
          <button 
            className="rounded-3xl border border-blue-500 bg-blue-500 text-white px-2.5 py-1.5 font-semibold"
            onClick={() => {
              setStaff(s);
              if(!booked) setServiceTab(true);
            }}
          >
            Booking
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Staff;
