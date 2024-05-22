import React from "react";
import SmallCatagoryContainer from "../common/catagroycontainersmall";

const Profile = () => {
    return (<>
        <SmallCatagoryContainer/>
        {/*<!-- main sections starts -->*/}
        <main className="w-full mt-12 sm:mt-0">

            {/*<!-- row -->*/}
            <div className="flex gap-3.5 sm:w-11/12 sm:mt-4 m-auto mb-7">
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
                            <a className="p-3 pl-14 bg-blue-50 text-primary-blue font-medium" href="profile.html">Profile Information</a>
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
                            <a className="p-3 pl-14 hover:bg-blue-50 hover:text-primary-blue" href="#">My Wishlist</a>
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

                {/*<!-- details column -->*/}
                <div className="flex-1 overflow-hidden shadow bg-white">
                    {/*<!-- edit info container -->*/}
                    <div className="flex flex-col gap-12 m-4 sm:mx-8 sm:my-6">
                        {/*<!-- personal info -->*/}
                        <div className="flex flex-col gap-5 items-start">
                            <span className="font-medium text-lg">Personal Information <span className="text-sm text-primary-blue font-medium ml-8 cursor-pointer" id="editPersonalBtn">Edit</span></span>

                            <div className="flex flex-col sm:flex-row items-center gap-3" id="personalInputs">
                                <div className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed bg-gray-100 focus-within:border-primary-blue">
                                    <label for="fname" className="text-xs text-gray-500">First Name</label>
                                    <input type="text" value="Jhon" className="text-sm outline-none border-none cursor-not-allowed text-gray-500" disabled />
                                </div>
                                <div className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed bg-gray-100 focus-within:border-primary-blue">
                                    <label for="lname" className="text-xs text-gray-500">Last Name</label>
                                    <input type="text" value="Doe" className="text-sm outline-none border-none cursor-not-allowed text-gray-500" disabled />
                                </div>
                                <button className="hidden w-full sm:w-auto px-11 py-3 bg-primary-blue border rounded text-white font-medium hover:bg-blue-600 transition-colors duration-75" id="personalSaveBtn">SAVE</button>
                            </div>

                            {/*<!-- gender -->*/}
                            <div className="flex flex-col gap-2">
                                <h2 className="text-sm">Your Gender</h2>
                                <div className="flex items-center gap-8" id="radioInput">
                                    <div className="flex items-center gap-4 inputs text-gray-500 cursor-not-allowed">
                                        <input type="radio" name="gender" checked id="male" className="h-4 w-4 cursor-not-allowed" disabled />
                                        <label for="male" className="cursor-not-allowed">Male</label>
                                    </div>
                                    <div className="flex items-center gap-4 inputs text-gray-500 cursor-not-allowed">
                                        <input type="radio" name="gender" id="female" className="h-4 w-4 cursor-not-allowed" disabled />
                                        <label for="female" className="cursor-not-allowed">Female</label>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- gender -->*/}

                        </div>
                        {/*<!-- personal info -->*/}

                        {/*<!-- email address info -->*/}
                        <div className="flex flex-col gap-5 items-start">
                            <span className="font-medium text-lg">Email Address
                                <span className="text-sm text-primary-blue font-medium ml-3 sm:ml-8 cursor-pointer" id="emailEditBtn">Edit</span>
                                <a className="text-sm text-primary-blue font-medium ml-3 sm:ml-8" href="#">Change Password</a>
                            </span>

                            <div className="flex items-center gap-3">
                                <div className="flex flex-col gap-0.5 sm:w-64 px-3 py-1.5 rounded-sm border bg-gray-100 cursor-not-allowed focus-within:border-primary-blue" id="emailInputs">
                                    <label for="email" className="text-xs text-gray-500">Email Address</label>
                                    <input type="email" value="jhondoe@gmail.com" className="text-sm outline-none border-none cursor-not-allowed text-gray-500" disabled />
                                </div>
                                <button className="hidden flex-1 px-11 py-3 bg-primary-blue border rounded text-white font-medium hover:bg-blue-600 transition-colors duration-75" id="emailSaveBtn">SAVE</button>
                            </div>

                        </div>
                        {/*<!-- email address info -->*/}

                        {/*<!-- mobile number info -->*/}
                        <div className="flex flex-col gap-5 items-start">
                            <span className="font-medium text-lg">Mobile Number
                                <span className="text-sm text-primary-blue font-medium ml-3 sm:ml-8 cursor-pointer" id="mobEditBtn">Edit</span>
                            </span>

                            <div className="flex items-center gap-3">
                                <div className="flex flex-col gap-0.5 sm:w-64 px-3 py-1.5 rounded-sm border bg-gray-100 cursor-not-allowed focus-within:border-primary-blue" id="mobInputs">
                                    <label for="phone" className="text-xs text-gray-500">Mobile Number</label>
                                    <input type="tel" value="7894563214" className="text-sm outline-none border-none text-gray-500 cursor-not-allowed" disabled />
                                </div>
                                <button className="hidden px-11 py-3 bg-primary-blue border rounded text-white font-medium hover:bg-blue-600 transition-colors duration-75" id="mobSaveBtn">SAVE</button>
                            </div>

                        </div>
                        {/*<!-- mobile number info -->*/}

                        {/*<!-- faqs -->*/}
                        <div className="flex flex-col gap-4 mt-4">
                            <span className="font-medium text-lg mb-2">FAQS</span>
                            <h4 className="text-sm font-medium">What happens when I update my email address (or mobile number)?</h4>
                            <p className="text-sm">Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>

                            <h4 className="text-sm font-medium">When will my Flipkart account be updated with the new email address (or mobile number)?</h4>
                            <p className="text-sm">It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>

                            <h4 className="text-sm font-medium">What happens to my existing Flipkart account when I update my email address (or mobile number)?</h4>
                            <p className="text-sm">Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.</p>

                            <h4 className="text-sm font-medium">Does my Seller account get affected when I update my email address?</h4>
                            <p className="text-sm">Flipkart has a 'single sign-on' policy. Any changes will reflect in your Seller account also.</p>

                        </div>
                        {/*<!-- faqs -->*/}

                        {/*<!-- deactivate account -->*/}
                        <a className="text-sm text-primary-blue font-medium" href="#">Deactivate Account</a>
                        {/*<!-- deactivate account -->*/}
                    </div>
                    {/*<!-- edit info container -->*/}

                    <img className="w-full object-contain" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/myProfileFooter_4e9fe2.png" alt="" />
                </div>
                {/*<!-- details column -->*/}
            </div>
            {/*<!-- row -->*/}

        </main>
        {/*<!-- main sections starts -->*/}

    </>)
}

export default Profile;