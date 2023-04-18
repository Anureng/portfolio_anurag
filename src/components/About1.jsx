import React from 'react'
import Image from 'next/image'
function About1() {
  return (
   <div className=' mt-12 lg:mt-0 flex flex-col justify-center items-center h-full p-20 sm:p-0 lg:h-3/5 '>
    <div className='mb-3 text-xl border-b border-black font-bold'>
    About
    </div>
    <div className='  flex lg:flex-row flex-col justify-center items-center lg:space-x-20 space-y-4'>
        <div>
            <Image height={350} width={350} src="/about.jpg" className="  shadow-2xl w-96" alt="" />
        </div>
            <div className='  bg-gray-200 rounded-xl space-y-4 p-4 w-screen lg:w-2/5 flex flex-col justify-center items-center'>
        <div className=' w-fit flex space-x-4'>
<div className='rounded-xl bg-white px-1 py-2 shadow-2xl w-fit'> 
    10 Months <br /> Of Experience
</div>
<div className='rounded-xl bg-white px-1 w-fit py-2 shadow-2xl'>
    10+<br/> Projects
</div>
            </div>
            <div>
            I have expertise in both <em className='font-bold text-lg'> front-end and back-end development</em>, including popular frameworks like <em className='text-lg font-bold'> React.js, and Next.js </em>. My skills in back-end development include database management, server-side scripting, and API integration with <em className=' text-lg font-bold'> mongodb and Node.js</em>.  I also have experience in designing and developing blockchain-based applications using platforms such as <em className='text-lg font-bold'> Ethereum and polygon</em>.I can build <em className='text-lg font-bold'> DEX , DAO and DEFI based projects </em>. Feel free to explore my portfolio and get in touch with me if you have any questions or potential projects.
            </div>
            <a href="mailto:anuragsidhu72@gmail.com" target='_blank'>
            <div className='bg-white px-1 py-2 rounded-xl'>Contact Me</div>
            </a>

        </div>
    </div>
   </div>
  )
}

export default About1