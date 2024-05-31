import  {useState} from 'react';
import Navbar from "../Navbar";
import Bagimg from "./assets/bag/bagimg.svg"
import Product1 from "../../assets/img/product1.svg";
import Shopee from "../../assets/icon/shopee.svg";
import Tokped from "../../assets/icon/tokped.svg";
import Product2 from "./assets/bag/bag2.svg";
import Product3 from "./assets/bag/bag3.svg";
import bag from "../../assets/shadow/bag.svg";
import Footer from "../Footer";
import Category from "../Category";
import { Navigate, useNavigate } from 'react-router-dom';


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
        title: "Claire Bag Bostanten Tas Selempang Wanita Fashion Sling Bag Women Shoulder Bag",
        price: "Rp149.999",
        originalPrice: "Rp206.000",
        store: "Bostanten Official Store",
        marketplaceIcon1: Shopee,
        marketplaceIcon2: Tokped
    },{
        id: 4,
        image: Product1,
        title: "Claire Bag Bostanten Tas Selempang Wanita Fashion Sling Bag Women Shoulder Bag",
        price: "Rp149.999",
        originalPrice: "Rp206.000",
        store: "Bostanten Official Store",
        marketplaceIcon1: Shopee,
        marketplaceIcon2: Tokped
    },

];


const ProductCard = ({ product }) => {

        return (
        <button  className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">

            <img className="w-full h-48 object-cover" src={product.imageUrl} alt={product.name} />
            <div className="p-4">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{product.name}</h5>
                <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                    <span className="text-sm line-through text-gray-600">{product.discountPrice}</span>
                </div>
                <p className="mt-1 text-gray-500">{product.store}</p>
            </div>
        </button>
    );
};

const ProductGallery = () => {
    const [sortType, setSortType] = useState('popular');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 3; 

    const sortedProducts = products.sort((a, b) => {
        if (sortType === 'newest') {
            return new Date(b.dateAdded) - new Date(a.dateAdded);
        }
        return b.price.replace(/Rp|\./g, '') - a.price.replace(/Rp|\./g, '');
    });


    const pageCount = Math.ceil(sortedProducts.length / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSortChange = (type) => {
        setSortType(type);
    };
    const navigate = useNavigate();
    const handleProductClick = () => {
        navigate('/bagpage')
    };

    return (
        <div>
            <Navbar/>
            <div className="container mx-auto bg-gray-200">
                <div className="w-full text-center p-[20px] flex justify-center relative bg-white shadow">
                    <div className="absolute font-bold text-2xl top-7 h-[10px] ">BAG</div>
                    <img src={bag} className="mb-[10px] text-black py-1 px-2 rounded"/>
                </div>
                <div className="flex justify-center mb-10 mt-10">
                    <img src={Bagimg} alt="Featured Product" className="rounded-lg shadow-md" />
                </div>
                <div className='mb-12'>
                    <Category/>
                </div>

                <div className="flex justify-center items-center mb-4 bg-gray-500 space-x-32 p-4 mx-32">
                    <p className='font-semibold'>Sort By</p>
                    <div className="flex space-x-4">
                        <button onClick={() => handleSortChange('popular')} className={`px-4 py-2 text-sm font-medium text-white ${sortType === 'popular' ? 'bg-blue-600' : 'bg-blue-500'} rounded hover:bg-blue-600`}>Popular</button>
                        <button onClick={() => handleSortChange('newest')} className={`px-4 py-2 text-sm font-medium text-white ${sortType === 'newest' ? 'bg-blue-600' : 'bg-blue-500'} rounded hover:bg-blue-600`}>Newest</button>
                    </div>
                    <div className="flex space-x-2">
                        {Array.from({ length: pageCount }, (_, i) => (
                            <button key={i} onClick={() => changePage(i + 1)} className={`px-4 py-2 text-sm font-medium ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'text-gray-700 bg-gray-200'} rounded hover:bg-blue-600 hover:text-white`}>
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 p-4 px-40 h-full">
                    {currentProducts.map(product => (
                        <button onClick={handleProductClick} key={product.id} className="shadow-lg rounded-lg overflow-hidden">
                            <img src={product.image} alt={product.title} className="w-full h-96 object-cover"/>
                            <div className="p-4">
                                <h3 className="font-semibold text-lg">{product.title}</h3>
                                <p className="text-gray-500 text-sm mb-1">{product.store}</p>
                                <div className="flex items-center">
                                    <img src={product.marketplaceIcon1} alt="Marketplace" className="h-5 w-5 mr-1"/>
                                    <p className="text-orange-600 text-lg ">{product.price}</p>
                                </div>
                                <div className="flex items-center">
                                    <img src={product.marketplaceIcon2} alt="Marketplace" className="h-5 w-5 mr-1"/>
                                    <p className="text-green-600 text-lg ">{product.originalPrice}</p>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
                <Footer/>
            </div>
        </div>

    );
};


export default ProductGallery;