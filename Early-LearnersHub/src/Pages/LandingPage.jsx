import React, { useState } from 'react';
import Logo from '../assets/Images/logo.png';
import Img1 from '../assets/Images/books.png';
import Img2 from '../assets/Images/cute-girl.png';
import Img3 from '../assets/Images/imges.png';
import Img4 from '../assets/Images/idea.png';
import Img5 from '../assets/Images/bulls-eye.png';
import Img6 from '../assets/Images/hand.png';

const LandingPage = () => {
    const [showModal, setModal] = useState(true);
    return (
        <div className="px-5 font-poppins h-auto pb-6">
            <div className='bg-[#6EDBD0] w-full h-[5vh]'></div>
            <img src={Logo} alt="logo" className='mx-auto w-[20vh]' />
            <div className='bg-hero-pattern w-full h-[30vh] bg-no-repeat bg-cover flex flex-col md:flex-row gap-9 px-8'>
                <div className='w-full md:w-[50%] h-[100%] md:pl-[26vh] pt-[7vh]'>
                    <h1 className='text-[#165851] text-[2rem] md:text-[1.5rem] lg:text-[2rem] font-bold'>
                        Interactive Learning Made Fun <br /> for Kindergarten Kids!
                    </h1>
                    <button className='bg-[#FFF492] p-2 text-[1.3rem] font-bold rounded-3xl ml-[12vh] mt-[3vh]'>
                        Get Started
                    </button>
                </div>
                <div className='w-full md:w-[40%] h-[100%] flex items-center justify-center'>
                    <img src={Img1} alt="girl" />
                </div>
            </div>
            <div className='bg-hero-group w-full h-auto bg-cover flex flex-col gap-4'>
                <div className='w-full h-auto mt-[3rem] flex flex-col gap-5'>
                    <div className='w-full h-auto flex flex-col md:flex-row gap-8 md:gap-32 items-center'>
                        <img src={Img2} alt="picture" className='mx-auto md:ml-[20vw]' />
                        <h1 className='text-[#165851] w-full md:w-[26vw] text-[1.5rem] md:text-[1rem] lg:text-[1.5rem] font-bold'>
                            Explore. Learn. Grow. Educational Games and Activities for Young Minds.
                        </h1>
                    </div>
                    <h1 className='text-[#0C4D46] mx-auto font-bold text-[2.5rem] text-center'>
                        Key Features
                    </h1>
                </div>
                <div className='w-full h-auto mt-[3rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] md:gap-[20vh] px-[2rem] md:px-[20vh]'>
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className={`bg-[#${['FDB2B2', '3398D0', '6EDBD0', '94F097', 'B59BD7', 'FFF492'][index]}] h-[45vh] flex flex-col items-center gap-8 pt-[3rem] px-7 rounded-lg flip-animation`}>
                            <img src={Img3} alt="pic" />
                            <h1 className='font-bold text-[1.2rem]'>Interactive Games</h1>
                            <p className='text-center'>
                                Selection of fun and educational games that help children learn basic skills while having fun.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='bg-hero-tsk bg-no-repeat bg-cover w-full h-[40vh] mt-[13vh] pt-[6vh]'>
                <h1 className='text-center text-[2.5rem] font-bold text-[#165851]'>
                    PILLARS OF STRENGTH <br /> Mission, Vision, and Values
                </h1>
                <div className='h-[30%] w-[70%] mx-auto mt-[3vh]'>
                    <div className='w-[70%] h-[50vh] mb-5vh mx-auto flex justify-center'>
                        <div className='w-[15%] h-[50vh] mt-[5vh] bg-[#FFF492] rounded-[20%] border-[3px] border-white mr-[55vh] absolute'>
                            <img src={Img4} alt="pic" className='ml-[8vh] mt-[4vh]'/>
                            <h1 className='ml-[9vh] font-bold text-[1.2rem] mt-[3vh]'>Our Vision</h1>
                            <p className='w-[10vw] text-center text-[1.1rem] mt-[2vh] ml-[5vh]'>To inspire a love of learning in <br /> kindergarten kids through fun,<br /> interactive, and educational <br /> activities.</p>
                        </div>
                        <div className='w-[15%] h-[50vh] mb-[5vh] bg-[#94F097] rounded-[20%] border-[3px] border-white z-10 absolute'>
                        <img src={Img5} alt="pic" className='ml-[8vh] mt-[4vh]'/>
                            <h1 className='ml-[9vh] font-bold text-[1.2rem] mt-[3vh]'>Our Mission</h1>
                            <p className='w-[10vw] text-center text-[1.1rem] mt-[2vh] ml-[5vh]'>To create a safe, engaging, and <br /> enjoyable learning 
                            platform that supports early childhood education, providing interactive content that helps kids learn and grow.</p>
                        </div>
                        <div className='w-[15%] h-[50vh] mt-[5vh] bg-[#EABBBB] rounded-[20%] border-[3px] border-white ml-[55vh] absolute'>
                        <img src={Img6} alt="pic" className='ml-[8vh] mt-[4vh]'/>
                            <h1 className='ml-[9vh] font-bold text-[1.2rem] mt-[2vh]'>Our Values</h1>
                            <p className='w-[10vw] text-center text-[1.1rem] mt-[1vh] ml-[5vh]'>Our values prioritize fun, basic skills, creativity, especially the safety, and inclusion, collaborating with teachers, parents, and experts to create a secure, kid-friendly platform.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[40vh]'></div>
            {showModal && (
                <div className="fixed w-[100%] h-[100%] inset-0 bg-black bg-opacity-50 flex items-center justify-center overflow-hidden z-20">
                    <div className='bg-[#FFEAB4] w-[20%] h-[40vh] rounded-3xl'>
                        <div className='bg-white w-[50%] h-[10vh] flex items-center justify-center mx-auto mt-[-5vh] border-[5px] border-[#7AAFEB] rounded-3xl'>
                            <h1 className='text-[1.5rem] font-bold'>Who's Here?</h1>
                        </div>
                        <button className='float-right p-1 border-[2px] mr-9 w-[4vh] hover:shadow-slate-250 hover:shadow-lg font-bold border-black rounded-md'>X</button>
                        <div className='mx-auto w-[60%] h-[60%] mt-[5vh] flex flex-col gap-9'>
                            <button className='w-full bg-[#F5F5F5] h-[6vh] rounded-xl shadow-2xl text-[1.5rem]'>Student</button>
                            <button className='w-full bg-[#F5F5F5] h-[6vh] rounded-xl shadow-2xl text-[1.5rem]'>Parent</button>
                            <button className='w-full bg-[#F5F5F5] h-[6vh] rounded-xl shadow-2xl text-[1.5rem]'>Teacher</button>
                        </div>
                    </div>
                </div>
            )}
        </div>  
    );
}

export default LandingPage;
