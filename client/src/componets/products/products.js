import React from "react";
import SmallCatagoryContainer from "../common/catagroycontainersmall";


const Product = () => {
    return(<>
    
    
    
    <SmallCatagoryContainer/>

    {/*<!-- main sections starts -->*/}
    <main className="mt-12 sm:mt-0">
    
    {/*<!-- product image & description container -->*/}
    <div className="w-full flex flex-col sm:flex-row bg-white sm:p-2 relative">

        {/*<!-- image wrapper -->*/}
        <div className="w-full sm:w-2/5 sm:sticky top-16 sm:h-screen">
            {/*<!-- imgbox -->*/}
            <div className="flex flex-col gap-3 m-3">
                <div className="image-box w-full h-96 p-4 border">
                    <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/416/416/kfpq5jk0-0/headphone/c/n/6/rockerz-400-rockerz-410-boat-original-imafw45vhyrax3zj.jpeg" alt=""/>
                </div>

                <div className="w-full flex gap-3">
                    {/*<!-- add to cart btn -->*/}
                    <button className="p-4 w-1/2 flex items-center justify-center gap-2 text-white bg-primary-yellow rounded-sm shadow" type="submit">
                        <span className="material-icons">shopping_cart</span>
                        ADD TO CART
                    </button>
                    <button className="p-4 w-1/2 flex items-center justify-center gap-2 text-white bg-primary-orange rounded-sm shadow" type="submit">
                        <span className="material-icons">flash_on</span>
                        BUY NOW
                    </button>
                    {/*<!-- add to cart btn -->*/}
                </div>

            </div>
            {/*<!-- imgbox -->*/}
        </div>
        {/*<!-- image wrapper -->*/}

        {/*<!-- product desc wrapper -->*/}
        <div className="flex-1 py-2 px-3">

        {/*<!-- whole product description -->*/}
        <div className="flex flex-col gap-2 mb-4">

            <h2 className="text-lg">boAt Rockerz 400 Bluetooth Headset  (Red, Black, On the Ear)</h2>
            {/*<!-- rating badge -->*/}
            <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                <span>3,04,177 Ratings & 42,233 Reviews</span>
            </span>
            {/*<!-- rating badge -->*/}

            {/*<!-- price desc -->*/}
            <span className="text-primary-green text-sm font-medium">Special Price</span>
            <div className="flex items-baseline gap-2 text-2xl font-medium">
                <span>₹16,790</span>
                <span className="text-base text-gray-500 line-through">₹18,890</span>
                <span className="text-base text-primary-green">15%&nbsp;off</span>
            </div>
            {/*<!-- price desc -->*/}

            {/*<!-- banks offers -->*/}
            <p className="text-sm font-medium">Available offers</p>

            <p className="text-sm flex items-center gap-1">
                <span className="material-icons md-20 text-primary-lightGreen">local_offer</span>
                <span className="font-medium ml-2">Bank Offer</span> 15% Instant discount on first Flipkart Pay Later order of 500 and above <a className="text-primary-blue font-medium" href="#">T&C</a>
            </p>
            <p className="text-sm flex items-center gap-1">
                <span className="material-icons md-20 text-primary-lightGreen">local_offer</span>
                <span className="font-medium ml-2">Bank Offer</span> 15% Instant discount on first Flipkart Pay Later order of 500 and above <a className="text-primary-blue font-medium" href="#">T&C</a>
            </p>
            <p className="text-sm flex items-center gap-1">
                <span className="material-icons md-20 text-primary-lightGreen">local_offer</span>
                <span className="font-medium ml-2">Bank Offer</span> 15% Instant discount on first Flipkart Pay Later order of 500 and above <a className="text-primary-blue font-medium" href="#">T&C</a>
            </p>
            {/*<!-- banks offers -->*/}

            {/*<!-- warranty & brand -->*/}
            <div className="flex gap-8 mt-2 items-center text-sm">
                <img className="w-20 h-8 border p-1 object-contain" src="https://rukminim1.flixcart.com/image/160/160/prod-fk-cms-brand-images/164752bf18d354f1de5b2451fb11c381da8a6570cd227b9e4828917f34e7e7c6.jpg" alt=""/>
                <span>1 Year <a className="font-medium text-primary-blue" href="#">Know More</a></span>
            </div>
            {/*<!-- warranty & brand -->*/}

            {/*<!-- delivery details -->*/}
            <div className="flex gap-16 mt-4 items-center text-sm font-medium">
                <p className="text-gray-500">Delivery</p>
                <span>Delivery by 27 Sep, Monday</span>
            </div>
            {/*<!-- delivery details -->*/}

            {/*<!-- color selection -->*/}
            <div className="flex gap-20 mt-4 items-stretch text-sm font-medium">
                <p className="text-gray-500">Color</p>
                <ul className="flex gap-3">
                    <li className="w-14 h-14 border cursor-pointer"><img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/160/160/prod-fk-cms-brand-images/164752bf18d354f1de5b2451fb11c381da8a6570cd227b9e4828917f34e7e7c6.jpg" alt=""/></li>
                    <li className="w-14 h-14 border cursor-pointer"><img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/160/160/prod-fk-cms-brand-images/164752bf18d354f1de5b2451fb11c381da8a6570cd227b9e4828917f34e7e7c6.jpg" alt=""/></li>
                    <li className="w-14 h-14 border cursor-pointer"><img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/image/160/160/prod-fk-cms-brand-images/164752bf18d354f1de5b2451fb11c381da8a6570cd227b9e4828917f34e7e7c6.jpg" alt=""/></li>
                </ul>
            </div>
            {/*<!-- color selection -->*/}


            {/*<!-- highlights & services details -->*/}
            <div className="flex flex-col sm:flex-row justify-between">
            {/*<!-- highlights details -->*/}
            <div className="flex gap-16 mt-4 items-stretch text-sm">
                <p className="text-gray-500 font-medium">Highlights</p>
                
                <ul className="list-disc flex flex-col gap-2 w-64">
                    <li>
                        <p>Bluetooth version: 5.0</p>
                    </li>
                    <li>
                        <p>Bluetooth version: 5.0</p>
                    </li>
                    <li>
                        <p>Foldable/ Collapsible: Designed for people always on the move, easy storage and easy to carry</p>
                    </li>
                    <li>
                        <p>Bluetooth version: 5.0</p>
                    </li>
                    <li>
                        <p>Bluetooth version: 5.0</p>
                    </li>
                    <li>
                        <p>Bluetooth version: 5.0</p>
                    </li>
                </ul>
            </div>
            {/*<!-- highlights details -->*/}

            {/*<!-- services details -->*/}
            <div className="flex gap-16 mt-4 mr-6 items-stretch text-sm">
                <p className="text-gray-500 font-medium">Services</p>
                <ul className="flex flex-col gap-2">
                    <li>
                        <p className="flex items-center gap-3"><span className="material-icons md-18 text-primary-blue">verified_user</span> 1 Year</p>
                    </li>
                    <li>
                        <p className="flex items-center gap-3"><span className="material-icons md-18 text-primary-blue">cached</span> 7 Days Replacement Policy</p>
                    </li>
                    <li>
                        <p className="flex items-center gap-3"><span className="material-icons md-18 text-primary-blue">paid</span> Cash on Delivery available</p>
                    </li>
                </ul>
            </div>
            {/*<!-- services details -->*/}
            </div>
            {/*<!-- highlights & services details -->*/}
            
            {/*<!-- seller details -->*/}
            <div className="flex gap-16 mt-4 items-center text-sm font-medium">
                <p className="text-gray-500">Seller</p>
                <a className="font-medium text-primary-blue ml-3" href="#">CORSECA</a>
            </div>
            {/*<!-- seller details -->*/}

            {/*<!-- flipkart plus banner -->*/}
            <div className="sm:w-1/2 mt-4 border">
                <img className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/lockin/763/305/images/promotion_banner_v2_active.png" alt=""/>
            </div>
            {/*<!-- flipkart plus banner -->*/}

            {/*<!-- description details -->*/}
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-14 mt-4 items-stretch text-sm">
                <p className="text-gray-500 font-medium">Description</p>
                <span>If you want to enjoy immersive entertainment on the move without any strings attached, then buy the boAt Rockerz 400 Super Extra Bass Bluetooth Headset. This powerful headset features 40-mm Dynamic Drivers, a Passive Noise Cancellation technology, and a Dual Mode to let you dive into your favorite music without interruption or physical limitations.</span>
            </div>
            {/*<!-- description details -->*/}

    
            {/*<!-- border box -->*/}
            <div className="w-full mt-6 rounded-sm border flex flex-col">
                <h1 className="px-6 py-4 border-b text-2xl font-medium">Product Description</h1>

                {/*<!-- info rows -->*/}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-7 p-6 items-stretch border-b">
                    <img className="h-40 sm:h-24 w-full sm:w-44 object-contain" src="https://rukminim1.flixcart.com/image/200/200/cms-rpd-images/919a81e496a24548bbcec5d90c2960ff_16d4db6631c_image.jpeg" alt=""/>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-lg">Wireless Entertainment</h2>
                        <p className="text-sm">Using Bluetooth technology, connect your smart devices to this headset and groove to your favorite melodies for up to 8 hours. Let the high-definition sound of this headset serenade your soul without any wires.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 sm:gap-7 sm:flex-row-reverse p-6 items-stretch">
                    <img className="h-40 sm:h-24 w-full sm:w-44 object-contain" src="https://rukminim1.flixcart.com/image/200/200/cms-rpd-images/919a81e496a24548bbcec5d90c2960ff_16d4db6631c_image.jpeg" alt=""/>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-lg">Stylish and Classy</h2>
                        <p className="text-sm">This boAt headset is lightweight, sleek, and sturdy to make your musical experience stylish and convenient. It features an ergonomic base that ensures that this headset offers a custom fit as per your head's shape.</p>
                    </div>
                </div>
                {/*<!-- info rows -->*/}
            </div>
            {/*<!-- border box -->*/}

            {/*<!-- specifications border box -->*/}
            <div className="w-full mt-4 pb-4 rounded-sm border flex flex-col">
                <h1 className="px-6 py-4 border-b text-2xl font-medium">Specifications</h1>
                <h1 className="px-6 py-3 text-lg">General</h1>

                {/*<!-- specs list -->*/}
                <div className="px-6 py-2 flex items-center text-sm">
                    <p className="text-gray-500 w-3/12">Model Name</p>
                    <p className="flex-1">Rockerz 400 / Rockerz 410</p>
                </div>
                <div className="px-6 py-2 flex items-center text-sm">
                    <p className="text-gray-500 w-3/12">Color</p>
                    <p className="flex-1">Rockerz 400 / Rockerz 410</p>
                </div>
                <div className="px-6 py-2 flex items-center text-sm">
                    <p className="text-gray-500 w-3/12">Model Name</p>
                    <p className="flex-1">Rockerz 400 / Rockerz 410</p>
                </div>
                <div className="px-6 py-2 flex items-center text-sm">
                    <p className="text-gray-500 w-3/12">Model Name</p>
                    <p className="flex-1">Rockerz 400 / Rockerz 410</p>
                </div>
                <div className="px-6 py-2 flex items-center text-sm">
                    <p className="text-gray-500 w-3/12">Model Name</p>
                    <p className="flex-1">Rockerz 400 / Rockerz 410</p>
                </div>
                <div className="px-6 py-2 flex items-center text-sm">
                    <p className="text-gray-500 w-3/12">Model Name</p>
                    <p className="flex-1">Rockerz 400 / Rockerz 410</p>
                </div>
                {/*<!-- specs list -->*/}

            </div>
            {/*<!-- specifications border box -->*/}

            {/*<!-- specifications border box -->*/}
            <div className="w-full mt-4 pb-4 rounded-sm border flex flex-col">
                <h1 className="px-6 py-4 border-b text-2xl font-medium">Specifications</h1>
                <h1 className="px-6 py-3 text-lg">General</h1>

                {/*<!-- specs list -->*/}
                <div className="px-6 py-2 flex items-center text-sm">
                    <p className="text-gray-500 w-3/12">Model Name</p>
                    <p className="flex-1">Rockerz 400 / Rockerz 410</p>
                </div>
                <div className="px-6 py-2 flex items-center text-sm">
                    <p className="text-gray-500 w-3/12">Coloe</p>
                    <p className="flex-1">Rockerz 400 / Rockerz 410</p>
                </div>
                <div className="px-6 py-2 flex items-center text-sm">
                    <p className="text-gray-500 w-3/12">Model Name</p>
                    <p className="flex-1">Rockerz 400 / Rockerz 410</p>
                </div>
                <div className="px-6 py-2 flex items-center text-sm">
                    <p className="text-gray-500 w-3/12">Model Name</p>
                    <p className="flex-1">Rockerz 400 / Rockerz 410</p>
                </div>
                <div className="px-6 py-2 flex items-center text-sm">
                    <p className="text-gray-500 w-3/12">Model Name</p>
                    <p className="flex-1">Rockerz 400 / Rockerz 410</p>
                </div>
                <div className="px-6 py-2 flex items-center text-sm">
                    <p className="text-gray-500 w-3/12">Model Name</p>
                    <p className="flex-1">Rockerz 400 / Rockerz 410</p>
                </div>
                {/*<!-- specs list -->*/}

            </div>
            {/*<!-- specifications border box -->*/}
            
        </div>

        </div>
        {/*<!-- product desc wrapper -->*/}

    </div>
    {/*<!-- product image & description container -->*/}</main>
    

    
    </>)
}

export default Product;