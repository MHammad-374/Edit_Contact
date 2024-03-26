import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import Lists from './Lists';


function Hamburger() {
    return (
        <>
            <div className="icon" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                <RxHamburgerMenu style={{ fontSize: '28px', cursor: "pointer" }} />
            </div>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Edit Contact</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body m-20">
                    <Lists />
                </div>
            </div>
        </>
    )
}

export default Hamburger
