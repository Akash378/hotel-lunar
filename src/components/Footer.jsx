import React from 'react'

function Footer() {
  return (
    <div className='flex flex-row justify-around items-center bg-[#3E3C3C] h-[250px] xl:w-full xsm:flex-col xsm:justify-center xsm:mt-11 xsm:py-[2rem] xsm:h-full'>
     <div className='flex flex-col gap-12 h-[70%] w-[350px] xsm:w-full xsm:gap-5 xsm:mb-8 xsm:justify-center xsm:pl-[4rem]'>
     <div className='w-full xsm:w-[70%] '>
       <p className='w-full font-bold text-[28px] leading-[32.13px] text-[#ffff] xsm:text-[22px] xsm:w-[80%]'>Hotel Lunar</p>
        <p className='w-full font-[400] text-[10px] leading-[11.72px] text-[#ffff]'> will give you the comfort you deserve</p>
      </div>
      <div className='w-full'>
        <ul className='w-full font-[700] text-[12px] leading-[14.06px] xsm:text-[10px] text-[#ffff]'>
            <li className='mb-6'>Address : Road 12, Peace Avenue,Ado,Ekiti</li>
            <li className='mb-6'>Phone number : +2349061504648</li>
            <li className='mb-6'>Email: oluwadamilolafaj@gmail.com</li>
        </ul>
      </div>
     </div>
      <div className=' xsm:flex xsm:gap-10'>
      <div className='h-[60%]'>
        <ul className='w-full font-[700] text-[12px] leading-[14.06px] text-[#ffff] xsm:text-[10px]'>
            <li className='mb-6'>ABOUT US</li>
            <li className='mb-6'>CONTACT US</li>
            <li className='mb-6'>ROOMS & RATES</li>
            <li className='mb-6'>FACILITIES</li>
        </ul>
      </div>
      <div className='h-[60%]'>
        <ul className='w-full font-[700] text-[12px] leading-[14.06px] text-[#ffff] xsm:text-[10px]'>
            <li className='mb-6'>FACEBOOK</li>
            <li className='mb-6'>INSTAGRAM</li>
            <li className='mb-6'>TWITTER</li>
            <li className='mb-6'>SNAP CHAT</li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Footer
