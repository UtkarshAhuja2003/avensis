import React from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import DropUsALine from '../../components/Home/DropUsALine'
import SpeakersAndWorkshops  from '../../components/Home/Speakers'
import Hero from '../../components/Home/Hero'
import Head from '../../components/Home/Head'
import MainEvents from '../../components/Home/MainEvents'
import Video from '../../components/Home/Video'

const Home = () => {
  return (
    <div className='bg-[#171221]'>
        <Navbar/>
        <Head/>
        <Hero/>
        <MainEvents/>
        <Video/>
        <SpeakersAndWorkshops/>
        <DropUsALine/>
        <Footer/>
    </div>
  )
}

export default Home