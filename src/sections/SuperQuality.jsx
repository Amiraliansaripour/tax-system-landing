import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl capitalize font-bold lg:max-w-lg text-white">
        <span className="text-coral-red">سامانه</span>  <span className="">ارسال صورتحساب</span> 
        </h2>

        <p className="mt-4 lg:max-w-lg info-text text-gray-400">سامانه ارسال صورتحساب الکترونیک با هدف تسهیل فرآیندهای مالی و افزایش دقت در مدیریت و ثبت و ارسال صحیح صورتحساب‌ها، طراحی و توسعه یافته است و با طراحی کاربرپسند خود، باعث کاهش خطاهای انسانی و پیچیدگی و زمان بر بودن فرآیند ارسال صورتحساب شده است. </p>

        <div className="mt-11">
          <a className="flex justify-center items-center px-7 py-4 font-bold hover:bg-transparent border-2 border-coral-red hover:text-coral-red bg-coral-red rounded-lg" href="https://panel.moadii.ir/">نمایش جزئیات</a>
        </div>
      </div>

      <div 
      data-aos="fade-up"
      className="flex-1 flex justify-center items-center overflow-hidden rounded-xl">
        <img src={shoe8} alt="shoe8"  className="w-full h-full object-contain" />
      </div>
    </section>
  )
}

export default SuperQuality;