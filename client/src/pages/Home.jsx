import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSellers from '../components/BestSellers'
import BottonBaneer from '../components/BottonBaneer'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div className='mt-10'>
      <MainBanner />
      <Categories />
      <BestSellers />
      <BottonBaneer />
      <NewsLetter />
    </div>
  )
}

export default Home
