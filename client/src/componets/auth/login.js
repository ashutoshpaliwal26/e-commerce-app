import React, {useState} from "react";
import CatagroyContainer from "../common/catagroycontainer";
import axios from "axios";

const Login = () => {

    const [user, setUser] = useState({
        email : '',
        password  : ''
    })

    const handelInput = (e) =>{
        const {name, value} = e.target;
        setUser(prevState =>({
            ...prevState,
            [name] : value
        }))

    }

    const submitForm = async(e) => {
        e.preventDefault();
        try{
            const res = await axios.post('http://localhost:8000/login', user);
            console.log(res);
        }catch(err){
            console.log(err);
        }
    }
    
    return (<>

        <CatagroyContainer/>
    
        <main className="w-full mt-12 sm:mt-0">
            <div className="flex-1 overflow-hidden">

                <div className="flex sm:w-4/6 sm:mt-4 m-auto mb-7 bg-white shadow-lg">
                    {/*<!-- sidebar column  -->*/}
                    <div className="loginSidebar bg-primary-blue p-10 pr-12 hidden sm:flex flex-col gap-4 w-2/5">
                        <h1 className="font-medium text-white text-3xl">Login</h1>
                        <p className="text-gray-200 text-lg">Get access to your Orders, Wishlist and Recommendations</p>
                    </div>
                    {/*<!-- sidebar column  -->*/}

                    {/*<!-- login column -->*/}
                    <div className="flex-1 overflow-hidden">

                        {/*<!-- edit info container -->*/}
                        <div className="text-center py-10 px-14">

                            {/*<!-- input container -->*/}
                            <form action="/" onSubmit={submitForm}>
                                <div className="flex flex-col w-full gap-4">

                                    {/*<!-- email input -->*/}
                                    <div className="flex flex-col gap-1">
                                        <h2 className="text-xs text-primary-grey text-left">Enter Email/Mobile Number</h2>
                                        <input type="email" name="email" value={user.email} onChange={handelInput} id="" placeholder="Enter Email/Mobile Number" className="py-2 outline-none border-b rounded-sm focus:border-primary-blue" required />
                                        <span className="text-xxs text-red-500 font-medium text-left mt-0.5 invisible">Please enter valid Email ID/Mobile number</span>
                                    </div>
                                    {/*<!-- email input -->*/}

                                    {/*<!-- password input -->*/}
                                    <div className="flex flex-col gap-1">
                                        <h2 className="text-xs text-primary-grey text-left">Enter Password</h2>
                                        <input type="text" name="password" value={user.password} onChange={handelInput} id="" placeholder="Enter Password" className="py-2 outline-none border-b rounded-sm focus:border-primary-blue" required />
                                        <span className="text-xxs text-red-500 font-medium text-left mt-0.5 invisible">Please enter Password</span>
                                    </div>
                                    {/*<!-- password input -->*/}

                                    {/*<!-- button container -->*/}
                                    <div className="flex flex-col gap-2.5 mt-2 mb-36">
                                        <p className="text-xs text-primary-grey text-left">By continuing, you agree to Flipkart's <a href="https://www.flipkart.com/pages/terms" className="text-primary-blue"> Terms of Use</a> and <a href="https://www.flipkart.com/pages/privacypolicy" className="text-primary-blue"> Privacy Policy.</a></p>
                                        <button type="submit" className="text-white py-3 w-full bg-primary-orange shadow rounded-sm font-medium">Login</button>
                                    </div>
                                    {/*<!-- button container -->*/}

                                </div>
                            </form>
                            {/*<!-- input container -->*/}

                            <a href="signup.html" className="font-medium text-sm text-primary-blue">New to Flipkart? Create an account</a>
                        </div>
                        {/*<!-- edit info container -->*/}

                    </div>
                    {/*<!-- login column -->*/}
                </div>
                {/*<!-- row -->*/}
            </div>
        </main>

    </>)
}

export default Login;