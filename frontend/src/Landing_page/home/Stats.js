import React from 'react';
function Stats() {
    return (
        <div className='container'>
            <div className='row p-5'>
                <div className='row col-xl-5 col-lg-12 mx-auto p-5'>
                    <h1 className='fs-3 fw-light mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4 fw-light'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    <h2 className='fs-4 fw-light'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.<a href='#'> Our philosophies.</a></p>
                    <h2 className='fs-4 fw-light'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='fs-4 fw-light'>Do better with money</h2>
                    <p className='text-muted'>With initiatives like <a href='#'>Nudge</a> and <a href='#'>Kill switch</a>,we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='row col-xl-7 col-lg-12 p-5 mx-auto'>
                    <img src='media/images/ecosystem.png' />
                    <div className='row p-5 text-center'>
                        <a href='#' className='fw-light col-sm-8 col-12'>Explore our products<i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href='#' className='fw-light col-sm-4 col-12'>Try Kite demo<i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;