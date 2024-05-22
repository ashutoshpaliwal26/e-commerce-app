import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './componets/common/footer';
import Header from './componets/common/header';
import Home from './componets/common/home';
import Login from './componets/auth/login';
import Profile from './componets/auth/profile';
import Cart from "./componets/cart/cart";
import Order from "./componets/products/orders";
import Product from './componets/products/products';
import WishList from './componets/products/wishlist';
import NotFound from './componets/common/notFound';

function App(){
  return(<>
    <Router>
      <div>
        <Header/>
      </div>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/orders' element={<Order/>}/>
        <Route exact path='/product' element={<Product/>}/>
        <Route exact path='/wishlist' element={<WishList/>}/>
        <Route element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Router>

    
  
  
  </>)
}

export default App;