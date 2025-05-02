import React from 'react'
import BrandLogo from '../images/brand_logo.png';
import { FaSliders } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-between items-center px-10 py-3 font-poppins'>
        <img src={BrandLogo} alt="logo" className='w-[76px] h-[42.75px]'/>

        <ul className='flex gap-x-7 max-700:hidden'>
            <li className='text-[#2E2E2E] uppercase font-semibold hover:text-[#000000] hover:transition-all duration-200 ease-in-out  cursor-pointer'>menu</li>
            <li className='text-[#2E2E2E] uppercase font-semibold hover:text-[#000000] hover:transition-all duration-200 ease-in-out  cursor-pointer'>location</li>
            <li className='text-[#2E2E2E] uppercase font-semibold hover:text-[#000000] hover:transition-all duration-200 ease-in-out  cursor-pointer'>about</li>
            <li className='text-[#2E2E2E] uppercase font-semibold hover:text-[#000000] hover:transition-all duration-200 ease-in-out  cursor-pointer'>contact</li>
        </ul>

        <button className='bg-[#D01C28] text-[#ffffff] border-none outline-none py-1 px-4 hover:bg-[#ad2d36] max-700:hidden'>Login</button>
        <FaSliders className='hidden max-700:flex'/>
    </nav>
  )
}

export default Navbar
