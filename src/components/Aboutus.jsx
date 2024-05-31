import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Logo from '../assets/img/logo.svg';
import AboutImage from '../assets/img/about.svg'; // Assume this is the correct path

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-gray-50 min-h-screen">
                <div className="flex flex-col items-center justify-center text-center py-16">

                    <h1 className="text-4xl font-bold mb-6 text-gray-800">ABOUT US</h1>
                    <img src={Logo} alt="Easy Deal Logo" className="h-24 w-24 mb-4" />
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                        Welcome to Easy Deal, where finding the best prices is made easy and enjoyable. We are here
                        with a simple goal: to make your shopping experience more efficient, more cost-effective,
                        and more satisfying.
                    </p>
                    <img src={AboutImage} alt="About Us" className="rounded-lg shadow-lg mb-8 w-full max-w-3xl mx-auto" />
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        To become the premier destination for effortless and affordable shopping, revolutionizing
                        the way people find the best deals.
                    </p>
                </div>

                <div className="bg-white py-16">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Mission</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                </div>

                <div className="bg-gray-50 py-16">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Customer Testimonials</h2>
                    <div className="flex flex-col items-center justify-center space-y-8 max-w-4xl mx-auto">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <p className="text-lg text-gray-600">
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
                            </p>
                            <p className="mt-4 text-sm text-gray-500">- Arman Maulana</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <p className="text-lg text-gray-600">
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
                            </p>
                            <p className="mt-4 text-sm text-gray-500">- Syach Intisari</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <p className="text-lg text-gray-600">
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
                            </p>
                            <p className="mt-4 text-sm text-gray-500">- Faril Nuril</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;
