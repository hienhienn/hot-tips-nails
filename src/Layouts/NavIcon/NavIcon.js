import * as React from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./NavIcon.css";

function NavIcon() {
  let navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      //   anchorRef.current.focus();
    }

    prevOpen.current = open;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <div className="mr-[5px] pt-[13px]">
      <FaBars
        className={open ? "hidden" : ""}
        style={{ color: "#fff", height: "20px", width: "26px" }}
        onClick={handleToggle}
      />
      <AiOutlineClose
        className={open ? "" : "hidden"}
        style={{ color: "#fff", height: "20px", width: "20px" }}
        onClick={handleClose}
      />
      <div className={open ? "list-menu menu-open" : "list-menu menu-close"}>
        <div
          className="menu"
          id="home"
          onClick={() => {
            navigate("/");
            setOpen(false);
          }}
        >
          Home
        </div>
        <div
          className="menu"
          id="about"
          onClick={() => {
            navigate("/about");
            setOpen(false);
          }}
        >
          About us
        </div>
        <div
          className="menu"
          id="service"
          onClick={() => {
            navigate("/service");
            setOpen(false);
          }}
        >
          Services
        </div>
        <div
          className="menu"
          id="service"
          onClick={() => {
            navigate("/booking");
            setOpen(false);
          }}
        >
          Booking
        </div>
        <div className="menu" id="service">
          Galery
        </div>
        <div className="menu" id="service" s>
          Contact us
        </div>
      </div>
    </div>
  );
}

export default NavIcon;
