import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";

function Searchbar() {
    const [s, setS] = useState("rgb(230, 230, 230)")
    const handleClick = () => {
        setS(' rgb(0, 124, 225)');
    };

    const handleBlur = () => {
        setS(' rgb(230, 230, 230)');
    };
    return (
        <div
            className="search-box"
            style={{ borderColor: s }}
            onClick={handleClick}
            onBlur={handleBlur}
        >
            <IoSearchSharp style={{ fontSize: '22px', margin: "0px 10px" }} />
            <input className='search' type="text" placeholder='Search' />
        </div>
    )
}

export default Searchbar
