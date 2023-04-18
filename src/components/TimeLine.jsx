import React from 'react'

function TimeLine() {
  return (
    <div className='flex justify-center items-center flex-col space-y-10 h-screen lg:w-5/5 '>
      <div className='border-b border-black text-xl font-semibold
      '>
        Education
      </div>
      <div className='p-4'>
        <ol className="border-l border-gray-900 dark:border-gray-900">
  <li>
    <div className="flex-start flex items-center pt-3">
      <div
        className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
      <p className="text-sm text-neutral-500 dark:text-neutral-300">
        30-05-2018
      </p>
    </div>
    <div className="mb-6 ml-4 mt-2">
      <h4 className="mb-1.5 text-xl font-semibold">Swami shanti prakash english high school</h4>
      <p className="mb-3 text-neutral-500 dark:text-neutral-300">
        I completed my 10th  in 2018 with 72%
      </p>
    </div>
  </li>
  <li>
    <div className="flex-start flex items-center pt-2">
      <div
        className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
      <p className="text-sm text-neutral-500 dark:text-neutral-300">
        25-04-2020
      </p>
    </div>
    <div className="mb-6 ml-4 mt-2">
      <h4 className="mb-1.5 text-xl font-semibold">Petoxford junior college</h4>
      <p className="mb-3 text-neutral-500 dark:text-neutral-300">
        I completed my 12th(Science)  in 2020 with 48%
      </p>
    </div>
  </li>
  <li>
    <div className="flex-start flex items-center pt-2">
      <div
        className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
      <p className="text-sm text-neutral-500 dark:text-neutral-300">
        1-6-2020
      </p>
    </div>
    <div className="ml-4 mt-2 pb-5">
      <h4 className="mb-1.5 text-xl font-semibold">S.S.T college of arts and commerce</h4>
      <p className="mb-3 text-neutral-500 dark:text-neutral-300">
      I am pursuing BSc IT in college  and currently i am in 3rd year
      </p>
    </div>
  </li>
  <li>    <div className="flex-start flex items-center pt-2">
      <div
        className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
      <p className="text-sm text-neutral-500 dark:text-neutral-300">
        1-6-2023
      </p>
    </div>
    <div className="ml-4 mt-2 pb-5">
      <h4 className="mb-1.5 text-xl font-semibold">Pending</h4>
    
    </div></li>
</ol>
        </div>
    </div>
  )
}

export default TimeLine