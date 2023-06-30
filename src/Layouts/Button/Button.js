import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import './Button.css';

function Button() {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 600) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return(
        <div className="Button">
            <button className="pink-btn title-text">780-758-1056</button>
            <button className="pink-btn title-text">booking</button>
            <div className="top-to-btm">
            {showTopBtn && (
                <FaAngleUp
                    className="icon-position icon-style"
                    onClick={goToTop}
                />
            )}{" "}
        </div>
        </div>
    )
}

export default Button;