import "./Home.css";
import React, { useEffect } from "react";
import SlideTop from "../../Components/SlideTop/SlideTop";
import SlideMulti from "../../Components/SlideMulti/SlideMulti";
import Intro from "../../Components/Intro/Intro";
import Parallax from "../../Components/Parallax/Parallax";
import Detail from "../../Components/Detail/Detail";
import ContactForm from "../../Components/ContactForm/ContactForm";
import request from "../../request";
import PopupHome from "../../Components/PopupHome";

function Home() {
  const [homePage, setHomePage] = React.useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        let res = await request.get("/nails_db_home/db");
        setHomePage(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <div className="Home">
      <PopupHome />
  
      <SlideTop />

      <div className="w-full py-10 bg-gray flex justify-center">
        <div className="px-[15px] max-w-[1000px] ">
          {homePage.intro && <Intro intro={homePage.intro} />}
        </div>
      </div>

      {homePage.paralax && <Parallax para={homePage?.paralax[0]} index={1} />}

      <div className="services-show">
        <div className="container screen mga px-[15px]">
          {homePage.menuSlide && <SlideMulti data={homePage?.menuSlide} />}
        </div>
      </div>

      {homePage.paralax && <Parallax para={homePage?.paralax[1]} index={2} />}

      <div className="qualites py-10">
        <div className="container screen grid small:flex mga px-[15px]">
          {homePage.info &&
            homePage.info.map((ele, index) => (
              <Detail data={ele} key={index} />
            ))}
        </div>
      </div>

      {homePage.paralax && <Parallax para={homePage?.paralax[2]} index={3} />}

      <div className="contact py-10">
        <h2 className="title-text text-center text-3xl mb-[30px]">
          Contact us
        </h2>
        <div className="screen grid small:flex mga">
          <div className="w-full small:w-6/12 px-[15px]">
            <p className="title-text mb-5 text-[17px]">Hot tips nails</p>
            <table className="none-border content-text">
              <tr>
                <td className="title">Address:</td>
                <td className="flex w-auto m-0">
                  5516 Calgary Trail Northwest, Edmonton, Alberta, T6H 4K1
                </td>
              </tr>
              <tr>
                <td className="title content-text">Phone:</td>
                <td className="flex w-auto m-0">
                  <a href="call-to:780-758-1056">780-758-1056</a>
                </td>
              </tr>
              <tr>
                <td className="title content-text">Email:</td>
                <td className="flex w-auto m-0">
                  <a href="mailto:hottipsnails@gmail.com">
                    hottipsnails@gmail.com
                  </a>
                </td>
              </tr>
            </table>
            <ContactForm />
          </div>
          <div
            className="google-maps w-full small:w-6/12 px-[15px]"
            id="google-map"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.6513020142675!2d-113.49978448471202!3d53.49255997145111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01f4cda2bfb03%3A0x692bf79cf132c8eb!2sHot%20Tips%20Nails%20%26%20Spa!5e0!3m2!1sen!2s!4v1635410282186!5m2!1sen!2s"
              width="100%"
              height="450"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              title="map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
