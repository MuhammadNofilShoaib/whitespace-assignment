import React from 'react'

interface ButtonProps {
    bgColor?: string;
    textColor?: string;
    text: string;
    padding?: string;
    width?: string;
    height?: string;
    display?: string;
}

function Button( { bgColor, textColor, padding, text, width, height, display} : ButtonProps ) {
  return (
        <button className={`justify-center items-start py-4 px-6 text-lg bg-[#4F9CF9] rounded-lg font-medium hover:opacity-90 transition duration-200 capitalize hidden ${display}`} style={{ backgroundColor: bgColor, color: textColor, padding: padding, width: width, height: height }}>
            {text}
        </button>  
  )
}

export default Button
