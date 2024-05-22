import React, { useState } from 'react';
// import RunBanner from './script';
// import {Helmet} from "react-helmet";
import CatagoryContainer from "./catagroycontainer";

//Import Api for Top Seleciton
import Product from '../api/product';

const Home = () => {
    const [product, setProduct] = useState(Product);



    return (<>
        <h1>Home</h1>
        <CatagoryContainer />
        {/*<!-- main sections starts -->*/}
        <main className="flex flex-col gap-3 px-2 mt-2">

            {/*<!-- banner section -->*/}
            <section className="h-44 sm:h-72 w-full rounded-sm shadow owl-carousel owl-theme relative overflow-hidden" id="banner">
                <img className="h-44 sm:h-72 w-full object-cover" src="https://rukminim1.flixcart.com/flap/1688/280/image/9d50c7626a973408.jpg" alt="" />
                <img className="h-44 sm:h-72 w-full object-cover" src="https://rukminim1.flixcart.com/flap/1688/280/image/9d50c7626a973408.jpg" alt="" />
                <img className="h-44 sm:h-72 w-full object-cover" src="https://rukminim1.flixcart.com/flap/1688/280/image/9d50c7626a973408.jpg" alt="" />
                <img className="h-44 sm:h-72 w-full object-cover" src="https://rukminim1.flixcart.com/flap/1688/280/image/9d50c7626a973408.jpg" alt="" />
                <img className="h-44 sm:h-72 w-full object-cover" src="https://rukminim1.flixcart.com/flap/1688/280/image/9d50c7626a973408.jpg" alt="" />
            </section>
            {/*<!-- banner section -->*/}
            {/*<!-- top selection section -->*/}
            <section id="topSelection" className="bg-white w-full shadow overflow-hidden">
                {/*<!-- header -->*/}
                <div className="flex px-6 py-3 justify-between items-center">
                    <h1 className="text-xl font-medium">Top Selection</h1>
                    <a href="#" className="bg-primary-blue text-xs font-medium text-white px-5 py-2.5 rounded-sm shadow-lg">VIEW ALL</a>
                </div>
                <hr />
                {/*<!-- header -->*/}

                {/*<!-- products container -->*/}
                <div className="flex items-center justify-between owl-carousel owl-theme relative">
                    {/*<!-- one product -->*/}
                    {product.map((itme) => {
                        return (
                            <a className="flex flex-col items-center gap-2 p-6" href="#" key={itme.id}>
                                <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                                    <img className="w-full h-full object-contain" src={itme.image} alt="" />
                                </div>
                                <h2 className="font-medium text-sm mt-2">{itme.catagroy}</h2>
                                <span className="text-primary-green text-sm">Grab Now</span>
                            </a>
                        )
                    })}

                </div>
                {/*<!-- products container -->*/}
            </section>
            {/*<!-- top selection section -->*/}
        </main>

        {/*<!-- recommended items section -->*/}
        <section id="recommended" className="bg-white w-full shadow overflow-hidden">
            {/*<!-- header -->*/}
            <div className="flex px-6 py-4 justify-between items-center">
                <div className="title flex flex-col gap-0.5">
                    <h1 className="text-xl font-medium">Recommended Items</h1>
                    <p className="text-sm text-gray-400">Inspired by Your Interest</p>
                </div>
                <a href="#" className="bg-primary-blue text-xs font-medium text-white px-5 py-2.5 rounded-sm shadow-lg">VIEW ALL</a>
            </div>
            <hr />
            {/*<!-- header -->*/}

            {/*<!-- products container -->*/}
            <div className="flex items-center justify-between owl-carousel owl-theme p-1 relative">

                {/*<!-- one product -->*/}
                {product.map((item) => {
                    return (
                        <div className="flex flex-col items-center gap-2 px-2 py-6 relative" key={item.id}>
                            {/*<!-- image & product title -->*/}
                            <a href="#" className="flex flex-col items-center text-center group">
                                <div className="w-36 h-36">
                                    <img className="w-full h-full object-contain" src={item.image} alt="" />
                                </div>
                                <h2 className="text-sm mt-4 group-hover:text-primary-blue">{item.description}</h2>
                            </a>
                            {/*<!-- image & product title -->*/}

                            {/*<!-- product description -->*/}
                            <div className="flex flex-col gap-2 items-center">
                                {/*<!-- rating badge -->*/}
                                <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                                    <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">{item.rating} <i className="material-icons md-12">star</i></span>
                                    <span>({item.views})</span>
                                </span>
                                {/*<!-- rating badge -->*/}

                                {/*<!-- price container -->*/}
                                <div className="flex items-center gap-1.5 text-md font-medium">
                                    <span>₹{item.final_price}</span>
                                    <span className="text-gray-500 line-through text-xs">₹{item.price}</span>
                                    <span className="text-xs text-primary-green">{item.discount}%&nbsp;off</span>
                                </div>
                                {/*<!-- price container -->*/}
                            </div>
                            {/*<!-- product description -->*/}

                            {/*<!-- wishlist badge -->*/}
                            <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                            {/*<!-- wishlist badge -->*/}

                        </div>
                    )
                })}

            </div>
            {/*<!-- products container -->*/}
        </section>
        {/*<!-- recommended items section -->*/}

        {/*<!-- discounts for you section -->*/}
        <section id="topSelection" className="bg-white w-full shadow overflow-hidden">
            {/*<!-- header -->*/}


            <div className="flex px-6 py-3 justify-between items-center">
                <h1 className="text-xl font-medium">Discounts for You</h1>
                <a href="#" className="bg-primary-blue text-xs font-medium text-white px-5 py-2.5 rounded-sm shadow-lg">VIEW ALL</a>
            </div>
            <hr />
            {/*<!-- header -->*/}

            {/*<!-- products container -->*/}
            <div className="flex items-center justify-between owl-carousel owl-theme relative">

                {product.map((item) => {
                    return (

                        <a className="flex flex-col items-center gap-1.5 p-6" href="#" key={item.id}>
                            <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                                <img className="w-full h-full object-contain" src={item.image} alt="" />
                            </div>
                            <h2 className="font-medium text-sm mt-2">{item.catagroy}</h2>
                            <span className="text-primary-green text-sm">Min {item.discount}% Off</span>
                            <span className="text-gray-500 text-sm">Buy Now!</span>
                        </a>
                    )
                })}
            </div>
            {/*<!-- products container -->*/}
        </section>
        {/*<!-- discounts for you section -->*/}


        {/*<!-- you may like section -->*/}
        <section id="recommended" className="bg-white w-full shadow overflow-hidden">
            {/*<!-- header -->*/}
            <div className="flex px-6 py-4 justify-between items-center">
                <div className="title flex flex-col gap-0.5">
                    <h1 className="text-xl font-medium">You May Like...</h1>
                    <p className="text-sm text-gray-400">Based on Your Interest</p>
                </div>
                <a href="#" className="bg-primary-blue text-xs font-medium text-white px-5 py-2.5 rounded-sm shadow-lg">VIEW ALL</a>
            </div>
            <hr />
            {/*<!-- header -->*/}

            {/*<!-- products container -->*/}
            <div className="flex items-center justify-between owl-carousel owl-theme p-1 relative">

                {/*<!-- one product -->*/}

                {product.map((item) => {
                    return (
                        <div className="flex flex-col items-center gap-2 px-2 py-6 relative" key={item.id}>
                            {/*<!-- image & product title -->*/}
                            <a href="#" className="flex flex-col items-center text-center group">
                                <div className="w-36 h-36">
                                    <img className="w-full h-full object-contain" src={item.image} alt="" />
                                </div>
                                <h2 className="text-sm mt-4 group-hover:text-primary-blue">{item.description}</h2>
                            </a>
                            {/*<!-- image & product title -->*/}

                            {/*<!-- product description -->*/}
                            <div className="flex flex-col gap-2 items-center">
                                {/*<!-- rating badge -->*/}
                                <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                                    <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">{item.rating} <i className="material-icons md-12">star</i></span>
                                    <span>({item.views})</span>
                                </span>
                                {/*<!-- rating badge -->*/}

                                {/*<!-- price container -->*/}
                                <div className="flex items-center gap-1.5 text-md font-medium">
                                    <span>₹{item.final_price}</span>
                                    <span className="text-gray-500 line-through text-xs">₹{item.price}</span>
                                    <span className="text-xs text-primary-green">{item.discount}%&nbsp;off</span>
                                </div>
                                {/*<!-- price container -->*/}
                            </div>
                            {/*<!-- product description -->*/}

                            {/*<!-- wishlist badge -->*/}
                            <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                            {/*<!-- wishlist badge -->*/}

                        </div>
                    )
                })}

            </div>
            {/*<!-- products container -->*/}
        </section>
        {/*<!-- you may like section -->*/}

        {/*<!-- top rated section -->*/}
        <section id="topSelection" className="bg-white w-full shadow overflow-hidden">
            {/*<!-- header -->*/}
            <div className="flex px-6 py-3 justify-between items-center">
                <h1 className="text-xl font-medium">Top Rated</h1>
                <a href="#" className="bg-primary-blue text-xs font-medium text-white px-5 py-2.5 rounded-sm shadow-lg">VIEW ALL</a>
            </div>
            <hr />
            {/*<!-- header -->*/}

            {/*<!-- products container -->*/}
            <div className="flex items-center justify-between owl-carousel owl-theme relative">

                {/*<!-- one product -->*/}

                {product.map((item) => {
                    return (
                        <a className="flex flex-col items-center gap-2 p-6" href="#" key={item.id}>
                            <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-100 ease-out">
                                <img className="w-full h-full object-contain" src={item.image} alt="" />
                            </div>
                            <h2 className="font-medium text-sm mt-2">{item.catagroy}</h2>
                            <span className="text-primary-green text-sm">New Collection</span>
                        </a>
                    )
                })}

            </div>
            {/*<!-- products container -->*/}
        </section>
        {/*<!-- top rated section -->*/}


        {/*<!-- suggested for you section -->*/}
        <section id="recommended" className="bg-white w-full shadow overflow-hidden">
            {/*<!-- header -->*/}
            <div className="flex px-6 py-4 justify-between items-center">
                <div className="title flex flex-col gap-0.5">
                    <h1 className="text-xl font-medium">Suggested for You</h1>
                    <p className="text-sm text-gray-400">Based on Your Interest</p>
                </div>
                <a href="#" className="bg-primary-blue text-xs font-medium text-white px-5 py-2.5 rounded-sm shadow-lg">VIEW ALL</a>
            </div>
            <hr />
            {/*<!-- header -->*/}

            {/*<!-- products container -->*/}
            <div className="flex items-center justify-between owl-carousel owl-theme p-1 relative">

                {/*<!-- one product -->*/}
                {product.map((item) => {
                    return (
                        <div className="flex flex-col items-center gap-2 px-2 py-6 relative" key={item.id}>
                            {/*<!-- image & product title -->*/}
                            <a href="#" className="flex flex-col items-center text-center group">
                                <div className="w-36 h-36">
                                    <img className="w-full h-full object-contain" src={item.image} alt="" />
                                </div>
                                <h2 className="text-sm mt-4 group-hover:text-primary-blue">{item.description}</h2>
                            </a>
                            {/*<!-- image & product title -->*/}

                            {/*<!-- product description -->*/}
                            <div className="flex flex-col gap-2 items-center">
                                {/*<!-- rating badge -->*/}
                                <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                                    <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">{item.rating} <i className="material-icons md-12">star</i></span>
                                    <span>({item.views})</span>
                                </span>
                                {/*<!-- rating badge -->*/}

                                {/*<!-- price container -->*/}
                                <div className="flex items-center gap-1.5 text-md font-medium">
                                    <span>₹{item.final_price}</span>
                                    <span className="text-gray-500 line-through text-xs">₹{item.price}</span>
                                    <span className="text-xs text-primary-green">{item.discount}%&nbsp;off</span>
                                </div>
                                {/*<!-- price container -->*/}
                            </div>
                            {/*<!-- product description -->*/}

                            {/*<!-- wishlist badge -->*/}
                            <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                            {/*<!-- wishlist badge -->*/}

                        </div>
                    )
                })}


                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/jxp08sw0/water-purifier/r/z/s/eureka-forbes-aquasure-from-aquaguard-desire-ro-mc-original-imafg3hwgn8p7brg.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">Eureka Forbes Aquasure Desire Water Purifier Aquagaurd</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/jxp08sw0/water-purifier/r/z/s/eureka-forbes-aquasure-from-aquaguard-desire-ro-mc-original-imafg3hwgn8p7brg.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">Eureka Forbes Aquasure Desire Water Purifier Aquagaurd</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/jxp08sw0/water-purifier/r/z/s/eureka-forbes-aquasure-from-aquaguard-desire-ro-mc-original-imafg3hwgn8p7brg.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">Eureka Forbes Aquasure Desire Water Purifier Aquagaurd</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/jxp08sw0/water-purifier/r/z/s/eureka-forbes-aquasure-from-aquaguard-desire-ro-mc-original-imafg3hwgn8p7brg.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">Eureka Forbes Aquasure Desire Water Purifier Aquagaurd</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/jxp08sw0/water-purifier/r/z/s/eureka-forbes-aquasure-from-aquaguard-desire-ro-mc-original-imafg3hwgn8p7brg.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">Eureka Forbes Aquasure Desire Water Purifier Aquagaurd</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/jxp08sw0/water-purifier/r/z/s/eureka-forbes-aquasure-from-aquaguard-desire-ro-mc-original-imafg3hwgn8p7brg.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">Eureka Forbes Aquasure Desire Water Purifier Aquagaurd</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/jxp08sw0/water-purifier/r/z/s/eureka-forbes-aquasure-from-aquaguard-desire-ro-mc-original-imafg3hwgn8p7brg.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">Eureka Forbes Aquasure Desire Water Purifier Aquagaurd</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

                {/*<!-- one product -->*/}
                <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
                    {/*<!-- image & product title -->*/}
                    <a href="#" className="flex flex-col items-center text-center group">
                        <div className="w-36 h-36">
                            <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/jxp08sw0/water-purifier/r/z/s/eureka-forbes-aquasure-from-aquaguard-desire-ro-mc-original-imafg3hwgn8p7brg.jpeg" alt="" />
                        </div>
                        <h2 className="text-sm mt-4 group-hover:text-primary-blue">Eureka Forbes Aquasure Desire Water Purifier Aquagaurd</h2>
                    </a>
                    {/*<!-- image & product title -->*/}

                    {/*<!-- product description -->*/}
                    <div className="flex flex-col gap-2 items-center">
                        {/*<!-- rating badge -->*/}
                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                            <span>(7,345)</span>
                        </span>
                        {/*<!-- rating badge -->*/}

                        {/*<!-- price container -->*/}
                        <div className="flex items-center gap-1.5 text-md font-medium">
                            <span>₹16,790</span>
                            <span className="text-gray-500 line-through text-xs">₹18,890</span>
                            <span className="text-xs text-primary-green">15%&nbsp;off</span>
                        </div>
                        {/*<!-- price container -->*/}
                    </div>
                    {/*<!-- product description -->*/}

                    {/*<!-- wishlist badge -->*/}
                    <i className="material-icons absolute top-5 right-2 text-gray-300 cursor-pointer hover:text-red-500 md-16">favorite</i>
                    {/*<!-- wishlist badge -->*/}

                </div>

            </div>
            {/*<!-- products container -->*/}
        </section>
        {/*<!-- suggested for you section -->*/}





        {/* <Helmet>
				<script src="/script.js" type="text/javascript"/>
			</Helmet> */}

    </>)
}

export default Home;