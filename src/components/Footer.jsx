import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import InstagramIcon from '../assets/icon/instagram.svg';
import FacebookIcon from '../assets/icon/facebook.svg';
import XTwitter from '../assets/icon/xtwitter.svg';
import footerFollow from '../assets/shadow/footer.svg';
import Logo from '../assets/logo/logo.svg';

function Footer() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <footer className="bg-[#00101F] p-8 text-white mt-2" data-aos="fade-up">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
                <div className="flex flex-col space-y-4 md:space-y-8">
                    <h3 className="text-lg font-semibold">Tentang EasyDeal</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Tentang kami</a></li>
                        <li><a href="#" className="hover:underline">Hubungi kami</a></li>
                        <li><a href="#" className="hover:underline">Mitra</a></li>
                        <li><a href="#" className="hover:underline">Karir</a></li>
                    </ul>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-center mb-4">FOLLOW US ON</p>
                    <div className="flex space-x-4 mb-4">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                            <img src={InstagramIcon} alt="Instagram" className="h-8 w-8" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                            <img src={FacebookIcon} alt="Facebook" className="h-8 w-8" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                            <img src={XTwitter} alt="Twitter" className="h-8 w-8" />
                        </a>
                    </div>
                    <img src={footerFollow} alt="Follow Us" className="h-16" />
                </div>
                <div className="flex flex-col items-center md:items-end space-y-2">
                    <h3 className="text-lg font-semibold">Berikan komentar tentang EasyDeal</h3>
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Tuliskan disini"
                            className="p-2 rounded-l-md border-none text-black"
                        />
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md">Kirim</button>
                    </div>
                </div>
            </div>
            <div className="text-center text-gray-400 mt-8">
                <p className="text-sm">
                    Hak Cipta &copy; 2024 EasyDeal Company Sdn. Bhd. (1234567 - A).
                </p>
                <p className="text-xs">
                    Harga yang dinyatakan mungkin telah berubah sejak update terakhir. Namun, tidak memungkinkan bagi kami untuk memperbarui harga di website kami dengan segera.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
