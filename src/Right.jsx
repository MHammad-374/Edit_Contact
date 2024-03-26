import React, { useState } from 'react'
import { TiHome } from "react-icons/ti";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import Searchbar from './Searchbar';

function Right() {
    const [bgc1, setBgc1] = useState("white")
    const [bgc2, setBgc2] = useState("")

    const select1 = () => {
        setBgc1("white")
        setBgc2("")
    }
    const select2 = () => {
        setBgc1("")
        setBgc2("white")

    }
    

    return (
        <>
            <div className="switchers">
                <div onClick={() => select1()} className="switch" style={{ backgroundColor: bgc1 }}>Group Inputs</div>
                <div onClick={() => select2()} className="switch" style={{ backgroundColor: bgc2 }}>Single Input</div>
            </div>
            <hr />
            <Searchbar />
            <div className="content-box">
                <CgProfile style={{ fontSize: '40px' }} />
                <div className="info">
                    <h5 className="info-heading">Basic Information</h5>
                    <p className='para'>Email, First Name, Last Name, Full Name, Status & Tracking</p>
                </div>
            </div>
            <div className="content-box">
                <TiHome style={{ fontSize: '30px' }} />
                <div className="info">
                    <h5 className="info-heading">Address Information</h5>
                    <p className='para'>Address, City, State, ZIP, Country</p>
                </div>
            </div>
            <div className="content-box">
                <HiBuildingOffice2 style={{ fontSize: '40px' }} />
                <div className="info">
                    <h5 className="info-heading">Company Information</h5>
                    <p className='para'>Company Name, Industry, Department, Title, Role,  Annual Revenue</p>
                </div>
            </div>
        </>
    )
}

export default Right
