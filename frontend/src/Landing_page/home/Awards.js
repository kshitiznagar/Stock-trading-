import React from 'react';
function Awards() {
    return (
        <div className='container p-5'>
            <div className='row'>
                <div className='row col-xl-6 col-lg-12 p-5 mx-auto'>
                    <img src='media/images/largestBroker.svg' />
                </div>
                <div className='row col-xl-6 col-lg-12 p-5 mx-auto'>
                    <h1 className='fw-light'>Largest stock broker in India</h1>
                    <p className='mt-4 fw-light'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in :</p>
                    <div className='row mt-4'>
                        <div className='col-6 mt-4 fw-light'>
                            <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className='col-6 mt-4 fw-light'>
                            <ul>
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                        <img src='media/images/pressLogos.png' className='mt-5' />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Awards;