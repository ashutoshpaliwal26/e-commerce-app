import React from "react";

const Cart = () => {
    return (<>


        {/*<!-- main sections starts -->*/}
        <main className="w-full mt-20">

            {/*<!-- row -->*/}
            <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">

                {/*<!-- cart column -->*/}
                <div className="flex-1">

                    {/*<!-- cart items container -->*/}
                    <div className="flex flex-col shadow bg-white">
                        <span className="font-medium text-lg px-2 sm:px-8 py-4 border-b">My Cart (2)</span>

                        {/*<!-- cart item -->*/}
                        <div className="flex flex-col gap-3 py-5 pl-2 sm:pl-6 border-b overflow-hidden">

                            <div className="flex flex-col sm:flex-row gap-5 items-stretch w-full" href="#">
                                {/*<!-- product image -->*/}
                                <div className="w-full sm:w-1/6 h-28 flex-shrink-0 sm:flex-shrink">
                                    <img className="h-full w-full object-contain" src="https://rukminim1.flixcart.com/image/224/224/kh9gbrk0/computer/e/6/d/asus-na-thin-and-light-laptop-original-imafxbj7gbsraqzk.jpeg" alt="" />
                                </div>
                                {/*<!-- product image -->*/}

                                {/*<!-- description -->*/}
                                <div className="flex flex-col sm:gap-5 w-full p-1 pr-6">
                                    {/*<!-- product title -->*/}
                                    <div className="flex flex-col sm:flex-row justify-between items-start pr-5 gap-1 sm:gap-0">
                                        <div className="flex flex-col gap-0.5 w-11/12 sm:w-3/5">
                                            <p className="truncate">realme 8 (Cyber Black, 128 GB) realme 8 (CyberBlack, 128 GB)</p>
                                            <span className="text-sm text-gray-500">Seller:RetailNet</span>
                                        </div>

                                        <div className="flex flex-col sm:gap-2">
                                            <p className="text-sm">Delivery by Mon Sep 27 | <span className="text-primary-green">Free</span> <span className="line-through">₹40</span></p>
                                            <span className="text-xs text-gray-500">7 Days Replacement Policy</span>
                                        </div>

                                    </div>
                                    {/*<!-- product title -->*/}

                                    {/*<!-- price desc -->*/}
                                    <div className="flex items-baseline gap-2 text-xl font-medium">
                                        <span>₹16,790</span>
                                        <span className="text-sm text-gray-500 line-through font-normal">₹18,890</span>
                                        <span className="text-sm text-primary-green">15%&nbsp;off</span>
                                    </div>
                                    {/*<!-- price desc -->*/}

                                </div>
                                {/*<!-- description -->*/}
                            </div>

                            {/*<!-- save for later -->*/}
                            <div className="flex justify-evenly sm:justify-start sm:gap-6">
                                {/*<!-- quantity -->*/}
                                <div className="flex gap-1 items-center">
                                    <div className="w-7 h-7 text-3xl font-light bg-gray-50 rounded-full border p-1 flex items-center justify-center cursor-pointer" id="qtyDown">-</div>
                                    <input type="text" className="w-11 border outline-none text-center rounded-sm py-0.5 font-medium text-sm" id="qtyInput" value="1" disabled/>
                                        <div className="w-7 h-7 text-xl font-light bg-gray-50 rounded-full border p-1 flex items-center justify-center cursor-pointer" id="qtyUp">+</div>
                                </div>
                                {/*<!-- quantity -->*/}
                                <button className="font-medium hover:text-primary-blue">SAVE FOR LATER</button>
                                <button className="font-medium hover:text-primary-blue">REMOVE</button>
                            </div>
                            {/*<!-- save for later -->*/}

                        </div>
                        {/*<!-- cart item -->*/}

                        {/*<!-- cart item -->*/}
                        <div className="flex flex-col gap-3 py-5 pl-2 sm:pl-6 border-b overflow-hidden">

                            <div className="flex flex-col sm:flex-row gap-5 items-stretch w-full" href="#">
                                {/*<!-- product image -->*/}
                                <div className="w-full sm:w-1/6 h-28 flex-shrink-0 sm:flex-shrink">
                                    <img className="h-full w-full object-contain" src="https://rukminim1.flixcart.com/image/224/224/kh9gbrk0/computer/e/6/d/asus-na-thin-and-light-laptop-original-imafxbj7gbsraqzk.jpeg" alt="" />
                                </div>
                                {/*<!-- product image -->*/}

                                {/*<!-- description -->*/}
                                <div className="flex flex-col sm:gap-5 w-full p-1 pr-6">
                                    {/*<!-- product title -->*/}
                                    <div className="flex flex-col sm:flex-row justify-between items-start pr-5 gap-1 sm:gap-0">
                                        <div className="flex flex-col gap-0.5 w-11/12 sm:w-3/5">
                                            <p className="truncate">realme 8 (Cyber Black, 128 GB) realme 8 (CyberBlack, 128 GB)</p>
                                            <span className="text-sm text-gray-500">Seller:RetailNet</span>
                                        </div>

                                        <div className="flex flex-col sm:gap-2">
                                            <p className="text-sm">Delivery by Mon Sep 27 | <span className="text-primary-green">Free</span> <span className="line-through">₹40</span></p>
                                            <span className="text-xs text-gray-500">7 Days Replacement Policy</span>
                                        </div>

                                    </div>
                                    {/*<!-- product title -->*/}

                                    {/*<!-- price desc -->*/}
                                    <div className="flex items-baseline gap-2 text-xl font-medium">
                                        <span>₹16,790</span>
                                        <span className="text-sm text-gray-500 line-through font-normal">₹18,890</span>
                                        <span className="text-sm text-primary-green">15%&nbsp;off</span>
                                    </div>
                                    {/*<!-- price desc -->*/}

                                </div>
                                {/*<!-- description -->*/}
                            </div>

                            {/*<!-- save for later -->*/}
                            <div className="flex justify-evenly sm:justify-start sm:gap-6">
                                {/*<!-- quantity -->*/}
                                <div className="flex gap-1 items-center">
                                    <div className="w-7 h-7 text-3xl font-light bg-gray-50 rounded-full border p-1 flex items-center justify-center cursor-pointer" id="qtyDown">-</div>
                                    <input type="text" className="w-11 border outline-none text-center rounded-sm py-0.5 font-medium text-sm" id="qtyInput" value="1" disabled/>
                                        <div className="w-7 h-7 text-xl font-light bg-gray-50 rounded-full border p-1 flex items-center justify-center cursor-pointer" id="qtyUp">+</div>
                                </div>
                                {/*<!-- quantity -->*/}
                                <button className="font-medium hover:text-primary-blue">SAVE FOR LATER</button>
                                <button className="font-medium hover:text-primary-blue">REMOVE</button>
                            </div>
                            {/*<!-- save for later -->*/}

                        </div>
                        {/*<!-- cart item -->*/}

                        {/*<!-- cart item -->*/}
                        <div className="flex flex-col gap-3 py-5 pl-2 sm:pl-6 border-b overflow-hidden">

                            <div className="flex flex-col sm:flex-row gap-5 items-stretch w-full" href="#">
                                {/*<!-- product image -->*/}
                                <div className="w-full sm:w-1/6 h-28 flex-shrink-0 sm:flex-shrink">
                                    <img className="h-full w-full object-contain" src="https://rukminim1.flixcart.com/image/224/224/kh9gbrk0/computer/e/6/d/asus-na-thin-and-light-laptop-original-imafxbj7gbsraqzk.jpeg" alt="" />
                                </div>
                                {/*<!-- product image -->*/}

                                {/*<!-- description -->*/}
                                <div className="flex flex-col sm:gap-5 w-full p-1 pr-6">
                                    {/*<!-- product title -->*/}
                                    <div className="flex flex-col sm:flex-row justify-between items-start pr-5 gap-1 sm:gap-0">
                                        <div className="flex flex-col gap-0.5 w-11/12 sm:w-3/5">
                                            <p className="truncate">realme 8 (Cyber Black, 128 GB) realme 8 (CyberBlack, 128 GB)</p>
                                            <span className="text-sm text-gray-500">Seller:RetailNet</span>
                                        </div>

                                        <div className="flex flex-col sm:gap-2">
                                            <p className="text-sm">Delivery by Mon Sep 27 | <span className="text-primary-green">Free</span> <span className="line-through">₹40</span></p>
                                            <span className="text-xs text-gray-500">7 Days Replacement Policy</span>
                                        </div>

                                    </div>
                                    {/*<!-- product title -->*/}

                                    {/*<!-- price desc -->*/}
                                    <div className="flex items-baseline gap-2 text-xl font-medium">
                                        <span>₹16,790</span>
                                        <span className="text-sm text-gray-500 line-through font-normal">₹18,890</span>
                                        <span className="text-sm text-primary-green">15%&nbsp;off</span>
                                    </div>
                                    {/*<!-- price desc -->*/}

                                </div>
                                {/*<!-- description -->*/}
                            </div>

                            {/*<!-- save for later -->*/}
                            <div className="flex justify-evenly sm:justify-start sm:gap-6">
                                {/*<!-- quantity -->*/}
                                <div className="flex gap-1 items-center">
                                    <div className="w-7 h-7 text-3xl font-light bg-gray-50 rounded-full border p-1 flex items-center justify-center cursor-pointer" id="qtyDown">-</div>
                                    <input type="text" className="w-11 border outline-none text-center rounded-sm py-0.5 font-medium text-sm" id="qtyInput" value="1" disabled/>
                                        <div className="w-7 h-7 text-xl font-light bg-gray-50 rounded-full border p-1 flex items-center justify-center cursor-pointer" id="qtyUp">+</div>
                                </div>
                                {/*<!-- quantity -->*/}
                                <button className="font-medium hover:text-primary-blue">SAVE FOR LATER</button>
                                <button className="font-medium hover:text-primary-blue">REMOVE</button>
                            </div>
                            {/*<!-- save for later -->*/}

                        </div>
                        {/*<!-- cart item -->*/}
                        {/*<!-- cart item -->*/}
                        <div className="flex flex-col gap-3 py-5 pl-2 sm:pl-6 border-b overflow-hidden">

                            <div className="flex flex-col sm:flex-row gap-5 items-stretch w-full" href="#">
                                {/*<!-- product image -->*/}
                                <div className="w-full sm:w-1/6 h-28 flex-shrink-0 sm:flex-shrink">
                                    <img className="h-full w-full object-contain" src="https://rukminim1.flixcart.com/image/224/224/kh9gbrk0/computer/e/6/d/asus-na-thin-and-light-laptop-original-imafxbj7gbsraqzk.jpeg" alt="" />
                                </div>
                                {/*<!-- product image -->*/}

                                {/*<!-- description -->*/}
                                <div className="flex flex-col sm:gap-5 w-full p-1 pr-6">
                                    {/*<!-- product title -->*/}
                                    <div className="flex flex-col sm:flex-row justify-between items-start pr-5 gap-1 sm:gap-0">
                                        <div className="flex flex-col gap-0.5 w-11/12 sm:w-3/5">
                                            <p className="truncate">realme 8 (Cyber Black, 128 GB) realme 8 (CyberBlack, 128 GB)</p>
                                            <span className="text-sm text-gray-500">Seller:RetailNet</span>
                                        </div>

                                        <div className="flex flex-col sm:gap-2">
                                            <p className="text-sm">Delivery by Mon Sep 27 | <span className="text-primary-green">Free</span> <span className="line-through">₹40</span></p>
                                            <span className="text-xs text-gray-500">7 Days Replacement Policy</span>
                                        </div>

                                    </div>
                                    {/*<!-- product title -->*/}

                                    {/*<!-- price desc -->*/}
                                    <div className="flex items-baseline gap-2 text-xl font-medium">
                                        <span>₹16,790</span>
                                        <span className="text-sm text-gray-500 line-through font-normal">₹18,890</span>
                                        <span className="text-sm text-primary-green">15%&nbsp;off</span>
                                    </div>
                                    {/*<!-- price desc -->*/}

                                </div>
                                {/*<!-- description -->*/}
                            </div>

                            {/*<!-- save for later -->*/}
                            <div className="flex justify-evenly sm:justify-start sm:gap-6">
                                {/*<!-- quantity -->*/}
                                <div className="flex gap-1 items-center">
                                    <div className="w-7 h-7 text-3xl font-light bg-gray-50 rounded-full border p-1 flex items-center justify-center cursor-pointer" id="qtyDown">-</div>
                                    <input type="text" className="w-11 border outline-none text-center rounded-sm py-0.5 font-medium text-sm" id="qtyInput" value="1" disabled/>
                                        <div className="w-7 h-7 text-xl font-light bg-gray-50 rounded-full border p-1 flex items-center justify-center cursor-pointer" id="qtyUp">+</div>
                                </div>
                                {/*<!-- quantity -->*/}
                                <button className="font-medium hover:text-primary-blue">SAVE FOR LATER</button>
                                <button className="font-medium hover:text-primary-blue">REMOVE</button>
                            </div>
                            {/*<!-- save for later -->*/}

                        </div>
                        {/*<!-- cart item -->*/}
                        {/*<!-- cart item -->*/}
                        <div className="flex flex-col gap-3 py-5 pl-2 sm:pl-6 border-b overflow-hidden">

                            <div className="flex flex-col sm:flex-row gap-5 items-stretch w-full" href="#">
                                {/*<!-- product image -->*/}
                                <div className="w-full sm:w-1/6 h-28 flex-shrink-0 sm:flex-shrink">
                                    <img className="h-full w-full object-contain" src="https://rukminim1.flixcart.com/image/224/224/kh9gbrk0/computer/e/6/d/asus-na-thin-and-light-laptop-original-imafxbj7gbsraqzk.jpeg" alt="" />
                                </div>
                                {/*<!-- product image -->*/}

                                {/*<!-- description -->*/}
                                <div className="flex flex-col sm:gap-5 w-full p-1 pr-6">
                                    {/*<!-- product title -->*/}
                                    <div className="flex flex-col sm:flex-row justify-between items-start pr-5 gap-1 sm:gap-0">
                                        <div className="flex flex-col gap-0.5 w-11/12 sm:w-3/5">
                                            <p className="truncate">realme 8 (Cyber Black, 128 GB) realme 8 (CyberBlack, 128 GB)</p>
                                            <span className="text-sm text-gray-500">Seller:RetailNet</span>
                                        </div>

                                        <div className="flex flex-col sm:gap-2">
                                            <p className="text-sm">Delivery by Mon Sep 27 | <span className="text-primary-green">Free</span> <span className="line-through">₹40</span></p>
                                            <span className="text-xs text-gray-500">7 Days Replacement Policy</span>
                                        </div>

                                    </div>
                                    {/*<!-- product title -->*/}

                                    {/*<!-- price desc -->*/}
                                    <div className="flex items-baseline gap-2 text-xl font-medium">
                                        <span>₹16,790</span>
                                        <span className="text-sm text-gray-500 line-through font-normal">₹18,890</span>
                                        <span className="text-sm text-primary-green">15%&nbsp;off</span>
                                    </div>
                                    {/*<!-- price desc -->*/}

                                </div>
                                {/*<!-- description -->*/}
                            </div>

                            {/*<!-- save for later -->*/}
                            <div className="flex justify-evenly sm:justify-start sm:gap-6">
                                {/*<!-- quantity -->*/}
                                <div className="flex gap-1 items-center">
                                    <div className="w-7 h-7 text-3xl font-light bg-gray-50 rounded-full border p-1 flex items-center justify-center cursor-pointer" id="qtyDown">-</div>
                                    <input type="text" className="w-11 border outline-none text-center rounded-sm py-0.5 font-medium text-sm" id="qtyInput" value="1" disabled/>
                                        <div className="w-7 h-7 text-xl font-light bg-gray-50 rounded-full border p-1 flex items-center justify-center cursor-pointer" id="qtyUp">+</div>
                                </div>
                                {/*<!-- quantity -->*/}
                                <button className="font-medium hover:text-primary-blue">SAVE FOR LATER</button>
                                <button className="font-medium hover:text-primary-blue">REMOVE</button>
                            </div>
                            {/*<!-- save for later -->*/}

                        </div>
                        {/*<!-- cart item -->*/}

                        {/*<!-- place order btn -->*/}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-2 sm:px-6 py-4 gap-2 sm:gap-0">
                            <div className="flex flex-col gap-1">
                                <p className="font-medium">Delivery Address :</p>
                                <span className="text-sm">B-106, Shreenathji Park, Chanod, Vapi, Gujarat - <span className="font-medium">396195</span></span>
                            </div>
                            <button className="w-full sm:w-auto px-16 py-3 font-medium text-white bg-primary-orange shadow rounded-sm">PLACE ORDER</button>
                        </div>
                        {/*<!-- place order btn -->*/}

                    </div>
                    {/*<!-- cart items container -->*/}

                    {/*<!-- saved for later items container -->*/}
                    <div className="flex flex-col mt-5 shadow bg-white">
                        <span className="font-medium text-lg px-2 sm:px-8 py-4 border-b">Saved For Later (9)</span>

                        {/*<!-- saved for later item -->*/}
                        <div className="flex flex-col gap-3 py-5 pl-2 sm:pl-6 border-b">

                            <div className="flex flex-col sm:flex-row gap-5 items-stretch w-full" href="#">
                                {/*<!-- product image -->*/}
                                <div className="flex-shrink-0 sm:flex-shrink w-full sm:w-1/6 h-28">
                                    <img className="h-full w-full object-contain" src="https://rukminim1.flixcart.com/image/224/224/kh9gbrk0/computer/e/6/d/asus-na-thin-and-light-laptop-original-imafxbj7gbsraqzk.jpeg" alt="" />
                                </div>
                                {/*<!-- product image -->*/}

                                {/*<!-- description -->*/}
                                <div className="flex flex-col gap-1 sm:gap-5 w-full p-1 pr-6">
                                    {/*<!-- product title -->*/}
                                    <div className="flex justify-between items-start pr-5">
                                        <div className="flex flex-col gap-0.5 w-11/12 sm:w-3/5">
                                            <p className="truncate">realme 8 (Cyber Black, 128 GB) realme 8 (CyberBlack, 128 GB)</p>
                                            <span className="text-sm text-gray-500">Seller:RetailNet</span>
                                        </div>
                                    </div>
                                    {/*<!-- product title -->*/}

                                    {/*<!-- price desc -->*/}
                                    <div className="flex items-baseline gap-2 text-xl font-medium">
                                        <span>₹16,790</span>
                                        <span className="text-sm text-gray-500 line-through font-normal">₹18,890</span>
                                        <span className="text-sm text-primary-green">15%&nbsp;off</span>
                                    </div>
                                    {/*<!-- price desc -->*/}

                                </div>
                                {/*<!-- description -->*/}
                            </div>

                            {/*<!-- move to cart -->*/}
                            <div className="flex justify-evenly sm:justify-start sm:gap-6">
                                {/*<!-- quantity -->*/}
                                <div className="flex gap-1 items-center">
                                    <div className="w-7 h-7 text-3xl font-light bg-gray-50 rounded-full border p-1 flex items-center justify-center cursor-pointer">-</div>
                                    <input type="text" className="w-11 border outline-none text-center rounded-sm py-0.5 font-medium text-sm" id="qtyInput" disabled/>
                                        <div className="w-7 h-7 text-xl font-light bg-gray-50 rounded-full border p-1 flex items-center justify-center cursor-pointer">+</div>
                                </div>
                                {/*<!-- quantity -->*/}
                                <button className="font-medium hover:text-primary-blue">MOVE TO CART</button>
                                <button className="font-medium hover:text-primary-blue">REMOVE</button>
                            </div>
                            {/*<!-- move to cart -->*/}

                        </div>
                        {/*<!-- saved for later item -->*/}

                    </div>
                    {/*<!-- saved for later container -->*/}

                </div>
                {/*<!-- cart column -->*/}

                {/*<!-- price sidebar column  -->*/}
                <div className="flex sticky top-16 sm:h-screen flex-col sm:w-4/12 sm:px-1">

                    {/*<!-- nav tiles -->*/}
                    <div className="flex flex-col bg-white rounded-sm shadow">
                        <h1 className="px-6 py-3 border-b font-medium text-gray-500">PRICE DETAILS</h1>

                        <div className="flex flex-col gap-4 p-6 pb-3">
                            <p className="flex justify-between">Price (1 item) <span>₹85,988</span></p>
                            <p className="flex justify-between">Discount <span className="text-primary-green">- ₹10,000</span></p>
                            <p className="flex justify-between">Delivery Charges <span className="text-primary-green">FREE</span></p>

                            <div className="border border-dashed"></div>
                            <p className="flex justify-between text-lg font-medium">Total Amount <span>₹75,998</span></p>
                            <div className="border border-dashed"></div>

                            <p className="font-medium text-primary-green">You will save ₹10,000 on this order</p>

                        </div>

                    </div>
                    {/*<!-- nav tiles -->*/}

                </div>
                {/*<!-- price sidebar column  -->*/}
            </div>
            {/*<!-- row -->*/}

        </main>
        {/*<!-- main sections ends -->*/}






    </>)
}

export default Cart;