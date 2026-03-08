import React from 'react';
import NavBar from '../NavBar';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
import Footer from '../Footer';
function ProductPage() {
    return ( 
        <>
        <Hero/>
        <LeftSection/>
        <RightSection/>
        <Universe/>
        </>
     );
}

export default ProductPage;