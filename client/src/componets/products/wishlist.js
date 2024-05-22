import React from "react";
import SmallCatagoryContainer from "../common/catagroycontainersmall";

const WishList = () => {
    return (<>

        <SmallCatagoryContainer />


        <main className="w-full mt-14 sm:mt-0">

            {/*<!-- row -->*/}
            <div className="flex gap-3.5 px-1 sm:px-0 sm:w-11/12 mt-4 m-auto mb-7">
                {/*<!-- sidebar column  -->*/}
                <div className="hidden sm:flex flex-col gap-4 w-1/4 px-1">

                    {/*<!-- profile card -->*/}
                    <div className="flex items-center gap-4 p-3 bg-white rounded-sm shadow">
                        {/*<!-- user icon -->*/}
                        <div className="w-12 h-12 rounded-full">
                            <img className="h-full w-full object-contain" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/profile-pic-male_4811a1.svg" alt="" />
                        </div>
                        {/*<!-- user icon -->*/}
                        <div className="flex flex-col gap-1">
                            <p className="text-xs">Hello,</p>
                            <h2 className="font-medium">Jhon Doe</h2>
                        </div>
                    </div>
                    {/*<!-- profile card -->*/}

                    {/*<!-- nav tiles -->*/}
                    <div className="flex flex-col bg-white rounded-sm shadow">

                        {/*<!-- my orders tab -->*/}
                        <div className="flex items-center gap-5 px-4 py-4 border-b">
                            <span className="material-icons text-primary-blue">folder</span>
                            <a className="flex w-full justify-between font-medium text-gray-500 hover:text-primary-blue" href="orders.html">
                                MY ORDERS
                                <span className="material-icons">chevron_right</span>
                            </a>
                        </div>
                        {/*<!-- my orders tab -->*/}

                        {/*<!-- account settings tab -->*/}
                        <div className="flex items-center gap-5 px-4 py-4">
                            <span className="material-icons text-primary-blue">person</span>
                            <p className="flex w-full justify-between font-medium text-gray-500">ACCOUNT SETTINGS</p>
                        </div>
                        <div className="flex flex-col pb-3 border-b text-sm">
                            <a className="p-3 pl-14 hover:bg-blue-50 hover:text-primary-blue" href="profile.html">Profile Information</a>
                            <a className="p-3 pl-14 hover:bg-blue-50 hover:text-primary-blue" href="#">Manage Addresses</a>
                            <a className="p-3 pl-14 hover:bg-blue-50 hover:text-primary-blue" href="#">PAN Card Information</a>
                        </div>
                        {/*<!-- account settings tab -->*/}

                        {/*<!-- payments tab -->*/}
                        <div className="flex items-center gap-5 px-4 py-4">
                            <span className="material-icons text-primary-blue">account_balance_wallet</span>
                            <p className="flex w-full justify-between font-medium text-gray-500">PAYMENTS</p>
                        </div>
                        <div className="flex flex-col pb-3 border-b text-sm">
                            <a className="p-3 pl-14 hover:bg-blue-50 hover:text-primary-blue flex justify-between pr-6" href="#">Gift Cards <span className="font-medium text-primary-green">₹0</span></a>
                            <a className="p-3 pl-14 hover:bg-blue-50 hover:text-primary-blue" href="#">Saved UPI</a>
                            <a className="p-3 pl-14 hover:bg-blue-50 hover:text-primary-blue" href="#">Saved Cards</a>
                        </div>
                        {/*<!-- payments tab -->*/}

                        {/*<!-- my chats tab -->*/}
                        <div className="flex items-center gap-5 px-4 py-4 border-b">
                            <span className="material-icons text-primary-blue">chat</span>
                            <a className="flex w-full justify-between font-medium text-gray-500 hover:text-primary-blue" href="#">
                                MY CHATS
                                <span className="material-icons">chevron_right</span>
                            </a>
                        </div>
                        {/*<!-- my chats tab -->*/}

                        {/*<!-- my stuff tab -->*/}
                        <div className="flex items-center gap-5 px-4 py-4">
                            <span className="material-icons text-primary-blue">account_balance_wallet</span>
                            <p className="flex w-full justify-between font-medium text-gray-500">MY STUFF</p>
                        </div>
                        <div className="flex flex-col pb-3 border-b text-sm">
                            <a className="p-3 pl-14 hover:bg-blue-50 hover:text-primary-blue" href="#">My Coupons</a>
                            <a className="p-3 pl-14 hover:bg-blue-50 hover:text-primary-blue" href="#">My Reviews & Ratings</a>
                            <a className="p-3 pl-14 hover:bg-blue-50 hover:text-primary-blue" href="#">All Notifications</a>
                            <a className="p-3 pl-14 bg-blue-50 font-medium text-primary-blue" href="#">My Wishlist</a>
                        </div>
                        {/*<!-- my stuff tab -->*/}

                        {/*<!-- logout tab -->*/}
                        <div className="flex items-center gap-5 px-4 py-4 border-b">
                            <span className="material-icons text-primary-blue">power_settings_new</span>
                            <a className="flex w-full justify-between font-medium text-gray-500 hover:text-primary-blue" href="#">
                                Logout
                                <span className="material-icons">chevron_right</span>
                            </a>
                        </div>
                        {/*<!-- logout tab -->*/}

                    </div>
                    {/*<!-- nav tiles -->*/}

                    {/*<!-- frequenty visited tab -->*/}
                    <div className="flex flex-col items-start gap-2 p-4 bg-white rounded-sm shadow">
                        <span className="text-xs font-medium">Frequently Visited:</span>
                        <div className="flex gap-2.5 text-xs text-gray-500">
                            <a href="profile.html">Change Password</a>
                            <a href="orders.html">Track Order</a>
                            <a href="https://www.flipkart.com/helpcentre">Help Center</a>
                        </div>
                    </div>
                    {/*<!-- frequenty visited tab -->*/}
                </div>
                {/*<!-- sidebar column  -->*/}

                {/*<!-- wishlist column -->*/}
                <div className="flex-1 shadow bg-white">
                    {/*<!-- wishlist container -->*/}
                    <div className="flex flex-col">
                        <span className="font-medium text-lg px-4 sm:px-8 py-4 border-b">My Wishlist (26)</span>

                        {/*<!-- wishlist item -->*/}
                        <a className="flex gap-4 items-stretch border-b p-4 sm:pb-8 w-full group" href="#">
                            <div className="w-1/6 h-28 p-1">
                                <img className="h-full w-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/kmmcrrk0/mobile/4/g/a/8-rmx3085-realme-original-imagfgpfdkyc29zc.jpeg?q=70" alt="" />
                            </div>

                            {/*<!-- description -->*/}
                            <div className="flex flex-col gap-5 w-full p-1">
                                {/*<!-- product title -->*/}
                                <div className="flex justify-between items-start sm:pr-5">
                                    <div className="flex flex-col gap-0.5">
                                        <p className="group-hover:text-primary-blue truncate">realme 8 (Cyber Black, 128 GB)</p>
                                        {/*<!-- rating badge -->*/}
                                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                                            <span>(7,345)</span>
                                        </span>
                                        {/*<!-- rating badge -->*/}
                                    </div>
                                    <button className="text-gray-400 hover:text-red-500"><span className="material-icons">delete</span></button>
                                </div>
                                {/*<!-- product title -->*/}

                                {/*<!-- price desc -->*/}
                                <div className="flex items-center gap-2 text-2xl font-medium">
                                    <span>₹16,790</span>
                                    <span className="text-sm text-gray-500 line-through font-normal">₹18,890</span>
                                    <span className="text-sm text-primary-green">15%&nbsp;off</span>
                                </div>
                                {/*<!-- price desc -->*/}

                            </div>
                            {/*<!-- description -->*/}
                        </a>
                        {/*<!-- wishlist item -->*/}
                        {/*<!-- wishlist item -->*/}
                        <a className="flex gap-4 items-stretch border-b p-4 sm:pb-8 w-full group" href="#">
                            <div className="w-1/6 h-28 p-1">
                                <img className="h-full w-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/kmmcrrk0/mobile/4/g/a/8-rmx3085-realme-original-imagfgpfdkyc29zc.jpeg?q=70" alt="" />
                            </div>

                            {/*<!-- description -->*/}
                            <div className="flex flex-col gap-5 w-full p-1">
                                {/*<!-- product title -->*/}
                                <div className="flex justify-between items-start sm:pr-5">
                                    <div className="flex flex-col gap-0.5">
                                        <p className="group-hover:text-primary-blue truncate">realme 8 (Cyber Black, 128 GB)</p>
                                        {/*<!-- rating badge -->*/}
                                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                                            <span>(7,345)</span>
                                        </span>
                                        {/*<!-- rating badge -->*/}
                                    </div>
                                    <button className="text-gray-400 hover:text-red-500"><span className="material-icons">delete</span></button>
                                </div>
                                {/*<!-- product title -->*/}

                                {/*<!-- price desc -->*/}
                                <div className="flex items-center gap-2 text-2xl font-medium">
                                    <span>₹16,790</span>
                                    <span className="text-sm text-gray-500 line-through font-normal">₹18,890</span>
                                    <span className="text-sm text-primary-green">15%&nbsp;off</span>
                                </div>
                                {/*<!-- price desc -->*/}

                            </div>
                            {/*<!-- description -->*/}
                        </a>
                        {/*<!-- wishlist item -->*/}
                        {/*<!-- wishlist item -->*/}
                        <a className="flex gap-4 items-stretch border-b p-4 sm:pb-8 w-full group" href="#">
                            <div className="w-1/6 h-28 p-1">
                                <img className="h-full w-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/kmmcrrk0/mobile/4/g/a/8-rmx3085-realme-original-imagfgpfdkyc29zc.jpeg?q=70" alt="" />
                            </div>

                            {/*<!-- description -->*/}
                            <div className="flex flex-col gap-5 w-full p-1">
                                {/*<!-- product title -->*/}
                                <div className="flex justify-between items-start sm:pr-5">
                                    <div className="flex flex-col gap-0.5">
                                        <p className="group-hover:text-primary-blue truncate">realme 8 (Cyber Black, 128 GB)</p>
                                        {/*<!-- rating badge -->*/}
                                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                                            <span>(7,345)</span>
                                        </span>
                                        {/*<!-- rating badge -->*/}
                                    </div>
                                    <button className="text-gray-400 hover:text-red-500"><span className="material-icons">delete</span></button>
                                </div>
                                {/*<!-- product title -->*/}

                                {/*<!-- price desc -->*/}
                                <div className="flex items-center gap-2 text-2xl font-medium">
                                    <span>₹16,790</span>
                                    <span className="text-sm text-gray-500 line-through font-normal">₹18,890</span>
                                    <span className="text-sm text-primary-green">15%&nbsp;off</span>
                                </div>
                                {/*<!-- price desc -->*/}

                            </div>
                            {/*<!-- description -->*/}
                        </a>
                        {/*<!-- wishlist item -->*/}
                        {/*<!-- wishlist item -->*/}
                        <a className="flex gap-4 items-stretch border-b p-4 sm:pb-8 w-full group" href="#">
                            <div className="w-1/6 h-28 p-1">
                                <img className="h-full w-full object-contain" src="https://rukminim1.flixcart.com/image/312/312/kmmcrrk0/mobile/4/g/a/8-rmx3085-realme-original-imagfgpfdkyc29zc.jpeg?q=70" alt="" />
                            </div>

                            {/*<!-- description -->*/}
                            <div className="flex flex-col gap-5 w-full p-1">
                                {/*<!-- product title -->*/}
                                <div className="flex justify-between items-start sm:pr-5">
                                    <div className="flex flex-col gap-0.5">
                                        <p className="group-hover:text-primary-blue truncate">realme 8 (Cyber Black, 128 GB)</p>
                                        {/*<!-- rating badge -->*/}
                                        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                                            <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">4.3 <i className="material-icons md-12">star</i></span>
                                            <span>(7,345)</span>
                                        </span>
                                        {/*<!-- rating badge -->*/}
                                    </div>
                                    <button className="text-gray-400 hover:text-red-500"><span className="material-icons">delete</span></button>
                                </div>
                                {/*<!-- product title -->*/}

                                {/*<!-- price desc -->*/}
                                <div className="flex items-center gap-2 text-2xl font-medium">
                                    <span>₹16,790</span>
                                    <span className="text-sm text-gray-500 line-through font-normal">₹18,890</span>
                                    <span className="text-sm text-primary-green">15%&nbsp;off</span>
                                </div>
                                {/*<!-- price desc -->*/}

                            </div>
                            {/*<!-- description -->*/}
                        </a>
                        {/*<!-- wishlist item -->*/}


                    </div>
                    {/*<!-- wishlist container -->*/}

                </div>
                {/*<!-- wishlist column -->*/}
            </div>
            {/*<!-- row -->*/}

        </main>









    </>)
}

export default WishList;