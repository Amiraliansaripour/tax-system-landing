import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full relative flex xl:flex-row flex-col justify-center min-h-screen gap-5 max-container overflow-hidden"
    >
      {/* <svg
        className="absolute top-0 max-md:top-[-3%]  left-[-63.5%] rotate-90"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#FF6452"
          fill-opacity="1"
          d="M0,32L48,58.7C96,85,192,139,288,144C384,149,480,107,576,112C672,117,768,171,864,197.3C960,224,1056,224,1152,218.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg> */}

      
      <div className="relative xl:w-2/5 flex flex-col justify-center items-center w-full max-xl:padding-x pt-28 ">
        <p className="text-xl text-coral-red">پرشین سیستم  </p>
        <h1 className="mt-10 text-center text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold mb-4">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            سامانه
          </span>
          <span className="text-coral-red inline-block mt-3">مودیان</span>
        </h1>
        <br />
        {/* <Button className="mt-24" label="درخواست دمو" /> */}
        <a href="https://panel.moadii.ir/login" className="flex justify-center items-center gap-2 px-7 py-4 border font-bold text-base leading-none shadow-3xl hover:shadow-red-300 transition-all text-white bg-coral-red border-coral-red rounded-[4px]">درخواست دمو</a>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-4  bg-cover bg-center">
        <div className="img-box flex items-center gap-2 p-2">
          <div className="rounded-2x flex flex-col gap-3 items-center justify-between w-3/12 overflow-hidden h-full">
            <img
              src={bigShoe1}
              style={{ borderRadius: "15px" }}
              alt=""
              className="rounded-lg "
            />
            <img
              src={bigShoe1}
              style={{ borderRadius: "15px" }}
              alt=""
              className="rounded-lg"
            />
          </div>
          <div className="rounded-2xl flex flex-col w-9/12 h-full overflow-hidden">
            <img
              src={bigShoe1}
              style={{ borderRadius: "15px" }}
              alt=""
              className="rounded-lg"
            />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
