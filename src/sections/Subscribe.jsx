import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-bold text-white">عضویت در <span className="text-coral-red">خبرنامه</span></h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2 sm:border sm:border-slate-gray rounded">
        <input type="text" placeholder="demo@example.com" className="input bg-transparent" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="عضویت" fullWidth />
        </div>
      </div>
    </section>
  )
}

export default Subscribe;