// src/pages/LandingPage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Images/logo.png';
import Img1 from '../assets/Images/books.png';
import Img2 from '../assets/Images/cute-girl.png';
import Img3 from '../assets/Images/imges.png';
import Img4 from '../assets/Images/idea.png';
import Img5 from '../assets/Images/bulls-eye.png';
import Img6 from '../assets/Images/hand.png';
import Footer from '../components/Footer';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/auth');
  };

  return (
    <div className="font-poppins h-auto">
      <div className='bg-[#6EDBD0] w-full h-[5vh]'></div>
      <img src={Logo} alt="logo" className='mx-auto w-[20vh]' />
      <div className='bg-hero-pattern w-full h-[30vh] bg-no-repeat bg-cover flex flex-col md:flex-row gap-9 px-8'>
        <div className='w-full md:w-[50%] h-[100%] md:pl-[26vh] pt-[7vh]'>
          <h1 className='text-[#165851] text-[2rem] md:text-[1.5rem] lg:text-[2rem] font-bold'>
            Interactive Learning Made Fun <br /> for Kindergarten Kids!
          </h1>
          <button
            onClick={handleGetStartedClick}
            className='bg-[#FFF492] p-2 text-[1.3rem] font-bold rounded-3xl ml-[12vh] mt-[3vh]'
          >
            Get Started
          </button>
        </div>
        <div className='w-full md:w-[40%] h-[100%] flex items-center justify-center'>
          <img src={Img1} alt="girl" />
        </div>
      </div>
      {/* Rest of the content */}
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
          <div className={`bg-[#FDB2B2] h-[45vh] flex flex-col items-center gap-8 pt-[3rem] px-7 rounded-lg flip-animation`}>
            <img src={Img3} alt="pic" />
            <h1 className='font-bold text-[1.2rem]'>Interactive Games</h1>
            <p className='text-center'>
              Selection of fun and educational games that help children learn basic skills while having fun.
            </p>
          </div>
          <div className={`bg-[#3398D0] h-[45vh] flex flex-col items-center gap-8 pt-[3rem] px-7 rounded-lg flip-animation`}>
            <img src={Img3} alt="pic" />
            <h1 className='font-bold text-[1.2rem]'>Arts & Doodles</h1>
            <p className='text-center'>
              Creative activities that encourage self-expression and creativity through drawing and coloring.
            </p>
          </div>
          <div className={`bg-[#6EDBD0] h-[45vh] flex flex-col items-center gap-8 pt-[3rem] px-7 rounded-lg flip-animation`}>
            <img src={Img3} alt="pic" />
            <h1 className='font-bold text-[1.2rem]'>Educational Videos</h1>
            <p className='text-center'>
              Engaging videos that teach important concepts in a way that young children can understand.
            </p>
          </div>
          <div className={`bg-[#94F097] h-[45vh] flex flex-col items-center gap-8 pt-[3rem] px-7 rounded-lg flip-animation`}>
            <img src={Img3} alt="pic" />
            <h1 className='font-bold text-[1.2rem]'>Customizable Content</h1>
            <p className='text-center'>
              Teachers can upload their own educational videos and create customized learning experiences for their students.
            </p>
          </div>
          <div className={`bg-[#B59BD7] h-[45vh] flex flex-col items-center gap-8 pt-[3rem] px-7 rounded-lg flip-animation`}>
            <img src={Img3} alt="pic" />
            <h1 className='font-bold text-[1.2rem]'>Progress Tracking</h1>
            <p className='text-center'>
              Parents and teachers can monitor children's progress, allowing them to support their learning journey.
            </p>
          </div>
          <div className={`bg-[#FFF492] h-[45vh] flex flex-col items-center gap-8 pt-[3rem] px-7 rounded-lg flip-animation`}>
            <img src={Img3} alt="pic" />
            <h1 className='font-bold text-[1.2rem]'>Safe and Secure</h1>
            <p className='text-center'>
              The platform is designed with children's safety in mind, providing a secure environment with age-appropriate content.
            </p>
          </div>
        </div>
      </div>
      <div className='bg-hero-tsk bg-no-repeat bg-cover w-full h-auto lg:h-[40vh] mt-[13vh] pt-[6vh]'>
        <h1 className='text-center text-[2.5rem] font-bold text-[#165851]'>
          PILLARS OF STRENGTH <br /> Mission, Vision, and Values
        </h1>
        <div className='h-auto lg:h-[30%] w-[90%] md:w-[70%] mx-auto mt-[3vh]'>
          <div className='w-full h-auto lg:h-[50vh] mb-[5vh] mx-auto flex flex-col lg:flex-row justify-center items-center gap-4'>
            <div className='w-[90%] md:w-[30%] lg:w-[15%] h-auto lg:h-[50vh] mt-[5vh] bg-[#FFF492] rounded-[20%] border-[3px] border-white flex flex-col items-center p-4 relative'>
              <img src={Img4} alt="pic" className='w-[50%] lg:w-auto mt-[4vh]' />
              <h1 className='font-bold text-[1.2rem] mt-[3vh]'>Our Vision</h1>
              <p className='text-center text-[1.1rem] mt-[2vh]'>To inspire a love of learning in kindergarten kids through fun, interactive, and educational activities.</p>
            </div>
            <div className='w-[90%] md:w-[30%] lg:w-[15%] h-auto lg:h-[50vh] mb-[5vh] bg-[#94F097] rounded-[20%] border-[3px] border-white flex flex-col items-center p-4 relative z-10'>
              <img src={Img5} alt="pic" className='w-[50%] lg:w-auto mt-[4vh]' />
              <h1 className='font-bold text-[1.2rem] mt-[3vh]'>Our Mission</h1>
              <p className='text-center text-[1.1rem] mt-[2vh]'>To create a safe, engaging, and enjoyable learning platform that supports early childhood education, providing interactive content that helps kids learn and grow.</p>
            </div>
            <div className='w-[90%] md:w-[30%] lg:w-[15%] h-auto lg:h-[50vh] mt-[5vh] bg-[#EABBBB] rounded-[20%] border-[3px] border-white flex flex-col items-center p-4 relative'>
              <img src={Img6} alt="pic" className='w-[50%] lg:w-auto mt-[4vh]' />
              <h1 className='font-bold text-[1.2rem] mt-[2vh]'>Our Values</h1>
              <p className='text-center text-[1.1rem] mt-[1vh]'>Our values prioritize fun, basic skills, creativity, especially the safety, and inclusion, collaborating with teachers, parents, and experts to create a secure, kid-friendly platform.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-[40vh]'></div>
      <Footer />
    </div>
  );
};

export default LandingPage;
