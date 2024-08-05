import { useState } from "react";
import ModalBox from "../components/ModalBox";
import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";
import { AppScreen3 } from "../assets/images";
import { FaArrowLeft } from "react-icons/fa";

const Services = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    // <section className="max-container flex justify-center flex-wrap gap-9">
    //   {
    //     services.map((service) => (
    //       <ServiceCard key={service.label} {...service} />
    //     ))
    //   }
    // </section>
    <>
      {isModal ? <ModalBox isModal={isModal} setIsModal={setIsModal} /> : <></>}

      <section id="products" className="overflow-hidden">
        <div className="py-8 px-4 mx-auto max-w-screen-xl ">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-coral-red ">
              خرید اشتراک نرم افزار
            </h2>
            <p className="mb-5 font-light text-gray-400 sm:text-xl">
              تعرفه و پلن های نرم افزار سامانه ارسال صورتحساب الکترونیک
            </p>
          </div>

          <div className="w-full flex justify-between max-xl:flex-col gap-3">
            <div className="des flex flex-col text-white gap-2">
              <h2 className="text-xl font-bold">
                برپایه <span className="text-coral-red">صورتحساب</span> 
              </h2>
              <p>
                در این پلن، کاربران می‌توانند با انتخاب تعداد صورتحساب‌های مورد
                نظر،
                <br /> سامانه را در اختیار داشته و به همان تعداد صورتحساب خود را
                استفاده کنند.
              </p>
            </div>
            <div className="img-box">
              <img src={AppScreen3} alt="" className="w-[450px] max-xl:w-full h-[350px] max-xl:h-[500px] rounded-xl " />
            </div>
          </div>

          <div className="w-full flex justify-between  mt-5">
            <div className="des flex flex-col text-white gap-2">
              <h2 className="text-xl font-bold">
                برپایه <span className="text-coral-red">زمانبندی</span> 
              </h2>
              <p>
                در این پلن، کاربران می‌توانند با انتخاب تعداد ماه، اشتراک خود را
                خریداری کرده
                <br /> و در بازه زمانی انتخاب شده، صورتحساب‌های خود را ارسال
                کنند.
              </p>
            </div>
           
          </div>

          <div className="flex items-center justify-center pt-6 mt-6">
            <a 
            href="https://panel.moadii.ir/login"
            target="_blank"
            className="group flex items-center justify-center bg-coral-red text-black px-10 py-2.5 font-bold rounded-xl transition-all ease-in"
            >خرید اشتراک <FaArrowLeft className="mr-4 group-hover:mr-6 transition-all ease-in"/></a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
