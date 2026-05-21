import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
    return ( 
          <div className='container p-5'>
            <div className='row text-center'>
                    <h1 className='mt-5 fw-light mb-4 fs-3'>Open a Snaptrade account</h1>
                    <p className='fs-5 fw-light mb-4 text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                    <Link to="/signup" className='btn btn-primary col-lg-2 col-md-4 col-sm-6 col-8 p-2 mx-auto fs-5 mt-2 fw-light d-inline-block text-white' style={{ textDecoration: 'none' }}>
                        Signup Now
                    </Link>
            </div>
        </div>
     );
}

export default OpenAccount;