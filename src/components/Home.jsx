import React from 'react'
import Header from './Header'
import Footer from './Footer'
import bgimg from '../assets/images/bg.png'
import aboutimg from '../assets/images/about.png'

function Home() {
  return (
    <>
    <div className='flex flex-col'>
    <Header/>
    <div className='xl:h-[600px] flex justify-center items-center xsm:w-full xsm:h-[400px]'
      style={{backgroundImage:`url(${bgimg})`}}>
        <div className='flex flex-col gap-8 justify-center items-center  xsm:gap-4'>
          <h1 className='font-[700] text-[36px] leading-[42.19px] text-[#ffff] xsm:text-xl'>A Memorable Experience.</h1>
          <button className='w-[87px] h-[21px] font-[700] text-[12px] leading-[14.06px] bg-[#9B51E0] text-[#ffff] xsm:text-[10px] xsm:w-[70px]'>Reserve Now</button>
        </div>

    </div>
    <div className='flex justify-around items-center gap-5 h-[400px] xsm:justify-center xsm:flex-col xsm:mt-10'>
      <div className='flex flex-col justify-start w-[28%] gap-5 xsm:w-[98%] xsm:mt-7'>
        <h1 className='font-[900] text-[18px] leading-[21.09px]'>About <span className='text-[#9B51E0]'>Hotel Lunar</span></h1>
        <p className='font-[500] text-[12px] leading-[14.06px] xsm:text-[10px]'>Ladies and gentlemen, history keeps repeating itself but doesn't teach us any lessons. 'Never again' has turned into 'again and again and again.' So today, ladies and gentlemen, take Hotel Lunar as a wake-up call and a message to be our messenger that people are the ones who can change what they want to change.
        </p>
        <p className='font-[500] text-[12px] leading-[14.06px] xsm:text-[10px]'>Ladies and gentlemen, history keeps repeating itself but doesn't teach us any lessons. 'Never again' has turned into 'again and again and again.' So today, ladies and gentlemen, take Hotel Lunar as a wake-up call and a message to be our messenger that people are the ones who can change what they want to change.
        </p>
        <button className='text-[#ffff] bg-[#9B51E0] w-[87px] h-[21px] font-[700] text-[12px] leading-[14.06px] xsm:font-[550] xsm:text-[10px]'>Read More</button>
      </div>
      <div className='w-[323px] h-[276px] xsm:w-[100%] xsm:h-[200px]'>
        <img src={aboutimg} alt="" className='w-full h-full'/>
      </div>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default Home
