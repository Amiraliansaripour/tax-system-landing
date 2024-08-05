import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants"

const PopularProducts = () => {
  return (
    <section  className="max-container max-sm:mt-12 overflow-hidden">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-3xl font-bold text-white">خدمات <span className="text-coral-red">سامانه </span> صورتحساب الکترونیک</h2>
        <p className="lg:max-w-lg font-bold mt-2 text-gray-300 text-sm">سامانه ارسال صورتحساب الکترونیک
        مدیریت صورتحساب‌ها به‌صورت ساده و کارآمد</p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {
          products.map(product => (
            <PopularProductCard key={product.name} {...product} />
          ))
        }
      </div>
    </section>
  )
}

export default PopularProducts;