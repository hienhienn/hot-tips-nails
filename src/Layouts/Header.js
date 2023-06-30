import {useNavigate} from "react-router-dom";
import NavIcon from "./NavIcon/NavIcon";

function Header() {
  let navigate = useNavigate();
  return (
    <div className="h-[101px] bg-gray shadow-lg z-10 ">
        <div className="h-full max-w-[970px] flex justify-between m-auto ">
            <img className="h-full"
                src="https://hottipsnailsandspa.ca/uploads/fnail07ri1nsb/attach/1635393731_logo_mobile_btv2-3451-hot.png" alt="app icon"/>
            <div className="hidden medium:flex px-[14px]">
                <div className="self-center uppercase px-[14px] text-[17px] text-font-oswald hover:text-pink cursor-pointer" onClick ={()=>{ navigate("/");}}>home</div>
                <div className="self-center uppercase px-[14px] text-[17px] text-font-oswald hover:text-pink cursor-pointer" onClick ={()=>{ navigate("/about");}}>about us</div>
                <div className="self-center uppercase px-[14px] text-[17px] text-font-oswald hover:text-pink cursor-pointer" onClick ={()=>{ navigate("/service");}}>services</div>
                <div className="self-center uppercase px-[14px] text-[17px] text-font-oswald hover:text-pink cursor-pointer" onClick ={()=>{ navigate("/booking");}}>booking</div>
                <div className="self-center uppercase px-[14px] text-[17px] text-font-oswald hover:text-pink cursor-pointer">galery</div>
                <div className="self-center uppercase px-[14px] text-[17px] text-font-oswald hover:text-pink cursor-pointer">contact us</div>
            </div>
            <div className="flex medium:hidden px-[14px]">
                <NavIcon/>
            </div>
        </div>
    </div>
  );
}
export default Header;