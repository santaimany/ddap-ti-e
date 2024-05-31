import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo/logo.svg';

function Navbar() {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('/login');
    };

    const handleHome = () => {
        navigate('/');

    };

    const handleAboutUs = () => {
        navigate('/about');
    }

    return (
        <>
            <nav className="bg-[#00AFD6] shadow-md fixed w-full z-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <a onClick={handleHome} href="#" className="flex items-center">
                                <img src={Logo} alt="EasyDeal Logo" className="h-20 w-auto"/>
                            </a>
                            <a onClick={handleAboutUs} className="py-2 px-3 font-semibold hover:text-gray-200 hidden md:block">ABOUT US</a>
                        </div>
                        <div className="flex-grow flex items-center space-x-4">
                            <div className="flex flex-grow items-center bg-white rounded-full shadow">
                                <input type="text" placeholder="Search" className="py-2 px-4 rounded-l-full text-black w-full shadow"/>
                                <span className="px-4">
                                    <svg className="text-gray-600 h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </span>
                            </div>
                            <button onClick={handleSignIn} className='bg-white px-4 py-2 hover:bg-[#ADE8F4] text-black font-semibold rounded-full shadow outline outline-1'>SIGN IN</button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="pt-24"></div>
        </>
    );
}

export default Navbar;
