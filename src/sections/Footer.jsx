import { copyrightSign } from "../assets/icons";
import { Enamad, footerLogo, headerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={headerLogo} width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7  text-white-400 sm:max-w-sm">
            شرکت پرشین سیستم با هدف افزایش بهره وری و کمک به مدیریت دقیق تر و
            جامع تر شرکت های سهامی عام، فعالیت خود را در زمینه ی نرم افزارهای
            بورسی به صورت رسمی آغاز نمود
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          <>
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h4 className="text-white text-2xl leading-normal font-medium mb-6">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link, index) => (
                    <li
                      key={index}
                      className="mt-3 text-white text-base leading-normal hover:text-slate-gray cursor-pointer"
                    >
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="enamad">
              <a
                referrerPolicy="origin"
                target="_blank"
                href="https://trustseal.enamad.ir/?id=504541&Code=0nqm9N6pqSc8e46aNLQcAMYMQixg1DEc"
              >
                <img
                  referrerPolicy="origin"
                  src={Enamad}
                  alt=""
                  style={{ cursor: "pointer",width:"150px",height:"150px" }}
                  code="0nqm9N6pqSc8e46aNLQcAMYMQixg1DEc"
                />
              </a>
            </div>
          </>
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy right sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>تمامی حقوق سایت برای پرشین سیستم   محفوظ است</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
