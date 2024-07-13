import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/Images/logo.png';
import ProfilePic from '../assets/Images/profile.png'; // Ensure you have a profile picture in your assets

const NavbarAdmin = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='w-full h-auto blur-background px-3 flex items-center justify-between'>
            <Link to="/Admin/admin"><img src={Logo} alt="Logo img" className='h-[10vh]' /></Link>
            <div className='hidden md:flex w-full justify-center items-center'>
                <div className='w-[60%] flex justify-around items-center'>
                    <Link to="/Admin/content" className='text-black hover:text-gray-700 font-bold'>Contents</Link>
                    <Link to="/Admin/progress" className='text-black hover:text-gray-700 font-bold'>Student Progress</Link>
                    <Link to="/Admin/parent" className='text-black hover:text-gray-700 font-bold'>Parents</Link>
                </div>
                <div className='flex items-center ml-auto'>
                    <img src={ProfilePic} alt="Profile" className='h-10 w-10 rounded-full mr-2' />
                    <span className='text-black'>John Doe</span>
                </div>
            </div>
            <div className='md:hidden'>
                <button onClick={toggleMenu}>
                    {menuOpen ? <FaTimes className='text-black' /> : <FaBars className='text-black' />}
                </button>
            </div>
            {menuOpen && (
                <div className='absolute top-[10vh] right-0 bg-slate-300 w-[50%] h-auto flex flex-col items-center'>
                    <Link to="/Admin/content" className='text-black hover:text-gray-700 py-2 font-bold' onClick={toggleMenu}>Contents</Link>
                    <Link to="/Admin/progress" className='text-black hover:text-gray-700 py-2 font-bold' onClick={toggleMenu}>Student Progress</Link>
                    <Link to="/Admin/parent" className='text-black hover:text-gray-700 py-2 font-bold' onClick={toggleMenu}>Parents</Link>
                    <div className='flex flex-row items-center py-4'>
                        <img src={ProfilePic} alt="Profile" className='h-16 w-16 rounded-full mb-2' />
                        <span className='text-black'>John Doe</span>
                    </div>
                </div>
            )}
        </div>

    );
}

export default NavbarAdmin;
