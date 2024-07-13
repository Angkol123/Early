import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const Footer = () => {
  return (
    <div className='w-full h-auto bg-[#6EDBD0] flex flex-col lg:flex-row px-[10vh] gap-[3rem]'>
      <div className='w-full lg:w-[40%] flex flex-col items-center pt-[5vh] gap-2'>
        <h1 className='text-[#0C4D46] text-[1.2rem] sm:text-[1.5rem] font-bold'>Our Contents</h1>
        <Link to='/arts' className='cursor-pointer text-sm sm:text-base'>Arts/Doodles</Link>
        <Link to='/videos' className='cursor-pointer text-sm sm:text-base'>Videos</Link>
        <Link to='/games' className='cursor-pointer text-sm sm:text-base'>Games</Link>
        <Link to='/a-z-tracing' className='cursor-pointer text-sm sm:text-base'>A-Z Tracing</Link>
        <Link to='/kwentong-pambata' className='cursor-pointer text-sm sm:text-base'>Kwentong Pambata</Link>
      </div>
      <div className='w-full lg:w-[40%] flex flex-col items-center pt-[5vh] gap-2'>
        <h1 className='text-[#0C4D46] text-[1.2rem] sm:text-[1.5rem] font-bold'>About E-Learners Hub</h1>
        <Link to='/team' className='cursor-pointer text-sm sm:text-base'>Meet the Team</Link>
        <Link to='/terms' className='cursor-pointer text-sm sm:text-base'>Term of Use</Link>
      </div>
      <div className='w-full lg:w-[40%]'>
        <div className='w-full h-[85%] flex flex-col items-center pt-[5vh] gap-2'>
          <h1 className='text-[#0C4D46] text-[1.2rem] sm:text-[1.5rem] font-bold'>Help</h1>
          <Link to='/login' className='cursor-pointer text-sm sm:text-base'>Login</Link>
          <Link to='/faqs' className='cursor-pointer text-sm sm:text-base'>FAQ's</Link>
        </div>
        <p className='text-right text-sm sm:text-base'>Copyright©2024 EarlyLearnersHub. All Rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
