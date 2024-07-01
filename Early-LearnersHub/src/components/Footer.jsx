import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[30vh] bg-[#6EDBD0] flex px-[10vh] gap-[3rem]'>
      <div className='w-[40%] flex flex-col items-center pt-[5vh] gap-2'>
        <h1 className='text-[#0C4D46] text-[1.5rem] font-bold'>Our Contents</h1>
        <p className='cursor-pointer'>Arts/Doodles</p>
        <p className='cursor-pointer'>Videos</p>
        <p className='cursor-pointer'>Games</p>
        <p className='cursor-pointer'>A-Z Tracing</p>
        <p className='cursor-pointer'>Kwentong Pambata</p>
      </div>
      <div className='w-[40%] flex flex-col items-center pt-[5vh] gap-2'>
        <h1 className='text-[#0C4D46] text-[1.5rem] font-bold'>About E-Learners Hub</h1>
        <p className='cursor-pointer'>Meet the Team</p>
        <p className='cursor-pointer'>Term of Use</p>
      </div>
      <div className='w-[40%]'>
        <div className='w-full h-[85%] flex flex-col items-center pt-[5vh] gap-2'>
        <h1 className='text-[#0C4D46] text-[1.5rem] font-bold'>Help</h1>
            <p className='cursor-pointer'>Login</p>
            <p className='cursor-pointer'>FAQ's</p>
        </div>
        <p className='float-right'>Copyright©2024 EarlyLearnersHub. All Rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
