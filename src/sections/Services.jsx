import { useState } from "react";
import ModalBox from "../components/ModalBox";
import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {

  const [isModal , setIsModal] =useState(false)
  return (
    // <section className="max-container flex justify-center flex-wrap gap-9">
    //   {
    //     services.map((service) => (
    //       <ServiceCard key={service.label} {...service} />
    //     ))
    //   }
    // </section>
    <>
    {
      isModal ? <ModalBox isModal={isModal} setIsModal={setIsModal} /> : <></>
    }
    
    <section id="products" className="overflow-hidden">
      <div className="py-8 px-4 mx-auto max-w-screen-xl ">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-coral-red ">
         خرید اشتراک نرم افزار  
          </h2>
          <p className="mb-5 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
            تعرفه و پلن های نرم افزار سامانه ارسال صورتحساب الکترونیک   
              
          </p>
        </div>

        <div className="w-full flex justify-between ">
          <div className="des flex flex-col dark:text-white gap-2">
            <h2 className="text-xl font-bold">برپایه <span className="text-coral-red">صورتحساب</span> :</h2>
            <p>در این پلن، کاربران می‌توانند با انتخاب تعداد صورتحساب‌های مورد نظر،<br /> سامانه را در اختیار داشته و به همان تعداد صورتحساب خود را استفاده کنند.</p>
          </div>
          <div className="img-box">.fgfgf</div>
        </div>

        <div className="w-full flex justify-between  mt-5">
          <div className="des flex flex-col dark:text-white gap-2">
            <h2 className="text-xl font-bold">برپایه <span className="text-coral-red">زمانبندی</span> :</h2>
            <p>در این پلن، کاربران می‌توانند با انتخاب تعداد ماه، اشتراک خود را خریداری کرده<br /> و در بازه زمانی انتخاب شده، صورتحساب‌های خود را ارسال کنند.</p>
          </div>
          <div className="img-box">.fgfgf</div>
        </div>
        
      </div>
    </section>
    </>
  );
};

export default Services;
