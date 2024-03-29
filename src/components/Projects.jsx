import React from 'react'
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image'
function Projects() {
  return (
    <div className='p-2 flex flex-col  space-x-10 justify-center items-center '>
         <div className='border-b border-black font-semibold text-xl mb-3'>
        Projects
        </div>
        <div className='flex flex-wrap  justify-center items-center  w-fit gap-20 p-2'>
        <div
  className=" p-4 w-96 block  rounded-lg bg-gray-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
    <Image
      className="rounded-t-lg "
      src="/insta.png"
      height={350}
      width={350}
      alt="Nothing" />

  <div className="p-6">
    <h5
      className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      Insta 3.0
    </h5>
    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      In this project user can create the account and can create the post . Other user can view all post 
    <br />
Tech stack :- <em className='font-bold'>
Next js + Tailwind Css + Solidity + Wagmi + RainbowKit
</em>
    </p>
    <div className='flex items-center'>
    <a href="https://first-ochre-seven.vercel.app/" target='_blank'>
    <button
      type="button"
      className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
      Live Link
    </button>
        </a>
        <div className='ml-2  '>
        < SocialIcon url='https://github.com/Anureng/insta3.0'/>
        </div>
        </div>
  </div>
</div>

{/* 
2nd prject */}
    <div
  className=" p-4 w-96 block rounded-lg bg-gray-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  
    <Image
      className="rounded-t-lg "
      src="/chatDapp.png"
      height={350}
      width={350}
      alt="Nothing" />

  <div className="p-6">
    <h5
      className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      Chat Dapp
    </h5>
<p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">

This project name is chatDapp . It&apos;s my one of the best and hard project till now .
With this web application user can add their account , add their friend and user can do chat with their friend .
User need a metamask and some Goerli Ether to interact with this chatDapp .
Everything is store on blockchain and you can see on the etherscan. <br />
Tech stack :- <em className='font-bold'>
Next js + Tailwind Css + Solidity + Web3.js + Hardhat
</em>
    </p>
    <div className='space-x-2'>
    <a href="https://chatdapp-lilac.vercel.app/">
    <button
      type="button"
      className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      data-te-ripple-init>
      Live Link
    </button>

        </a>
  < SocialIcon  url='https://github.com/Anureng/chat3.0'/>
        </div>
  </div>
</div>

{/* 3rd projects */}
<div
  className="p-4 w-96 block rounded-lg bg-gray-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  
    <Image
      className="rounded-t-lg "
      src="/food.png"
      height={350}
      width={350}
      alt="Nothing" />

  <div className="p-6">
    <h5
      className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      Add Workout
    </h5>
    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      In this project admin can add the food  , user can review the food based on category  
    <br />
    Tech stack :- <em className='font-bold'>
Next js + Tailwind Css + Mongo Db + Node.js + TypeScript + Next Auth
</em>
    </p>
    <div className='space-x-2'>
    <a href="https://food-delivey.vercel.app/">
    <button
      type="button"
      className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      data-te-ripple-init>
      Live Link
    </button>
        </a>
        < SocialIcon url='https://github.com/Anureng/food-delivey'/>
        </div>
  </div>
</div>

{/* 4 projects */}

<div
  className="bg-gray-200 p-4 w-96 block rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  
    <Image
      className="rounded-t-lg "
      src="/anurag.png"
      height={350}
      width={350}
      alt="Nothing" />

  <div className="p-6">
    <h5
      className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      MERN BASED PROJECT
    </h5>
    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
    This project will login the account and signup . Redirect the pages with cookie.
    Tech stack :- <em className='font-bold'>
Next js + Tailwind Css + Mongo Db + Node.js
</em>
    </p>
    <div className='space-x-2'>
<a href="https://monumental-salmiakki-5c6b2c.netlify.app/">
    <button
      type="button"
      className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      data-te-ripple-init>
      Live Link
    </button>
        </a>
        < SocialIcon url='https://github.com/Anureng/mern_last_tut'/>
        </div>
  </div>
</div>
    </div>
          </div>
  )
}

export default Projects