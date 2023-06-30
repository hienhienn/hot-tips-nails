import Intro from "../../Components/Intro/Intro";
import "./About.css"
import aboutPage from "./data_aboutpage.json"

function About() {
  return (
    <div className="About">
      <div className="pt-10 pb-2.5">
        <div className="screen mga title-text text-[30px] text-center medium:text-left">
          about us
        </div>
      </div>
      <div className="bg-gray py-[50px] ">
        <div className="screen mga grid medium:flex">
          <div className="px-[15px]">
            <Intro intro={aboutPage} isJustify={true} />
          </div>
          <img className="px-[15px] max-w-[100%] medium:max-w-[390px] m-auto" 
          src="https://hottipsnailsandspa.ca/uploads/fnail07ri1nsb/filemanager/dreamstime_s_53694984.jpg"
          alt="hottipsnails"
        ></img>
        </div>

      </div>
    </div>
  );
}

export default About;
