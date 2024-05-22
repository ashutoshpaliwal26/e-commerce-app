import React from "react";

const SmallCatagoryContainer = () => {
    return (<>
        {/*<!-- categories container header -->*/}
    <section className="hidden sm:block bg-white w-full px-2 sm:px-12 shadow overflow-hidden border-b mt-14">

        {/*<!-- categories container -->*/}
        <div className="flex items-center justify-between p-0.5">

            {/*<!-- categories -->*/}
            <a href="#" className="text-sm p-2 text-gray-800 font-medium hover:text-primary-blue flex items-center gap-0.5 group">Electronics <span className="material-icons md-16 text-gray-400 group-hover:text-primary-blue">expand_more</span></a>
            <a href="#" className="text-sm p-2 text-gray-800 font-medium hover:text-primary-blue flex items-center gap-0.5 group">TVs & Appliances <span className="material-icons md-16 text-gray-400 group-hover:text-primary-blue">expand_more</span></a>
            <a href="#" className="text-sm p-2 text-gray-800 font-medium hover:text-primary-blue flex items-center gap-0.5 group">Men <span className="material-icons md-16 text-gray-400 group-hover:text-primary-blue">expand_more</span></a>
            <a href="#" className="text-sm p-2 text-gray-800 font-medium hover:text-primary-blue flex items-center gap-0.5 group">Women <span className="material-icons md-16 text-gray-400 group-hover:text-primary-blue">expand_more</span></a>
            <a href="#" className="text-sm p-2 text-gray-800 font-medium hover:text-primary-blue flex items-center gap-0.5 group">Baby & Kids <span className="material-icons md-16 text-gray-400 group-hover:text-primary-blue">expand_more</span></a>
            <a href="#" className="text-sm p-2 text-gray-800 font-medium hover:text-primary-blue flex items-center gap-0.5 group">Home & Furniture <span className="material-icons md-16 text-gray-400 group-hover:text-primary-blue">expand_more</span></a>
            <a href="#" className="text-sm p-2 text-gray-800 font-medium hover:text-primary-blue flex items-center gap-0.5 group">Sports, Books & More <span className="material-icons md-16 text-gray-400 group-hover:text-primary-blue">expand_more</span></a>
            <a href="https://www.flipkart.com/travel/flights?otracker=nmenu_Flights" className="text-sm p-2 text-gray-800 font-medium hover:text-primary-blue">Flights</a>
            <a href="https://www.flipkart.com/offers-store" className="text-sm p-2 text-gray-800 font-medium hover:text-primary-blue">Offer Zone</a>
            <a href="https://www.flipkart.com/grocery-supermart-store?marketplace=GROCERY&otracker=nmenu_Grocery" className="text-sm p-2 text-gray-800 font-medium hover:text-primary-blue">Grocery</a>
            {/*<!-- categories -->*/}

        </div>
    </section >
        {/*<!-- categories container header -->*/ }
    
    
    
    </>)
}

export default SmallCatagoryContainer;