import React from "react";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const POP_DATA = [
  {
    id: 1,
    image:
      "https://hottipsnailsandspa.ca/uploads/fnail07ri1nsb/filemanager/BTV2-3451-coupon.jpg",
    width: "700px",
    pb: "75%",
  },
  {
    id: 2,
    image:
      "https://hottipsnailsandspa.ca/uploads/fnail07ri1nsb/filemanager/ID%2311554%20%20Coupon_07202022.jpg",
    width: "600px",
    pb: "100%",
  },
];

const PopupHome = () => {
  const [popIndex, setPopIndex] = useState(POP_DATA?.length - 1);
    return (
      <>
        <div className={`fixed inset-0 z-[1000]  ${popIndex >= 0 ? `visible opacity-100 duration-700 transition-all` : ` invisible opacity-0`}`}>
          <div
            className="bg-black absolute inset-0 opacity-20"
            onClick={() => setPopIndex((popIndex) => (popIndex - 1))}
          />
          <div
            className={`w-[${POP_DATA[popIndex]?.width}] max-w-[80%] relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
            style={{width: POP_DATA[popIndex]?.width}}
          >
            <div className={`w-full pb-[${POP_DATA[popIndex]?.pb}] bg-white`} style={{paddingBottom: POP_DATA[popIndex]?.pb}}>
              <img
                className="absolute bg-white p-2 w-[full] h-[full] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src={POP_DATA[popIndex]?.image}
                alt="popup"
              />
              <RxCross1
                className="w-7 h-7 absolute right-0 translate-x-1/2 -translate-y-1/2 bg-white p-[6px] rounded-full"
                onClick={() => setPopIndex((popIndex) => (popIndex - 1))}
              />
            </div>
          </div>
        </div>
      </>
    );
};

export default PopupHome;
