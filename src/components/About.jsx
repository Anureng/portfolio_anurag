import React from 'react'

function About() {
  return (
    <div className='h-screen'>
      <div className='border space-y-8 border-black flex flex-col lg:flex-row justify-center items-center'>
        <div>About Page</div>
        
          <img src="/about.jpg"   className="  shadow-2xl w-96" alt="About" />
        
        <div>
          <div className='border border-black flex  flex-col justify-center items-center space-y-10'>
<div className='space-x-4  flex justify-center items-center '>
  <div className=' rounded-xl bg-gray-200 px-1 py-2 shadow-xl'>
    <div>Experienced</div>
    <div>6 Months</div>
  </div>
  <div className=' rounded-xl bg-gray-200 px-1 py-2 shadow-xl'>
  <div>projects</div>
    <div>10+ Projects</div>
  </div>
</div>
<div className='border border-black lg:w-3/5 p-4 '> I have expertise in both <em className='font-bold text-lg'> front-end and back-end development</em>, including popular frameworks like <em className='text-lg font-bold'> React.js, and Next.js </em>. My skills in back-end development include database management, server-side scripting, and API integration with <em className=' text-lg font-bold'> mongodb and Node.js</em>.  I also have experience in designing and developing blockchain-based applications using platforms such as <em className='text-lg font-bold'> Ethereum and polygon</em>.I can build <em className='text-lg font-bold'> DEX , DAO and DEFI based projects </em>. Feel free to explore my portfolio and get in touch with me if you have any questions or potential projects.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About