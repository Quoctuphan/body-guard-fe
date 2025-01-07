import { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowRightDownLine } from "react-icons/ri";
import { SERVICE_PATH } from "../../../../contants/routers";

export default function Services() {
  const [activeCard, setActiveCard] = useState([]);
  const dataServices = {
    cards: [
      {
        key: 1,
        title: "Personal security",
        subTitle:
          "Ensuring individual safety through advanced protection solutions, effective monitoring, and professional security services. ",
        image: {
          alt: "image personal security",
          src: "./images/Personalsecurity.JPEG",
        },
      },
      {
        key: 2,
        title: "Corporate security",
        subTitle:
          "Safeguarding Your Business Assets with Professional Solutions",
        image: {
          alt: "image corporate security",
          src: "./images/CorporateSecurity.JPEG",
        },
      },
      {
        key: 3,
        title: "Event Security",
        subTitle: "Ensuring Safety and Peace of Mind for Every Occasion",
        image: {
          alt: "image event security",
          src: "./images/EventSecurity.JPEG",
        },
      },
    ],
  };

  const handleOnClick = (index) => {
    setActiveCard((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };
  return (
    <section
      id="services"
      className="max-w-[1440px] space-y-[40px] lg:space-y-[80px] mx-auto"
    >
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-[3rem]">
        <div className="space-y-6 lg:space-y-12 text-center lg:text-left animate-fade-right animate-once animate-duration-700 animate-ease-linear animate-fill-forwards">
          <h2 className="text-[1.8rem] font-normal text-[#e1234e]">
            Our Services
          </h2>
          <h1 className="text-[2.5rem] font-medium lg:text-[3rem] lg:max-w-[400px] mx-auto lg:mx-0">
            Our Comprehensive Security Services
          </h1>
        </div>
        <div className="flex lg:justify-end lg:items-end animate-fade-left animate-once animate-duration-700 animate-ease-linear animate-fill-forwards">
          <Link
            to={SERVICE_PATH}
            className="w-full text-center lg:min-w-[181px] h-[4rem] lg:w-[30%] bg-red-500 px-6 py-4 rounded-2xl hover:bg-transparent border border-transparent hover:text-red-600 hover:border hover:border-red-600 text-[1.5rem] text-white"
          >
            See All Services
          </Link>
        </div>
      </div>
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] animate-fade-up animate-once animate-duration-700 animate-ease-linear animate-fill-forwards">
        {dataServices?.cards.map((item, index) => {
          const isActive = activeCard[index] || false;
          console.log("activeCard", isActive);
          return (
            <div
              key={index + 1}
              className="max-w-[364px] w-full h-[504px] flex flex-col mx-auto hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 ease-linear"
            >
              <div className="basis-2/5 min-h-[212px] bg-black text-white p-[44px] space-y-6">
                <h3 className="text-[2.2rem]">{item?.title}</h3>
                <p className="text-[1.2rem] font-light text-slate-200 text-justify leading-10">
                  {item?.subTitle}
                </p>
              </div>
              <div className="relative flex justify-center items-center basis-3/5 bg-stone-800 overflow-hidden">
                <p
                  className={`${
                    isActive ? "hidden" : "block"
                  } text-[#ffac41]  text-[2rem] hover:scale-110 transition-all duration-500 ease-linear font-semibold  animate-fade-left animate-once animate-duration-700 animate-ease-linear animate-fill-forwards`}
                  onClick={() => handleOnClick(index)}
                >
                  Click here
                </p>
                <div
                  className={` ${
                    isActive ? "h-full" : "h-0"
                  } transition-all duration-500 ease-linear absolute top-0 right-0 w-full  flex justify-center items-center group hover:bg-neutral-700/70`}
                >
                  <div className="absolute top-0 left-0 w-full h-full object-cover">
                    <img
                      src={item?.image?.src}
                      alt={item?.image?.alt}
                      className="w-full h-full"
                    />
                  </div>
                  <div
                    className={` ${
                      isActive
                        ? "bottom-0 right-0"
                        : "bottom-0 right-0 translate-y-[100%]"
                    } transition-transform duration-500 ease-linear absolute flex justify-center items-center text-white size-[64px]  p-1 bg-red-600 hover:bg-red-900`}
                    onClick={() => handleOnClick(index)}
                  >
                    <RiArrowRightDownLine
                      className={`text-[2.4rem] ${
                        isActive ? "-rotate-90" : "rotate-0"
                      } transition-all duration-700 ease-linear`}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
