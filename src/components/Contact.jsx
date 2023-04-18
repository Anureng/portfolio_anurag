import React from 'react'
import { SocialIcon } from 'react-social-icons';
function Contact() {
  return (
    <div className="  bg-gray-200 flex items-center justify-center">
        <div className='   w-10/12 space-y-6 bg-gray-200  flex flex-col justify-center items-center '>
            <div className='text-2xl font-bold border-b border-black mt-2'>Contact </div>
            <div className='flex justify-center items-center'> If you have any questions or if you would like to discuss a potential project, please feel free to get in touch with me. <br /> Thank you for visiting my website!</div>
            <div className=''> <SocialIcon className='mb-2' url='mailto:anuragsidhu72@gmail.com'/></div>
        </div>
    </div>
  )
}

export default Contact