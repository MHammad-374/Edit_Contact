import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Address() {
    AOS.init();


    return (
        <>
            <div data-aos="fade-right">
                <h1 className="heading">Address Information</h1>
                <div className="content">
                    <div className='inpt-box' id="address-1">
                        <h2 className="sub-heading">Address 1</h2>
                        <input type="text" name="" id="" />
                    </div>
                    <div className='inpt-box' id="address-2">
                        <h2 className="sub-heading">Address 2</h2>
                        <input type="text" name="" id="" />
                    </div>
                    <div className='inpt-box' id="city">
                        <h2 className="sub-heading">City</h2>
                        <input type="text" name="" id="" />
                    </div>
                    <div className='inpt-box' id="state">
                        <h2 className="sub-heading">State</h2>
                        <input type="text" name="" id="" />
                    </div>
                    <div className='inpt-box' id="zip">
                        <h2 className="sub-heading">ZIP</h2>
                        <input type="text" name="" id="" />
                    </div>
                    <div className='inpt-box' id="country">
                        <h2 className="sub-heading">Country</h2>
                        <input type="text" name="" id="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Address
