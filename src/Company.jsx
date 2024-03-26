import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Company() {
    AOS.init();

    return (
        <>
            <div data-aos="fade-right">

                <h1 className="heading">Company Information</h1>
                <div className="content">
                    <div className='inpt-box' id="company">
                        <h2 className="sub-heading">Company</h2>
                        <input type="text" name="" id="" />
                    </div>
                    <div className='inpt-box' id="industry">
                        <h2 className="sub-heading">Industry</h2>
                        <input type="text" name="" id="" />
                    </div>
                    <div className='inpt-box' id="department">
                        <h2 className="sub-heading">Department</h2>
                        <input type="text" name="" id="" />
                    </div>
                    <div className='inpt-box' id="title">
                        <h2 className="sub-heading">Title</h2>
                        <input type="text" name="" id="" />
                    </div>
                    <div className='inpt-box' id="role">
                        <h2 className="sub-heading">Role</h2>
                        <input type="text" name="" id="" />
                    </div>
                    <div className='inpt-box' id="revenue">
                        <h2 className="sub-heading">Annual Revenue</h2>
                        <input type="text" name="" id="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Company
