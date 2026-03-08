import React from 'react';
function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center p-5'>
                    <img src='media/images/homehero.png' alt='Hero img' className='mb-5'/>
                    <h1 className='mt-5 fw-light'>Invest in everything</h1>
                    <p className='fs-5 fw-light'>Online platform to invest in stocks, derivatives, mutual funds and more</p>
                    <button className='row col-lg-2 col-md-4 col-sm-4 col-4 btn btn-primary p-2 mx-auto fs-5 mb-5 fw-light'>Signup Now</button>
            </div>
        </div>
     );
}

export default Hero;