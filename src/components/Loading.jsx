import React from 'react'

const Loading = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-[100vh] bg-black fixed top-0 left-0 z-50 gap-4 transition-all ease-out'>
      <h2 className='text-white text-xl'>سامانه ارسال <span className='text-coral-red text-2xl font-semibold'>صورتحساب</span> الکترونیک </h2>

      <div className="spinner"></div>
    </div>
  )
}

export default Loading
