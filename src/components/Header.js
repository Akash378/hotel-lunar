import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex justify-around xl:h-20 items-center xsm:h-12'>
    <Link to="/"><h1 className='xl:font-extrabold text-blue-500 xsm:font-bold  xsm:text-[14px]'>Hotel Lunar</h1></Link>
    <div>
      <ul className='flex xl:gap-5 xl:text-medium xl:font-[700] xl:text-[12px] xl:leading-[14.06px] xsm:font-[400] xsm:text-[8px] xms:leading-[8px] xsm:gap-1' >
        <Link to="/"><li>Home</li></Link>
        <li>Room & Suites</li>
        <li>Facilities</li>
        <Link to="/contactus">
        <li>Contact</li></Link>
        <li>Offers</li>
        <li>Events</li>
      </ul>
      </div> 

      
    </div>
  )
}

export default Header
