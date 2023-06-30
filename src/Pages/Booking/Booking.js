import React, { useState, useEffect } from "react";
import ListBooking from "../../Components/ListBooking/ListBooking";
import ListStaff from "../../Components/ListStaff/ListStaff";
import Staff from "../../Components/ListStaff/Staff";
import "react-toastify/dist/ReactToastify.css";
import { BookedContext, StaffContext } from "./BookingContext";
import "./Booking.css";
import request from "../../request";
import { toast } from "react-toastify";
import ConfirmBooking from "../../Components/ConfirmBooking";
import { RxCross1 } from "react-icons/rx";
import SelectTime from "../../Components/SelectTime";
import InfoBooking from "../../Components/InfoBooking";
import {useNavigate} from "react-router-dom";

const Booking = () => {
  const [serviceTab, setServiceTab] = useState(true);
  const [booked, setBooked] = useState();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState();
  const [staff, setStaff] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [listBooking, setListBooking] = useState(null);
  const [initListBooking, setInitListBooking] = useState(null);
  const [listStaff, setListStaff] = useState(null);
  const [listBooked, setListBooked] = useState([]);
  const [step, setStep] = useState(1);

  let navigate = useNavigate();

  useEffect(() => {
    request
      .get("/nails_db_booking/service")
      .then((res) => {
        setListBooking(res.data);
        setInitListBooking(res.data);
      })
      .catch(() => toast.error("Failed to load data"));
    request
      .get("/nails_db_booking/staff")
      .then((res) => {
        setListStaff(res.data);
      })
      .catch(() => toast.error("Failed to load data"));
  }, []);

  useEffect(() => {
    if (!staff) {
      setListBooking(initListBooking);
      return;
    }
    if (staff.id === -1) setListBooking(initListBooking);
    else {
      const newList = JSON.parse(JSON.stringify(initListBooking))?.reduce(
        (result, currentValue) => {
          currentValue.list = currentValue.list?.filter((s) =>
            s.list_staff.includes(staff.id)
          );
          if (currentValue.list && currentValue.list.length) {
            result.push(currentValue);
          }
          return result;
        },
        []
      );
      setListBooking(newList);
    }
  }, [staff]);

  useEffect(() => {
    if (booked && staff) {
      setListBooked([...listBooked, { ser: booked, staff: staff }]);
      setBooked(null);
      setStaff(null);
      setShowPopup(false);
      setStep(2);
    }
  }, [booked, staff]);

  useEffect(() => {
    if (listBooked.length === 0) setStep(1);
  }, [listBooked]);

  useEffect(() => {
    if (showPopup) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [showPopup]);

  return (
    <BookedContext.Provider
      value={{ booked, setBooked, date, setDate, time, setTime }}
    >
      <StaffContext.Provider value={{ staff, setStaff }}>
        {step === 1 && (
          <>
            <div
              className={`fixed inset-0 z-[1000] duration-300 transition-all ${
                showPopup ? `visible opacity-100` : ` invisible opacity-0`
              }`}
            >
              <div
                className="bg-black absolute inset-0 opacity-20"
                onClick={() => setShowPopup(false)}
              />
              <div className="w-full small:w-1/2 h-1/2 min-h-[500px] small:min-w-[700px] bg-white rounded-md absolute top-full small:top-1/2 -translate-x-1/2 left-1/2 -translate-y-full small:-translate-y-1/2">
                <div className="absolute inset-0 py-6">
                  <div className="flex w-full p-2 px-6">
                    <div className="font-semibold w-full text-[18px]">
                      Select Staff
                    </div>
                    <RxCross1
                      className="w-5 h-5"
                      style={{ color: "#3b82f6" }}
                      onClick={() => {
                        setShowPopup(false);
                        setBooked(null);
                        // setStaff(null);
                      }}
                    />
                  </div>
                  <div
                    style={{
                      maxHeight: "calc(100% - 43px)",
                      overflow: "auto",
                      padding: "0 24px",
                    }}
                  >
                    <div className="text-[14px] mb-6 max-w-[90%] mx-auto">
                      For second service and up, to avoid time conflict, you can
                      only choose your{" "}
                      <span className="font-semibold">original staff</span> or{" "}
                      <span className="font-semibold">"Any staff"</span> option.
                      By doing so we will arrange the most relevant staff for
                      you.
                    </div>
                    <Staff
                      list={listStaff?.filter((s) =>
                        booked?.list_staff.includes(s.id)
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="list-booking-ser">
              <div className="container mx-auto pt-10 px-5">
                <div className="text-[14px] mb-4">
                  {staff && !booked && (
                    <>
                      <span className="font-semibold">{staff.name}</span> is
                      selected. Select service
                    </>
                  )}
                  {!staff && booked && (
                    <>
                      <span className="font-semibold">{booked.name}</span> is
                      selected. Select staff
                    </>
                  )}
                  {!staff && !booked && <span>Select service and staff</span>}
                </div>
                <div className="max-w-[500px] mx-auto flex gap-6">
                  <button
                    className={
                      serviceTab
                        ? "rounded-3xl border border-blue-500 bg-blue-500 text-white p-3 grow font-semibold"
                        : "rounded-3xl border border-blue-500 p-3 grow font-semibold text-blue-500"
                    }
                    onClick={() => setServiceTab(true)}
                  >
                    Service
                  </button>
                  <button
                    className={
                      !serviceTab
                        ? "rounded-3xl border border-blue-500 bg-blue-500 text-white p-3 grow font-semibold"
                        : "rounded-3xl border border-blue-500 p-3 grow font-semibold text-blue-500"
                    }
                    onClick={() => setServiceTab(false)}
                  >
                    Staff
                  </button>
                </div>
              </div>
              <div className={!!serviceTab ? "" : "hidden"}>
                <ListBooking
                  setShowPopup={setShowPopup}
                  initList={listBooking}
                  listBooked={listBooked}
                />
              </div>
              <div className={!serviceTab ? "" : "hidden"}>
                <ListStaff
                  showPopup={showPopup}
                  initList={listStaff}
                  setServiceTab={setServiceTab}
                />
              </div>
            </div>
          </>
        )}
        {step === 2 && (
          <ConfirmBooking
            list={listBooked}
            setStep={setStep}
            setList={setListBooked}
          />
        )}
        {step === 3 && <SelectTime setStep={setStep} />}
        {step === 4 && <InfoBooking setStep={setStep} />}
        {step === 5 && (
          <div className="list-booking-ser relative p-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[400px]">
              <div className="text-[18px] font-semibold mb-6">
                Thank you! Your appointment has been sent to the owner but you
                need to wait for their confirmation.
              </div>

              <button
                className="w-full px-4 py-2 rounded-lg transition-all duration-300 text-white font-semibold bg-blue-500"
                onClick={() => navigate("/")}
              >
                Back to Home
              </button>
            </div>
          </div>
        )}
      </StaffContext.Provider>
    </BookedContext.Provider>
  );
};

export default Booking;
