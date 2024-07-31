import React from 'react'
import Nav from '../components/Nav'
import Hero from './Hero'
import PopularProducts from './PopularProducts'
import SuperQuality from './SuperQuality'
import Services from './Services'
import SpecialOffer from './SpecialOffer'
import Subscribe from './Subscribe'
import Footer from './Footer'
import HeroSlider from '../components/HeroSlider'

const Home = () => {
  return (
    <main className="relative">
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
    <section className="bg-pale-blue dark:bg-[#0e0d0db2] padding">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    {/* <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section> */}
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
  )
}

export default Home
