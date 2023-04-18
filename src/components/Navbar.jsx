import React,{useState} from 'react'
import { GiHamburgerMenu } from 'react-icons/gi' ;
import { FaHamburger } from 'react-icons/fa' ;

function Navbar() {
  let Links =[
    {name:"HOME",link:"/"},
    {name:"ABOUT",link:"/"},
    {name:"EDUCATION",link:"/"},
    {name:"PROJECTS",link:"/"},
    {name:"CONTACT",link:"/"},
  ];
  let [open,setOpen]=useState(false);
  return (
  
      // <div>
    //     <div className=' bg-gray-200 flex justify-between  p-4'>
    //     <div>
    //         Anurag
    //     </div>
    //     <div >
    //         <ul className='flex space-x-5 mr-2'>
    //             <li>Home</li>
    //             <li>About</li>
    //             <li>Education</li>
    //             <li>Projects</li>
    //             <li>Contact </li>
    //         </ul>
    //     </div>
    //     </div>
    // </div>
 
    <div className='shadow-md w-full fixed top-0 left-0 bg-gray-200'>
      <div className='bg-gray-200 md:flex items-center justify-between  py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
  
        </span>
        Anurag
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <GiHamburgerMenu name={open ? 'close':'menu'}/>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-200 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-18 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-lg font-semibold md:my-0 my-7 bg-gray-200'>
              <a href={link.link} className='text-gray-800 hover:text-gray-900 bg-gray-200 duration-500'>{link.name}</a>
            </li>
          ))
        }
        
      </ul>
      </div>
    </div>

  )
}

export default Navbar
              {/* // <!-- Main navigation container --> */}