import React from 'react';
 function Education() {
    return ( 
          <div className='container mt-4'>
            <div className='row'>
                <div className='row col-xl-6 col-lg-12 p-5 mx-auto'>
                    <img src='media/images/education.svg' />
                </div>
                <div className='row col-xl-6 col-lg-12 p-5 mx-auto'>
                    <h2 className='fw-light'>Free and open market education</h2>
                    <p className='mt-3 fw-light'>Varsity, the largest stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='#'>Varsity <i class="fa-solid fa-arrow-right-long"></i></a>
                     <p className='mt-4 fw-light'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='#'>TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
     );
 }
 
 export default Education;