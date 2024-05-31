import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Find from "../assets/img/findprice.svg"
import BagIcon from '../assets/icon/bagicon.svg';
import ClothesIcon from '../assets/icon/clothes.svg';
import PhoneIcon from '../assets/icon/phoneicon.svg';
import ShoeIcon from '../assets/icon/shoeicon.svg';
import CosmeticIcon from '../assets/icon/cosmeticicon.svg';
import AutomotiveIcon from '../assets/icon/helmicon.svg';
import Category from "./Category";
import categori from "../assets/shadow/category.svg";
import catalog from  '../assets/shadow/catalog.svg'
import Product from "./Product";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Logo from "../assets/img/logo.svg";


const categories = [
    { icon: BagIcon, name: 'Bag' },
    { icon: ClothesIcon, name: 'Clothes' },
    { icon: PhoneIcon, name: 'Handphone' },
    { icon: ShoeIcon, name: 'Shoe' },
    { icon: CosmeticIcon, name: 'Cosmetic' },
    { icon: AutomotiveIcon, name: 'Otomotive' }
];
const Home = () => {
    return (<div>
            <Navbar />
            <div className=" p-4 w-full flex-col items-center justify-center bg-white min-h-screen text-xl font-bold">

                <div className="relative text-center">
                    <img src={Find} alt="Find the Best Price" className="inline-block h-full border-2 rounded-xl outline-1 outline shadow-lg" /> {/* Adjust the size as needed */}
                    <div className="absolute top-1/2 right-56 text-4xl transform -translate-y-1/2 text-white  shadow-2xl  p-2 rounded">
                        FIND THE BEST PRICE.
                    </div>
                </div>
                <div>
                    <Category/>
                </div>

                <div className='mt-10 rounded-2xl  shadow-md mx-auto max-w-[1200px] space-x-4'>
                    <div className="max-w-[100%] text-center p-[20px] flex justify-center relative bg-white max-w-[1200px]">
                        <div className="absolute inset-x-0 top-32 h-[10px] bg-[#00afd6]"></div> {/* Top blue line */}
                        <img src={catalog} className="mb-[10px]  text-2xl text-black  px-2 rounded"/>
                    </div>
                </div>

                <div>
                    <Product/>
                </div>
            </div>
            <Footer/>
    </div>

    );
};

export default Home;
