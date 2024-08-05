import { useState } from "react";
import { Sscreen,AppScreen,AppScreen2, offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  const [openModal , setOpenModal] = useState(false)
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container overflow-hidden">
      <div data-aos="fade-right" className="flex-1">
        <div className="flex flex-col  max-sm:w-full max-sm:h-auto w-[663px] h-[538px] mt-3 rounded-xl overflow-hidden gap-2">
          <div className="flex w-full h-[50%] gap-2">
            <div className="overflow-hidden rounded-xl cursor-pointer">
              <img
                src={AppScreen}
                className="h-full object-fill hover:scale-105 transition-all ease-in"
              />
            </div>
            <div className="overflow-hidden rounded-xl cursor-pointer">
              <img
                src={AppScreen2}
                className="h-full object-fill hover:scale-105 transition-all ease-in"
              />
            </div>
          </div>
          <div className="w-full h-[50%] rounded-lg overflow-hidden cursor-pointer">
            <img src={Sscreen} className="hover:scale-105 transition-all ease-in" alt="" />
          </div>
        </div>
      </div>
      <div data-aos="fade-left" className="flex flex-1 flex-col">
        <h2 className="text-4xl capitalize font-bold lg:max-w-lg text-white">
          نیم نگاهی به <span className="text-coral-red">سامانه</span>
        </h2>

        <p className="mt-4 lg:max-w-lg info-text text-gray-400">
          سامانه ارسال صورتحساب الکترونیک پرشین سیستم   با ارائه یک پلتفرم یکپارچه و کارآمد،
          فرآیندهای مدیریت صورتحساب‌های شما را ساده‌تر و کارآمدتر می‌کند. با
          استفاده از این سامانه، می‌توانید
        </p>
        <p className="mt-6 lg:max-w-lg info-text text-gray-400">
          به صورت دقیق و سریع، تمامی صورتحساب‌های خود را مدیریت کنید و از خطاهای
          احتمالی جلوگیری کنید.
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <a
            href="https://panel.moadii.ir/"
            className="flex justify-center items-center gap-2 px-7 py-4 border font-bold text-base leading-none shadow-2xl text-black hover:shadow-coral-red transition-all bg-coral-red border-coral-red rounded-[4px]"
          >
             نمایش سامانه
          </a>

          {/* <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" borderRadius="rounded-[4px]" textColor="text-slate-gray" /> */}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
