"use client"
import React, { useState } from 'react'
import Button from "./Button";
import Image from 'next/image';
import { SlArrowDown } from "react-icons/sl";
import Link from 'next/link';


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <div className='p-4 mobile:px-[32px] mobile:py-[16px] flex justify-between items-center bg-[#043873] text-white h-[92px] capitalize font-sans larger:px-[220px]'>
      <div className='flex justify-between items-center lowercase text-[28px] h-[34px] w-[191px]'>
        <Image src="/Group.png" alt='_Logo' width={37} height={29}></Image>
        <h1 className='text-[28px] font-[700]'>whitespace</h1>
      </div>
      <div className='flex justify-between items-center gap-[60px]'>
      <div className='hidden large:flex gap-[32px] items-baseline justify-center text-[18px] font-[500]'>
        <p className='flex items-center gap-[20px] relative group'><Link href="/">products <span className="absolute left-0 bottom-0 block h-[2px] w-full bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out" /></Link> <SlArrowDown  className='scale-75' /> </p>
        <p className='flex items-center gap-[20px] relative group'><Link href="/">solutions <span className="absolute left-0 bottom-0 block h-[2px] w-full bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out" /></Link> <SlArrowDown className='scale-75' /></p>
        <p className='flex items-center gap-[20px] relative group'><Link href="/">resources <span className="absolute left-0 bottom-0 block h-[2px] w-full bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out" /></Link> <SlArrowDown className='scale-75' /> </p>
        <p className='flex items-center gap-[20px] relative group'><Link href="/">pricing <span className="absolute left-0 bottom-0 block h-[2px] w-full bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out" /></Link> <SlArrowDown className='scale-75' /> </p>
        </div>
        <div className='flex justify-between items-center gap-[24px] '>
        <Button text='login' bgColor='#ffe492' textColor='#043873' padding='16px 40px' display='md:flex'/>
        <Button text='try whitespace free ➜'  bgColor='#4f9cf9' textColor='#ffffff' padding='16px 24px' display='md:flex'/>
        <button onClick={toggleMenu} className='rotate-90 scale-[250%] px-5 large:hidden'>|||</button>
        </div>
      </div>
      </div>

      <div className=''>
    <div
    className={`${
      isOpen ? 'max-h-full opacity-100 translate-y-[0px]' : 'max-h-0 opacity-0 translate-y-[-100px]'
    } overflow-hidden duration-300 ease-in-out text-white large:hidden bg-black/50  backdrop-blur-xl absolute rounded-lg z-[9999] md:right-[32px] w-full md:w-[20%] flex flex-col justify-center items-center`}
  >
     <div className='p-[24px] gap-6 flex flex-col items-baseline justify-center text-[18px] font-[500] '>
    <p className='flex items-center gap-[20px]'><Link href="/">products</Link> <SlArrowDown className='scale-75' /> </p>
    <p className='flex items-center gap-[20px]'><Link href="/">solutions</Link> <SlArrowDown className='scale-75' /></p>
    <p className='flex items-center gap-[20px]'><Link href="/">resources</Link> <SlArrowDown className='scale-75' /> </p>
    <p className='flex items-center gap-[20px]'><Link href="/">pricing</Link> <SlArrowDown className='scale-75' /> </p>
    </div>
  </div>
  </div>
  </div>
  )
}

export default Header
