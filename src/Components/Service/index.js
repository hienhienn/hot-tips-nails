import React from "react";

const Service = ({ele}) => {
  return (
    <div className="flex content-text pt-[8px] pb-[5px]">
      <span className="mr-[6px] text-[15px] text-left whitespace-pre">
        {ele.ser}
      </span>
      <span className="dot flex-1 border-b-[1px] h-[15px] border-dotted"></span>
      <span className="ml-[6px] text-[18px]">${ele.price}</span>
    </div>
  );
};

export default Service;
