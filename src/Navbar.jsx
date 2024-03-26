import React, { useState } from 'react'
import { IoMdSettings } from "react-icons/io";
import { FaImagePortrait } from "react-icons/fa6";
import Searchbar from './Searchbar';



function Navbar() {
  return (
    <nav>
      <h1 className="name">Edit Contact</h1>
      <div className="others">
        <Searchbar />
        <IoMdSettings className='r-icons' style={{ fontSize: '30px', color: '#747694' }} />
        <FaImagePortrait className='r-icons' style={{ fontSize: '30px', color: '#747694' }} />
      </div>
    </nav>
  )
}

export default Navbar
