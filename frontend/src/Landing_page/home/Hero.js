import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center p-5'>
                    <img src='media/images/homehero.png' alt='Hero img' className='mb-5'/>
                    <h1 className='mt-5 fw-light'>Invest in everything</h1>
                    <p className='fs-5 fw-light'>Online platform to invest in stocks, derivatives, mutual funds and more</p>
                    <Link to="/signup" className='btn btn-primary col-lg-2 col-md-4 col-sm-6 col-8 p-2 mx-auto fs-5 mb-5 fw-light d-inline-block text-white' style={{ textDecoration: 'none' }}>
                        Signup Now
                    </Link>
            </div>
        </div>
     );
}

export default Hero;