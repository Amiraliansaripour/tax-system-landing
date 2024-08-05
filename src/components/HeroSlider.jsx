import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation,Controller } from "swiper/modules";
import "swiper/css";
import { Slide1, Slide2 } from "./../assets/images/index";

const HeroSlider = () => {
  return (
    <div
      className="w-full h-[70vh] overflow-hidden
     mt-20"
    >
      <Swiper 
     loop={true}
     autoplay={{
       delay: 3500,  
       disableOnInteraction: false, // Ensure autoplay continues after user interaction
     }}
      draggable={true}
      modules={[Autoplay]}
      className="mySwiper">
        <SwiperSlide className="w-full h-[70vh]">
          <div
            style={{ backgroundImage: `url(${Slide1})` }}
            className="w-full h-full  flex items-center justify-start p-10"
          >
            <div className="w-full h-full absolute top-0 left-0 bg-[#00000059]"></div>
            <div className="flex flex-col items-start gap-6 text-white z-10">
              <h2 className="text-4xl max-md:text-3xl  font-bold text-right">سامانه ارسال <span className="text-coral-red">صورتحساب</span> <br />الکترونیک پرشین سیستم</h2>
              <p className="text-lg">سامانه ای است که نیازهای شما را در زمینه مدیریت و ثبت صورتحساب‌ها پوشش می‌دهد.<br /> با استفاده از این سامانه، می‌توانید به راحتی صورتحساب‌های خود را ثبت و اصلاح و مدیریت کنید.
              </p>
              <a href="https://panel.moadii.ir/login" target="_blank" className="bg-coral-red px-4 py-3 rounded-lg text-lg text-black border-2 border-coral-red transition-all ease-in hover:bg-transparent hover:text-coral-red">نمایش دمو</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-[70vh]">
        <div
            style={{ backgroundImage: `url(${Slide2})` }}
            className="w-full h-full  flex items-center justify-start p-10"
          >
            <div className="w-full h-full absolute top-0 left-0 bg-[#00000059]"></div>
            <div className="flex flex-col items-start gap-6 text-white z-10">
              <h2 className="text-4xl max-md:text-3xl  font-bold text-right">مدیریت شناسه  <br /> <span className="text-coral-red">کالا و خدمات</span></h2>
              <p className="text-lg">پلتفرمی تخصصی برای مدیریت و ثبت اطلاعات مالی  <br />و صورتحسابها به مودیان به‌صورت آنلاین و دقیق.</p>
              <a href="https://panel.moadii.ir/login" target="_blank" className="bg-coral-red px-4 py-3 rounded-lg text-lg  text-black border-2 border-coral-red transition-all ease-in hover:bg-transparent hover:text-coral-red">نمایش دمو</a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
