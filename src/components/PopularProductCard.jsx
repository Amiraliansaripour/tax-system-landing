import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
    return (
        <div 
        data-aos="fade-up"
        className="flex flex-1 flex-col justify-center items-center w-full max-sm:w-full bg-box shadow-3xl rounded-xl p-5">
            <div className="flex items-center justify-center text-center rounded-full bg-coral-red p-3">
            {imgURL}
            </div>
            <div className="mt-8 flex justify-start gap-2.5">
                {/* <img src={star} alt="rating" width={24} height={24} /> */}
                {/* <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p> */}
            </div>
            <h3 className="mt-3 text-2xl text-center leading-normal font-bold text-white">{name}</h3>
            <p className="mt-3 text-center text-lg text-gray-400">{price}</p>

        </div>
    )
}

export default PopularProductCard;