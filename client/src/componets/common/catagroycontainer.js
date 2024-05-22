import React from "react";

const CatagoryContainer = () => {
    return (<>
        <section className="hidden sm:block bg-white mt-10 mb-4 min-w-full px-12 py-1 shadow overflow-hidden">

            {/*<!-- categories container -->*/}
            <div className="flex items-center justify-between mt-4">

                {/*<!-- category -->*/}
                <a className="flex flex-col gap-1 items-center p-2 group" href="#">
                    <div className="h-16 w-16">
                        <img className="h-full w-full object-contain" src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png" alt=""/>
                    </div>
                    <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue">Top Offers</span>
                </a>
                {/*<!-- category -->*/}

                {/*<!-- category -->*/}
                <a className="flex flex-col gap-1 items-center p-2 group" href="#">
                    <div className="h-16 w-16">
                        <img className="h-full w-full object-contain" src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png" alt=""/>
                    </div>
                    <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue">Grocery</span>
                </a>
                {/*<!-- category -->*/}

                {/*<!-- category -->*/}
                <a className="flex flex-col gap-1 items-center p-2 group" href="#">
                    <div className="h-16 w-16">
                        <img className="h-full w-full object-contain" src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png" alt=""/>
                    </div>
                    <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue">Mobiles</span>
                </a>
                {/*<!-- category -->*/}

                {/*<!-- category -->*/}
                <a className="flex flex-col gap-1 items-center p-2 group" href="#">
                    <div className="h-16 w-16">
                        <img className="h-full w-full object-contain" src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png" alt=""/>
                    </div>
                    <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue flex items-center gap-0.5">Fashion <span className="material-icons md-16 group-hover:text-primary-blue">expand_more</span></span>
                </a>
                {/*<!-- category -->*/}

                {/*<!-- category -->*/}
                <a className="flex flex-col gap-1 items-center p-2 group" href="#">
                    <div className="h-16 w-16">
                        <img className="h-full w-full object-contain" src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png" alt=""/>
                    </div>
                    <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue flex items-center gap-0.5">Electronics <span className="material-icons md-16 group-hover:text-primary-blue">expand_more</span></span>
                </a>
                {/*<!-- category -->*/}

                {/*<!-- category -->*/}
                <a className="flex flex-col gap-1 items-center p-2 group" href="#">
                    <div className="h-16 w-16">
                        <img className="h-full w-full object-contain" src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg" alt=""/>
                    </div>
                    <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue flex items-center gap-0.5">Home <span className="material-icons md-16 group-hover:text-primary-blue">expand_more</span></span>
                </a>
                {/*<!-- category -->*/}

                {/*<!-- category -->*/}
                <a className="flex flex-col gap-1 items-center p-2 group" href="#">
                    <div className="h-16 w-16">
                        <img className="h-full w-full object-contain" src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png" alt=""/>
                    </div>
                    <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue flex items-center gap-0.5">Appliances <span className="material-icons md-16 group-hover:text-primary-blue">expand_more</span></span>
                </a>
                {/*<!-- category -->*/}

                {/*<!-- category -->*/}
                <a className="flex flex-col gap-1 items-center p-2 group" href="#">
                    <div className="h-16 w-16">
                        <img className="h-full w-full object-contain" src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png" alt=""/>
                    </div>
                    <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue">Travel</span>
                </a>
                {/*<!-- category -->*/}

                {/*<!-- category -->*/}
                <a className="flex flex-col gap-1 items-center p-2 group" href="#">
                    <div className="h-16 w-16">
                        <img className="h-full w-full object-contain" src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png" alt=""/>
                    </div>
                    <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue flex items-center gap-0.5">Beauty, Toys & More <span className="material-icons md-16 group-hover:text-primary-blue">expand_more</span></span>
                </a>
                {/*<!-- category -->*/}
            </div>
        </section>
        {/*<!-- categories container header -->*/}

    </>)
}

export default CatagoryContainer;