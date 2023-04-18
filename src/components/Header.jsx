import React from 'react'
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image'
function Header() {
  return (
    <div className='h-screen  flex  items-center flex-col space-y-5 lg:space-y-0 mt-10 lg:mt-0'>
      <div className=' flex flex-col lg:flex-row p-10 lg:p-36  justify-center items-center space-y-8 lg:space-x-20  '>
        <div className='bg-gray-200 rounded-xl flex justify-center items-baseline  flex-col space-y-6 p-4 lg:w-3/6'>
      <div className='font-bold text-xl'>
        My self Anurag Sidhu
      </div>
      <div>While I may not have a lot of experience yet, I have been working hard to develop my skills.  I have completed <em className='font-bold text-lg'> Full Stack Web Development </em> and <em className='font-bold text-lg'> BlockChain Development </em>.  I am also continuously learning and exploring new techniques to improve my abilities.</div>
      <div className='space-x-4'>
        <a href="mailto:anuragsidhu72@gmail.com" target='_blank'>
        <button className='bg-white rounded-xl px-1 py-2'>
          Hired Me
        </button>
        </a>
        <button className='bg-white rounded-xl px-1 py-2'>About</button>
      </div>
</div>
        <div>
        <Image
          src="/user.JPG"
          width={350}
          height={350}
           className="w-52 rounded-full shadow-2xl"
           alt="Avatar" />
  </div>
  </div>
  <div className=' space-x-5 '>
    <SocialIcon  url='https://twitter.com/anurag_sidhu8'/>
    <SocialIcon url='https://www.linkedin.com/in/anurag-sidhu-4b518521b/'/>
    <SocialIcon url='https://github.com/Anureng'/>
    <SocialIcon url='mailto:anuragsidhu72@gmail.com'/>


  </div>
    </div>
  )
}

export default Header