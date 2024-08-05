import React,{useState,useEffect} from 'react'
import Nav from '../components/Nav'
import Hero from './Hero'
import PopularProducts from './PopularProducts'
import SuperQuality from './SuperQuality'
import Services from './Services'
import SpecialOffer from './SpecialOffer'
import Subscribe from './Subscribe'
import Footer from './Footer'
import HeroSlider from '../components/HeroSlider'
import Loading from '../components/Loading'
import Catalog from './Catalog'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
    
  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  
  return (
    <main className="relative">
      {
        isLoading ? <Loading /> : <></>
      }
      
    <Nav />
    <section className="py-9 overflow-hidden">
      {/* <Hero /> */}
    <HeroSlider />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="bg-[#0e0d0db2] padding">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    {/* <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section> */}
    <section className='p-5 flex flex-col items-center h-auto'>
      <div className='flex flex-col items-center justify-center gap-4 p-5'>
        <h2 className='text-4xl mb-4 text-white font-bold'><span className='text-coral-red'>کاتالوگ</span> نرم افزار</h2>
        <p className='text-gray-400'>میتوانید در این قسمت با ورق زدن کاتالوک خدمات نرم افزار را مطالعه کنید</p>
      </div>
      <Catalog />
    </section>
    <section className="padding-x bg-black  sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
  )
}

export default Home
