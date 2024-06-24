// eslint-disable-next-line no-unused-vars
import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

   const navigate = useNavigate()
  return (
    <>
     <div className='w-full flex justify-between items-center font-sembold'>
     <div className='flex items-center gap-2'>
        <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left}></img>
        <img onClick={()=>navigate(+1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right}></img>

     </div>
        <div className='flex items-center gap-4'>
            <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor:pointer'>Explore premium</p>
            <p className='bg-black text-white py-1 px-3 rounded-2xl text-[15px] cursor-pointer' >Install apps</p>
            <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>D</p>
        </div>
     </div> 

     <div className='flex items-center gap-2 mt-4'>
        <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
        <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
        <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Podcast</p>
     </div>
    </>
  )
}

export default Navbar