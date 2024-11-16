import React from 'react'
import Button from './Button'
import { FaApple } from "react-icons/fa6";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { BsAndroid2 } from "react-icons/bs";
import Image from 'next/image';
import { CiGlobe } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import { FaRegCopyright } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


function Footer() {
  return (
    <div className='overflow-hidden'>
    <div className='capitalize text-white bg-[#043873] flex justify-center items-center pt-[140px] pb-[32px] px-4 mobile:px-8 larger:px-[220px]'>
      <div className="text-center flex flex-col justify-center items-center gap-[40px]  w-[608px] ">
        <h1 className='text-[40px] mobile:text-[72px] font-[700] leading-[52px] mobile:leading-[87.14px] text-left md:text-center'>Try Whitepace today</h1>
        <p className="text-[18px] mobile:text-[24px] font-[400] leading-[32px] text-left md:text-center">Get started for free. <br />Add your whole team as your needs grow.</p>
        <Button text='Try Taskey free ➜' bgColor='#4f9cf9' textColor='#ffffff' padding='16px 24px' display='smallest:flex' />
        <p className='text-[18px] mobile:text-[24px] font-[400] leading-[32px] text-left customMd:text-center'>On a big team? Contact sales</p>
        <div className="flex justify-center items-center gap-[40px] ">
          <FaApple className='w-[48.94px] h-[60px]' />
          <TfiMicrosoftAlt className='w-[60px] h-[58.56px]' />
          <BsAndroid2 className='w-[50.77px] h-[60px]' />
        </div>
      </div>
</div>

      <div className="text-center flex flex-col customMd:flex-row justify-between items-start gap-[100px] pt-[140px] pb-[32px] px-4 mobile:px-8 larger:px-[220px] text-white bg-[#043873] ">

        <div className="flex flex-col gap-[15px] justify-start items-center mobile:items-start text-center mobile:text-left w-full">
        <div className='flex justify-between items-center lowercase text-[28px] h-[34px] w-[191px]'>
        <Image src="/Group.png" alt='_Logo' width={37} height={29}></Image>
        <h1 className='text-[28px] font-[700]'>whitespace</h1>
      </div>
      <p className='font-[400] text-[18px] leading-[30px] lowercase tracking-[-2%]'>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
        </div>

        <div className="flex flex-col gap-[15px] mobile:justify-start mobile:items-start mobile:text-left w-full text-[18px] capitalize">
          <h1 className='font-[700]'>product</h1>
          <p className='font-[400] text-[#FFE492]'>overview</p>
          <p className='font-[400]'>pricing</p>
          <p className='font-[400]'>customer stories</p>
        </div>

        <div className="flex flex-col gap-[15px] mobile:justify-start mobile:items-start mobile:text-left w-full text-[18px] capitalize">
          <h1 className='font-[700]'>resources</h1>
          <p className='font-[400]'>blog</p>
          <p className='font-[400]'>guides and tutorials</p>
          <p className='font-[400]'>help center</p>
        </div>

        <div className="flex flex-col gap-[15px] mobile:justify-start mobile:items-start mobile:text-left w-full text-[18px] capitalize">
          <h1 className='font-[700]'>company</h1>
          <p className='font-[400]'>about us</p>
          <p className='font-[400]'>careers</p>
          <p className='font-[400]'>media kits</p>
        </div>

        <div className="flex flex-col gap-[15px] mobile:justify-start mobile:items-start mobile:text-left w-full capitalize">
          <h1 className='font-[700] text-[26px]'>try it today</h1>
          <p className='font-[400] text-[16px] leading-[20px]'>Get started for free.
          Add your <br /> whole team as your needs grow.</p>
        <Button text='Start today ➜' bgColor='#4f9cf9' textColor='#ffffff' padding='16px 24px' display='smallest:flex' />     
        </div>

      </div>

      <div className=" customMd:flex justify-between items-center text-white capitalize bg-[#043873] px-4 mobile:px-8 larger:px-[220px] pt-[100px] pb-[32px]">
        <div className='flex flex-col justify-center items-center gap-[20px] mobile:flex-row  mobile:gap-[50px] customMd:gap-[60px] border-t border-[#2E4E73] pt-8'>
          <p className="flex justify-center items-center gap-1 text-[16px] font-[400]"><CiGlobe className='w-[19px] h-[19px]' /> english <GoChevronDown/></p>
          <p className="font-[400]">terms & privacy</p> 
          <p className=" font-[400]">security</p>
          <p className=" font-[400]">status</p>
          <p className="flex justify-center items-center gap-1 font-[400]"><FaRegCopyright /> 2021 whitepace LLC.</p>
        </div>
        <div className='flex justify-center items-center gap-8 border-none customMd:border-t customMd:border-[#2E4E73] pt-8'>
          <div className=""><FaFacebookF /></div>
          <div className=""><FaTwitter /></div>
          <div className=""><FaLinkedinIn /></div>
        </div>
      </div>

    </div>
  )
}

export default Footer
