import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './Landing_page/home/HomePage';
import SignUp from "./Landing_page/sign_up/SignUp";
import About from './Landing_page/about/About';
import Product from "./Landing_page/products/ProductsPage";
import Pricing from "./Landing_page/pricing/PricingPage";
import Support from "./Landing_page/support/SupportPage";
import "./index.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './Landing_page/NavBar';
import Footer from './Landing_page/Footer';
import NotFound from './Landing_page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/pricing' element={<Pricing/>}/>
    <Route path='/support' element={<Support/>}/>
    <Route path='/*' element={<NotFound/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
);
