import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Product1 from '../assets/img/product1.svg'; // Ensure you have a placeholder image at this path
import Product2 from '../assets/img/product2.svg';
import Product3 from '../assets/img/product3.svg';
import Shopee from '../assets/icon/shopee.svg';
import Tokped from '../assets/icon/tokped.svg';

const products = [
    {
        id: 1,
        image: Product1,
        title: "Claire Bag Bostanten Tas Selempang Wanita Fashion Sling Bag Women Shoulder Bag",
        price: "Rp149.999",
        originalPrice: "Rp206.000",
        store: "Bostanten Official Store",
        marketplaceIcon1: Shopee,
        marketplaceIcon2: Tokped
    },
    {
        id: 2,
        image: Product2,
        title: "Adidas Samba OG Black Gum (100% Authentic)",
        price: "Rp1.299.000",
        originalPrice: "Rp1.199.000",
        store: "Adidas Official Store",
        marketplaceIcon1: Shopee,
        marketplaceIcon2: Tokped
    },
    {
        id: 3,
        image: Product3,
        title: "Apple iPhone 15 Pro ProMAX 256GB",
        price: "Rp23.249.000",
        originalPrice: "Rp22.898.980",
        store: "iBox",
        marketplaceIcon1: Shopee,
        marketplaceIcon2: Tokped
    }
];

const ProductCard = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4 p-4 px-40 h-full">
            {products.map(product => (
                <div key={product.id} className="shadow-lg rounded-lg overflow-hidden" data-aos="fade-up">
                    <img src={product.image} alt={product.title} className="w-full h-96 object-cover"/>
                    <div className="p-4">
                        <h3 className="font-semibold text-lg">{product.title}</h3>
                        <p className="text-gray-500 text-sm mb-1">{product.store}</p>
                        <div className="flex items-center">
                            <img src={product.marketplaceIcon1} alt="Marketplace" className="h-5 w-5 mr-1"/>
                            <p className="text-orange-600 text-lg">{product.price}</p>
                        </div>
                        <div className="flex items-center">
                            <img src={product.marketplaceIcon2} alt="Marketplace" className="h-5 w-5 mr-1"/>
                            <p className="text-green-600 text-lg">{product.originalPrice}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;
