import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Bag from "./components/category/Bag";
import Clothes from "./components/category/Clothes";
import AboutUs from "./components/Aboutus";
import Bagpage from "./components/Bagpage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/category/bag" element={<Bag/>}></Route>
                <Route path="/category/clothes" element={<Clothes/>}></Route>
                <Route path="/bagpage" element={<Bagpage/>}></Route>
         </Routes>
        </Router>
    );
}

export default App;
