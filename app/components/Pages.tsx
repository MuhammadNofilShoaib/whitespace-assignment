import React from 'react'
import Button from "./Button"
import Image from 'next/image';

interface PageProps {
  heading: string;
  para: string;
  image?: string;
  bgColor?: string;
  headingColor: string;
  paraColor: string
  flexDirection?: string;
  imageColor:  string;
  buttonText: string;
}

function Pages( {heading, para, image, bgColor, headingColor, paraColor, flexDirection, imageColor, buttonText}: PageProps ) {
  return (
    <div className={`bg-[url('/Element.png')] bg-cover bg-center flex flex-col justify-between gap-[100px] md:gap-[60px] items-center px-[16px] py-[80px] mobile:px-[32px] mobile:py-[70px] md:py-[140px] larger:px-[220px] ${flexDirection === 'reverse' ? 'tablet:flex-row-reverse' : 'tablet:flex-row'}  text-center md:text-left overflow-hidden `}  style={{ backgroundColor: bgColor }} >
      <div className="md:w-[656px] md:h-[361px] mobile:w-[551px] w-[288px] mobile:h-[367px] h-[362px] flex flex-col gap-[40px] md:gap-[47px] justify-center items-center md:justify-normal md:items-start">
        <h1 className={`text-[36px] mobile:text-[54px] md:text-[64px] font-[700] text-${headingColor} leading-[43.57px] mobile:leading-[63.35px] md:leading-[77.45px] `}>{heading}</h1>
        <p className={`text-[18px] font-[400] leading-[30px] text-${paraColor}`}>{para}</p>
        <Button text={`${buttonText} ➜`}  bgColor='#4f9cf9' textColor='#ffffff' padding='16px 24px' display='smallest:flex'/>

      </div>
      <div className={`text-white w-[286px] h-[191px] mobile:w-[551px] mobile:h-[376px] large:w-[685px] large:h-[456.39px] larger:w-[824px] larger:h-[549px] flex justify-center items-center`}  style={{ backgroundColor: imageColor }} >
        <Image src={`/${image}`} alt='_image_container' width={824} height={549}></Image>
      </div>
    </div>
  )
}

export default Pages
