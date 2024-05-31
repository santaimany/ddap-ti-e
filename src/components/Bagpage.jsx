import React from "react";
import Image from './category/assets/bag/bag2.svg';
import Shopee from '../assets/icon/shopee.svg';
import Tokped from '../assets/icon/tokped.svg';
import Bukalapak from '../assets/icon/bukalapak.svg';
import bag from '../assets/shadow/bag.svg';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';
const Bagpage = () => {
  return (
    <div>
        <Navbar/>
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
    <div className="w-full text-center p-[20px] flex justify-center relative bg-white shadow">
                    <div className="absolute font-bold text-2xl top-7 h-[10px] ">BAG</div>
                    <img src={bag} className="mb-[10px] text-black py-1 px-2 rounded"/>
                </div>

      <main className="bg-white shadow-md rounded-lg mt-8 p-4 w-full max-w-3xl">
        <div className="flex items-center space-x-4">
          <img
            src={Image} // replace with actual image source
            alt="Navy Club Tas Ransel"
            className="w-72 h-72"
          />
          <div className='flex flex-col flex-1'>
            <h2 className=" text-xl font-semibold mt-4">
              Navy Club Tas Ransel Kasual FAG - Tas Ransel Pria Wanita Tas Ransel Unisex - Backpack Daypack 14inch
            </h2>
            <div className="flex flex-col items-center mt-4">
              <p className="text-center font-semibold mb-2">Harga terbaik dari kami!</p>
              <div className="flex items-center space-x-2">
                <div className="flex flex-col m-2">
                <div className="flex items-center space-x-2 mb-6 rounded-full px-14 text-white bg-[#F1582C] p-2 ">
                    <img src={Shopee}/>
                  <span className="text-lg font-bold">Rp199.000</span>
                  <span className="outline outline-white outline-1 px-2 rounded-full">⭐ 4.8/5</span>
                  <button className="bg-orange-500 text-white px-4 py-1 rounded">{'>'}</button>
                </div>
                <div className="flex items-center text-white space-x-2 bg-[#4F9D4D] p-2 px-14 rounded-full">
                    <img src={Tokped} />
                  <span className="text-lg font-bold ">Rp199.000</span>
                  <span className="outline rounded-full outline-white outline-1 px-2">⭐ 4.6/5</span>
                  <button className="bg-green-500 text-white px-4 py-1 rounded">{'>'}</button>
                </div>

                </div>
           
              </div>
              <a href="#" className="text-blue-500 mt-2">Lihat harga yang lebih murah? Beritahu kami!</a>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4">Penawaran lain</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-white border p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <img src={Shopee} alt="Shopee" className="w-8 h-8" />
                <span className="text-lg font-semibold">Shopee</span>
                <span className="text-white bg-[#FFC42D] px-5 rounded-full ">⭐ 4.1/5</span>
                <span className="text-sm text-white rounded-lg bg-[#CECDC9] p-1"> Info selengkapnya</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-lg font-semibold">Rp 205.000</span>
                <a href="#" className="bg-[#F1582C] text-white px-4 py-1 rounded">cek harga terbaru</a>
              </div>
            </div>
            <div className="flex justify-between items-center bg-white border p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <img src={Shopee} alt="Shopee" className="w-8 h-8" />
                <span className="text-lg font-semibold">Shopee</span>
                <span className="text-white bg-[#FFC42D] px-5 rounded-full ">⭐ 4.5/5</span>
                <span className="text-sm text-white rounded-lg bg-[#CECDC9] p-1"> Info selengkapnya</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-lg font-semibold">Rp 243.000</span>
                <a href="#" className="bg-[#F1582C] text-white px-4 py-1 rounded">cek harga terbaru</a>
              </div>
            </div>
            <div className="flex justify-between items-center bg-white border p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <img src={Tokped} alt="Tokopedia" className="w-8 h-8" />
                <span className="text-lg font-semibold">Tokopedia</span>
                <span className="text-white bg-[#FFC42D] px-5 rounded-full ">⭐ 3.6/5</span>
                <span className="text-sm text-white rounded-lg bg-[#CECDC9] p-1"> Info selengkapnya</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-lg font-semibold">Rp 250.000</span>
                <a href="#" className="bg-[#F1582C] text-white px-4 py-1 rounded">cek harga terbaru</a>
              </div>
            </div>
            <div className="flex justify-between items-center bg-white border p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <img src={Bukalapak} alt="Bukalapak" className="w-8 h-8" />
                <span className="text-lg font-semibold">Bukalapak</span>
                <span className="text-white bg-[#FFC42D] px-5 rounded-full ">⭐ 4.0/5</span>
                <span className="text-sm text-white rounded-lg bg-[#CECDC9] p-1"> Info selengkapnya</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-lg font-semibold">Rp 255.000</span>
                <a href="#" className="bg-[#F1582C] text-white px-4 py-1 rounded">cek harga terbaru</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <Footer/>
    </div>

  );
}

export default Bagpage;
