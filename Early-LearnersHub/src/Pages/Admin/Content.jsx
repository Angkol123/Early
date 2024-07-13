import React, { useState } from 'react';
import NavbarAdmin from '../../components/NavbarAdmin';

const Content = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className='w-full h-screen'>
      <NavbarAdmin />
      <div className='flex gap-8 items-center justify-center mt-9'>
        <button
          className='bg-yellow-300 h-[4vh] px-8 rounded-md hover:bg-transparent hover:border-[2px] hover:border-yellow-300'
          onClick={() => handleButtonClick('Video')}
        >
          Video
        </button>
        <button
          className='bg-yellow-300 h-[4vh] px-8 rounded-md hover:bg-transparent hover:border-[2px] hover:border-yellow-300'
          onClick={() => handleButtonClick('Arts')}
        >
          Arts
        </button>
        <button
          className='bg-yellow-300 h-[4vh] px-8 rounded-md hover:bg-transparent hover:border-[2px] hover:border-yellow-300'
          onClick={() => handleButtonClick('Games')}
        >
          Games
        </button>
      </div>

      <div className={`w-full h-[75vh] mt-[3vh] px-16 ${activeSection === 'Video' ? '' : 'hidden'}`} id='Video'>
        <div className='w-full h-auto flex gap-3'>
          <div className='bg-slate-300 w-[25%] h-[70vh] rounded-tl-xl rounded-bl-xl py-9 px-5 flex flex-col gap-6'>
            <h1 className='font-bold bg-blue-600 text-center text-[2rem] rounded-xl py-2'>Category</h1>
            <h2 className='font-bold bg-blue-600 text-center text-[1.5rem] rounded-xl py-2'>Kuwentong Pambata</h2>
            <h2 className='font-bold bg-blue-600 text-center text-[1.5rem] rounded-xl py-2'>Basic Math</h2>
            <h2 className='font-bold bg-blue-600 text-center text-[1.5rem] rounded-xl py-2'>Reading</h2>
          </div>
          <div className='bg-slate-300 w-[75%] h-[70vh] grid grid-cols-4 gap-3 px-5 overflow-y-auto py-3 custom-scrollbar'>
            <div className='bg-red-600 w-full h-[30vh] rounded-md'></div>
            <div className='bg-red-600 w-full h-[30vh] rounded-md'></div>
            <div className='bg-red-600 w-full h-[30vh] rounded-md'></div>
            <div className='bg-red-600 w-full h-[30vh] rounded-md'></div>
            <div className='bg-red-600 w-full h-[30vh] rounded-md'></div>
            <div className='bg-red-600 w-full h-[30vh] rounded-md'></div>
            <div className='bg-red-600 w-full h-[30vh] rounded-md'></div>
            <div className='bg-red-600 w-full h-[30vh] rounded-md'></div>
            <div className='bg-red-600 w-full h-[30vh] rounded-md'></div>
          </div>
        </div>
      </div>

      <div className={`w-full h-[75vh] mt-[3vh] px-16 ${activeSection === 'Arts' ? '' : 'hidden'}`} id='Arts'>
        <div className='w-full h-auto flex flex-col'>
          <h1 className='mx-auto font-bold text-[2rem]'>Arts</h1>
          <div className='grid grid-cols-5 gap-4 w-full h-[65vh] items-center pl-7 overflow-y-auto pt-5 pb-3'>
            <div className='bg-slate-500 w-[90%] h-[30vh] rounded-lg'></div>
            <div className='bg-slate-500 w-[90%] h-[30vh] rounded-lg'></div>
            <div className='bg-slate-500 w-[90%] h-[30vh] rounded-lg'></div>
            <div className='bg-slate-500 w-[90%] h-[30vh] rounded-lg'></div>
            <div className='bg-slate-500 w-[90%] h-[30vh] rounded-lg'></div>
            <div className='bg-slate-500 w-[90%] h-[30vh] rounded-lg'></div>
            <div className='bg-slate-500 w-[90%] h-[30vh] rounded-lg'></div>
            <div className='bg-slate-500 w-[90%] h-[30vh] rounded-lg'></div>
            <div className='bg-slate-500 w-[90%] h-[30vh] rounded-lg'></div>
            <div className='bg-slate-500 w-[90%] h-[30vh] rounded-lg'></div>
            <div className='bg-slate-500 w-[90%] h-[30vh] rounded-lg'></div>
          </div>
        </div>
      </div>

      <div className={`w-full h-[75vh] mt-[3vh] px-16 ${activeSection === 'Games' ? '' : 'hidden'}`} id='Games'>
        {/* Add your Games section here */}
      </div>
    </div>
  );
}

export default Content;
