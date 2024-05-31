import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BagIcon from '../assets/icon/bagicon.svg';
import ClothesIcon from '../assets/icon/clothes.svg';
import PhoneIcon from '../assets/icon/phoneicon.svg';
import ShoeIcon from '../assets/icon/shoeicon.svg';
import CosmeticIcon from '../assets/icon/cosmeticicon.svg';
import AutomotiveIcon from '../assets/icon/helmicon.svg';
import categori from '../assets/shadow/category.svg';
import { Link } from "react-router-dom";

const categories = [
    { icon: BagIcon, name: 'Bag' },
    { icon: ClothesIcon, name: 'Clothes' },
    { icon: PhoneIcon, name: 'Handphone' },
    { icon: ShoeIcon, name: 'Shoe' },
    { icon: CosmeticIcon, name: 'Cosmetic' },
    { icon: AutomotiveIcon, name: 'Otomotive' }
];

const CategoryBar = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className='mt-10 py-2 rounded-lg bg-white shadow-md mx-auto max-w-[1200px] space-x-4'>
            <div className="max-w-[100%] text-center p-[20px] flex justify-center relative">
                <div className="absolute inset-x-0 top-0 h-[10px] bg-[#00afd6]"></div> {/* Top blue line */}
                <img src={categori} className="mb-[10px] text-2xl text-black py-1 px-2 rounded" />
            </div>
            <div className="flex-1 flex justify-around pb-4">
                {categories.map((category) => (
                    <Link key={category.name} to={`/category/${category.name.toLowerCase()}`} className="flex flex-col items-center" data-aos="fade-up">
                        <img src={category.icon} alt={category.name} className="h-12 w-12 mb-2 rounded-full bg-[#00afd6] outline-1 outline p-2" />
                        <span className="text-sm text-black">{category.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryBar;
