import React, { useState } from "react";
import Navbar from "./Navbar";
import FacebookFillIcon from "remixicon-react/FacebookFillIcon";
import FacebookBoxFillIcon from "remixicon-react/FacebookBoxFillIcon";
import GoogleFillIcon from "remixicon-react/GoogleFillIcon";
import EyeOffFillIcon from  'remixicon-react/EyeOffFillIcon'
import EyeFillIcon from  'remixicon-react/EyeFillIcon'
import EyeCloseFillIcon from "remixicon-react/EyeCloseFillIcon";
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/signup');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div>
            <Navbar/>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="p-10 bg-white rounded-lg shadow-lg w-full max-w-2xl">
                    <h2 className="text-2xl font-bold text-center">Log in</h2>
                    <p className="text-sm text-gray-600 text-center">
                        Doesn't have an account? <a onClick={handleRegister} href='#' className="text-blue-600 hover:underline">Sign up for free!</a>
                    </p>

                    <form className="space-y-6 mt-4">
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">Email Address</label>
                            <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:bg-sky-100 block w-full p-2.5" placeholder="Email Address" required />
                        </div>

                        <div className="relative">
                            <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2">Password</label>
                            <input type={showPassword ? "text" : "password"} id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:bg-sky-100 block w-full p-2.5" placeholder="Password" required />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                <button type="button" onClick={togglePasswordVisibility} className="text-gray-600 hover:text-black mt-7">
                                    {showPassword ? <EyeFillIcon /> : <EyeCloseFillIcon />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                <a href="#" className="font-medium text-blue-600 hover:underline">Forgot password?</a>
                            </div>
                        </div>

                        <button type="submit" className="w-full text-white bg-[#00AFD6] hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Log in</button>

                        <div className="flex items-center justify-between mt-4">
                            <button type="button" className="w-full text-white bg-black hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-2.5 text-center mr-2 mb-2 flex justify-center">
                                <FacebookFillIcon/>
                            </button>
                            <button type="button" className="w-full text-white bg-gray-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center mr-2 mb-2 flex justify-center">
                                <GoogleFillIcon/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Login;
