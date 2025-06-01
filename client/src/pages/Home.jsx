import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSellers from '../components/BestSellers'
import BottonBaneer from '../components/BottonBaneer'

const Home = () => {
  return (
    <div className='mt-10'>
      <MainBanner />
      <Categories />
      <BestSellers />
      <BottonBaneer />
    </div>
  )
}

export default Home
