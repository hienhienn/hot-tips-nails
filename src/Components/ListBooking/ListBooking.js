import React, { useEffect, useState } from "react";
import Booking from "./Booking";
import { RiSearchFill } from 'react-icons/ri'

const ListBooking = ({ setShowPopup, initList=[], listBooked }) => {
  const [isActived, setIsActived] = useState(-1);
  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState(initList);

  useEffect(() => {
    setList(initList);
  }, [initList]);

  useEffect(() => {
    const delay = setTimeout(() => {
      const newList = JSON.parse(JSON.stringify(initList))?.reduce(
        (result, currentValue) => {
          currentValue.list = currentValue.list?.filter((s) =>
            s.name.toLowerCase().includes(searchText.toLowerCase())
          );
          if (currentValue.list && currentValue.list.length) {
            result.push(currentValue);
          }
          return result;
        },
        []
      );
      setIsActived(-1);
      setList(newList);
    }, 400);
    return () => clearTimeout(delay);
  }, [searchText, initList]);

  return (
    <div className="mx-auto container py-10 px-5">
      <div className="relative max-w-[500px] mx-auto">
        <input
          className="border w-full text-[13px] rounded-2xl border-blue-200 h-[36px] mb-6 pr-4 pl-10 font-sans bg-slate-100 outline-none hover:bg-slate-200 focus:border-blue-600"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search services"
        />
        <div className="absolute top-[8px] left-[12px]">
          <RiSearchFill className="w-5 h-5"style={{color: '#3b82f6'}}/>
        </div>
      </div>

      <ul className="mx-auto max-w-[500px]">
        {list?.map((ele, index) => (
          <Booking
            key={index}
            index={index}
            ctg={ele.ctg}
            detail={ele.list}
            selectService={() => {
              setIsActived(isActived === index ? -1 : index);
            }}
            isActived={isActived}
            setShowPopup={setShowPopup}
            listBooked={listBooked}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListBooking;
