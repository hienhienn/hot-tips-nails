import React, { useState, useEffect } from "react";
import Staff from "./Staff";
import { RiSearchFill } from "react-icons/ri";

const ListStaff = ({ showPopup, initList, setServiceTab }) => {
  const [list, setList] = useState(initList)
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setList(initList);
  }, [initList]);

  useEffect(() => {
    const delay = setTimeout(() => {
      const newList = initList?.filter((s) =>
        s.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setList(newList);
    }, 1000);
    return () => clearTimeout(delay);
  }, [searchText, initList]);

  return (
    <div className="mx-auto container py-10 px-5">
      <div className="relative max-w-[500px] mx-auto">
        <input
          className="border w-full text-[13px] rounded-2xl border-blue-200 h-[36px] mb-6 pr-4 pl-10 font-sans bg-slate-100 outline-none hover:bg-slate-200 focus:border-blue-600"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search staff"
        />
        <div className="absolute top-[8px] left-[12px]">
          <RiSearchFill className="w-5 h-5" style={{ color: "#3b82f6" }} />
        </div>
      </div>
      <Staff list={list} showPopup={showPopup} setServiceTab={setServiceTab} />
    </div>
  );
};

export default ListStaff;
