import React from 'react'
import Header from './Header'
import Footer from './Footer'
import imgContact from '../assets/images/bgc.png'
import phone from '../assets/images/phone.png'
import maile from '../assets/images/mail.png'
import location from '../assets/images/location.png'

function Contact() {
  return (
    <>
    <Header/>
    <div className='h-[600px] mb-7 flex items-center justify-center bg-center 'style={{backgroundImage:`url(${imgContact})`}}>
       <div className='w-full h-full flex justify-center items-center inset-0 bg-gradient-to-t  from-black/70 to-black/50 '>
       <h1 className='font-[700] text-[36px] leading-[42.19px] text-[#FFFF] '>CONTACT US</h1>
       </div>

    </div>
    <div className='flex flex-col justify-center items-center'>
        <div className='w-[28%] mb-8 flex justify-center items-center flex-col gap-8'>
            <h1 className='font-[700] text-[18] leading-[21.09px] text-[#4F4F4F] mb-4 '>We’ll love to hear your feedback. Kindly send us a mail</h1>
            <input type="text" className='w-full border border-[#9B51E0] text-[#4F4F4F]' placeholder='Your Name'/>
            <input type="text" className='w-full border border-[#9B51E0] text-[#4F4F4F]' placeholder='Your Email'/>
            <textarea name="" id="" className='w-full h-40 border border-[#9B51E0] text-[#4F4F4F]  '  placeholder='Type Your Message'></textarea>
            <button className= 'w-full mt-4 bg-[#9B51E0] text-[#ffff]'>Send Message</button>
        </div>
        <div className='w-full flex justify-evenly my-8'>
           <div className='flex gap-1 items-center'>
            <img className='w-[26px] h-[28px]' src={phone} alt="" />
            <p className='font-[700] text-[12px] leading-[14.06px]'>+2349061504648</p>
           </div>
           <div className='flex gap-1 items-center'>
            <img className='w-[26px] h-[28px]' src={maile} alt="" />
            <p className='font-[700] text-[12px] leading-[14.06px]'>oluwadamilolafaj@gmail.com</p>
           </div>
           <div className='flex gap-1 items-center'>
            <img className='w-[26px] h-[28px]' src={location} alt="" />
            <p className='font-[700] text-[12px] leading-[14.06px]'>Road 12, Peace Avenue,Ado,Ekiti</p>
           </div>
        </div>
    </div>
      <Footer/>
    </>
  )
}

export default Contact
