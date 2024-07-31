import React from "react";
import { useNavigate } from "react-router-dom";

const ModalBox = ({isModal,setIsModal}) => {
  const navigate = useNavigate()
  return (
    <div
     className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-[#e6e2e23a] backdrop-blur-sm z-10">
      <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none z-[15]">
        <h3 className="py-4 text-2xl text-center text-gray-800">
          تکمیل فرم خرید
        </h3>
        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
          <div className="mb-4 md:flex md:justify-between">
            <div className="mb-4 md:mr-2 md:mb-0">
              <label
                className="block mb-2 text-sm font-bold text-gray-700 "
                for="firstName"
              >
                نام
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="نام"
              />
            </div>
            <div className="md:ml-2">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                for="lastName"
              >
                نام خانوادگی
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="نام خانوادگی"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold  text-gray-700 "
              for="email"
            >
              ایمیل
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4 md:flex md:justify-between">
            <div className="mb-4 md:mr-2 md:mb-0">
              <label
                className="block mb-2 text-sm font-bold text-gray-700 "
                for="password"
              >
                رمزعبور
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700  border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              
            </div>
            <div className="md:ml-2">
              <label
                className="block mb-2 text-sm font-bold text-gray-700 "
                for="c_password"
              >
                تکرار پسورد
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="c_password"
                type="password"
                placeholder="******************"
              />
            </div>
          </div>
          <div className="mb-6 text-center">
            <button
            onClick={()=> navigate("/login")}
              className="w-full px-4 py-2 font-bold text-white bg-coral-red rounded-full   focus:outline-none focus:shadow-outline"
              type="button"
            >
              ورود به حساب کاربری 
            </button>
          
            <button
            onClick={()=> setIsModal(false)}
              className="w-full px-4 py-2 font-bold text-coral-red bg-white border-2 border-coral-red rounded-full focus:outline-none focus:shadow-outline mt-2"
              type="button"
            >
              بستن
            </button>
          </div>
          <hr className="mb-6 border-t" />

       
        </form>
      </div>
    </div>
  );
};

export default ModalBox;
