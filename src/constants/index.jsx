import {
  facebook,
  instagram,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  // bigShoe2,
  // bigShoe3,
  // shoe4,
  // shoe5,
  // shoe6,
  // shoe7,
  // thumbnailShoe1,
  // thumbnailShoe2,
  // thumbnailShoe3,
} from "../assets/images";
import {
  FaMedal,
  FaSuperpowers,
  FaLaptop,
  FaCreditCard,
  FaBarcode,
  FaUsers,
  FaRegChartBar,
} from "react-icons/fa";

export const navLinks = [
  { href: "#home", label: "خانه" },
  { href: "#about-us", label: "درباره ما" },
  { href: "#products", label: "تعرفه ها" },
  { href: "#contact-us", label: "تماس با ما" },
];

export const shoes = [
  {
    // thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    // thumbnail: thumbnailShoe2,
    // bigShoe: bigShoe2,
  },
  {
    // thumbnail: thumbnailShoe3,
    // bigShoe: bigShoe3,
  },
];

export const statistics = [
  // { value: '1k+', label: 'کاربر فعال' },
  // { value: '500+', label: 'شرکت' },
];

export const products = [
  {
    imgURL: <FaCreditCard className="text-white text-2xl" />,
    name: "پیشخوان و میز کار",
    price:
      "مشاهده نمودارهای فروش دوره‌ای و وضعیت صورتحساب‌ها",
  },
  {
    imgURL: <FaBarcode className="text-white text-2xl" />,
    name: "دسترسی آسان و امن",
    price: " ورود با نام کاربری و رمز عبور دسترسی به تمامی امکانات سامانه",
  },
  {
    imgURL: <FaUsers className="text-white text-2xl" />,
    name: "ثبت و مدیریت مشتری",
    price: " ثبت و مدیریت جزئیاب اطلاعات مشتریان و گرفتن داشبورد",
  },
  {
    imgURL: <FaRegChartBar className="text-white text-2xl" />,
    name: "مدیریت شناسه کالا و خدمات",
    price: " استفاده از شناسه‌های عمومی یا خصوصی توسط خود کاربر (اختیاری)",
  },
];

export const services = [
  {
    id:1,
    imgURL: <FaMedal className="text-white text-2xl" />,
    label: "پلن یکساله",
    price:"7،000،000 تومان",
    subtext: "پلن یکساله",
    options:["پشتیبانی رایگان","امنیت پیشرفته و دو مرحله ای","مدیریت چند مودی در یک حساب","صورتحساب با اکسل","چاپ صورتحساب و فایل PDF","لیست شناسه کالا و خدمات"]
  },
  {
    id:2,
    imgURL: <FaMedal className="text-white text-2xl" />,
    label: "پلن اقتصادی",
    price:"رایگان",
    subtext: "پلن اقتصادی (به مدت یک هفته)",
    options:["پشتیبانی رایگان","امنیت پیشرفته و دو مرحله ای","مدیریت چند مودی در یک حساب","صورتحساب با اکسل","چاپ صورتحساب و فایل PDF","لیست شناسه کالا و خدمات"]
  },
  {
    id:3,
    imgURL: <FaMedal className="text-white text-2xl" />,
    label: "پلن ماهانه",
    price:"2،000،000 تومان",
    subtext: "پلن ماهیانه",
    options:["پشتیبانی رایگان","امنیت پیشرفته و دو مرحله ای","مدیریت چند مودی در یک حساب","صورتحساب با اکسل","چاپ صورتحساب و فایل PDF","لیست شناسه کالا و خدمات"]
  },
];



export const footerLinks = [
  {
    title: "خدمات پرشین سیستم  ",
    links: [
      { name: "نرم افزار حضور و غیاب", link: "https://persiansys.com/%d9%86%d8%b1%d9%85-%d8%a7%d9%81%d8%b2%d8%a7%d8%b1-%d8%ad%d8%b6%d9%88%d8%b1-%d9%88-%d8%ba%db%8c%d8%a7%d8%a8/" },
      { name: "نرم افزار ارسال مراسلات", link: "https://persiansys.com/%d9%86%d8%b1%d9%85-%d8%a7%d9%81%d8%b2%d8%a7%d8%b1-%d8%a7%d8%b1%d8%b3%d8%a7%d9%84-%d9%85%d8%b1%d8%a7%d8%b3%d9%84%d8%a7%d8%aa/" },
      { name: "نرم افزار مدیریت اسناد", link: "https://persiansys.com/%d9%86%d8%b1%d9%85-%d8%a7%d9%81%d8%b2%d8%a7%d8%b1-%d9%85%d8%af%db%8c%d8%b1%db%8c%d8%aa-%d8%a7%d9%84%da%a9%d8%aa%d8%b1%d9%88%d9%86%db%8c%da%a9-%d8%a7%d8%b3%d9%86%d8%a7%d8%af/" },
      { name: "نرم افزار افزایش سرمایه", link: "https://persiansys.com/%d9%86%d8%b1%d9%85-%d8%a7%d9%81%d8%b2%d8%a7%d8%b1-%d8%a7%d9%81%d8%b2%d8%a7%db%8c%d8%b4-%d8%b3%d8%b1%d9%85%d8%a7%db%8c%d9%87/" },   
      { name: "وب سایت پشتیبانی", link: "https://support.persiansys.com/support/" },
    ],
  },
  {
    title: "پل های ارتباطی",
    links: [
      { name: "آدرس: شهرک غرب بلوار دریا انتهای گلها پلاک 3 واحد 4", link: "mailto:info@persiansys.com" },
      { name: "info@persiansys.com", link: "mailto:info@persiansys.com" },
      { name: "۰۲۱-۹۱۰۰۸۶۶۴", link: "tel:+۰۲۱-۹۱۰۰۸۶۶۴" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
