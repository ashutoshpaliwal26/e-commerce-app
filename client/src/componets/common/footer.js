import React from "react";


const Footer = () =>{
    return(<>
    
    {/*{/*<!-- footer starts -->*/}
    <footer className="w-full py-1 sm:py-4 px-4 sm:px-12 bg-primary-darkBlue text-white text-xs border-b border-gray-600 flex flex-col sm:flex-row overflow-hidden">
        <div className="w-full sm:w-7/12 flex flex-col sm:flex-row">
        {/* {/*<!-- about column -->*/} 
        <div className="w-full sm:w-1/5 flex flex-col gap-2 my-3 sm:my-6 ml-5">
            <h2 className="text-primary-grey mb-2">ABOUT</h2>
            {/*{/*<!-- links -->*/}
            <a href="https://www.flipkart.com/helpcentre" className="hover:underline">Contact Us</a>
            <a href="https://www.flipkart.com/about-us" className="hover:underline">About Us</a>
            <a href="https://www.flipkartcareers.com" className="hover:underline">Careers</a>
            <a href="https://stories.flipkart.com" className="hover:underline">Flipkart Stories</a>
            <a href="https://stories.flipkart.com/category/top-stories/news" className="hover:underline">Press</a>
            <a href="https://www.flipkartwholesale.com" className="hover:underline">Flipkart Wholesale</a>
            <a href="https://www.flipkart.com/corporate-information" className="hover:underline">Corporate Information</a>
            {/*<!-- links -->*/}
        </div>
        {/*<!-- about column -->*/}

        {/*<!-- help column -->*/}
        <div className="w-full sm:w-1/5 flex flex-col gap-2 my-3 sm:my-6 ml-5">
            <h2 className="text-primary-grey mb-2">HELP</h2>
            {/*<!-- links -->*/}
            <a href="https://www.flipkart.com/pages/payments" className="hover:underline">Payments</a>
            <a href="https://www.flipkart.com/pages/shipping" className="hover:underline">Shipping</a>
            <a href="https://www.flipkart.com/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG" className="hover:underline">Cancellation & Returns</a>
            <a href="https://www.flipkart.com/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG" className="hover:underline">FAQ</a>
            <a href="https://seller.flipkart.com/fiv" className="hover:underline">Report Infringement</a>
            {/*<!-- links -->*/}
        </div>
        {/*<!-- help column -->*/}

        {/*<!-- policy column -->*/}
        <div className="w-full sm:w-1/5 flex flex-col gap-2 my-3 sm:my-6 ml-5">
            <h2 className="text-primary-grey mb-2">POLICY</h2>
            {/*<!-- links -->*/}
            <a href="https://www.flipkart.com/pages/returnpolicy" className="hover:underline">Return Policy</a>
            <a href="https://www.flipkart.com/pages/terms" className="hover:underline">Terms Of Use</a>
            <a href="https://www.flipkart.com/pages/paymentsecurity" className="hover:underline">Security</a>
            <a href="https://www.flipkart.com/pages/privacypolicy" className="hover:underline">Privacy</a>
            <a href="https://www.flipkart.com/sitemap" className="hover:underline">Sitemap</a>
            <a href="https://www.flipkart.com/pages/ewaste-compliance-tnc" className="hover:underline">EPR Compliance</a>
            {/*<!-- links -->*/}
        </div>
        {/*<!-- policy column -->*/}

        {/*<!-- socials column -->*/}
        <div className="w-full sm:w-1/5 flex flex-col gap-2 my-3 sm:my-6 ml-5">
            <h2 className="text-primary-grey mb-2">SOCIAL</h2>
            {/*<!-- links -->*/}
            <a href="https://www.facebook.com/flipkart" className="hover:underline">Facebook</a>
            <a href="https://twitter.com/flipkart" className="hover:underline">Twitter</a>
            <a href="https://www.youtube.com/flipkart" className="hover:underline">YouTube</a>
            {/*<!-- links -->*/}
        </div>
        {/*<!-- socials column -->*/}
        </div>


        <div className="border-gray-600 h-36 w-1 border-l mr-5 mt-6 hidden sm:block"></div>
        <div className="w-full sm:w-5/12 my-6 mx-5 sm:mx-0 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
            <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">Mail Us:</h2>
                <p className="mt-2 leading-5">Flipkart Internet Private Limited,<br/>
                    Buildings Alyssa, Begonia &<br/>                  
                    Clove Embassy Tech Village,<br/>           
                    Outer Ring Road, Devarabeesanahalli Village,<br/>             
                    Bengaluru, 560103,<br/>
                    Karnataka, India
                </p>
            </div>

            <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">Registered Office Address:</h2>
                <p className="mt-2 leading-5">Flipkart Internet Private Limited,<br/>
                    Buildings Alyssa, Begonia &<br/>                   
                    Clove Embassy Tech Village,<br/>                   
                    Outer Ring Road, Devarabeesanahalli Village,<br/>                  
                    Bengaluru, 560103,<br/>                  
                    Karnataka, India <br/>               
                    CIN : U51109KA2012PTC066107<br/>                
                    Telephone: <a className="text-primary-blue" href="tel:18002029898">1800 202 9898</a>
                </p>
            </div>
        </div>

    </footer>
    {/* {/*<!-- footer ends -->*/}
    
    
    </>)
}


export default Footer;