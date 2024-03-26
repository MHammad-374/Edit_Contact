import { useState } from 'react'
import './App.css'
import './Responsive.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Hamburger from './Hamburger';
import Navbar from './Navbar';
import DataPage from './DataPage';
import Lists from './Lists';
import Basic from './Basic';
import Right from './Right';
import Address from './Address';
import Company from './Company';


function App() {
  const [data, setData] = useState([])
  const takingData = (data) => {
    setData(data);
  };







  return (
    <Router>
      <>
        <Navbar />
        <main>
          <div className="hamburger">
            <Hamburger />
          </div>
          <div className="left">
            <Lists />
          </div>
          <div className="center">
            <Routes>
              <Route path="/data" element={<DataPage data={data} />} />
              <Route path="/" element={<Basic takingData={takingData}/>} />
              <Route path="/address-info" element={<Address />} />
              <Route path="/company-info" element={<Company />} />
            </Routes>
          </div>
          <div className='right'>
            <Right />
          </div>
        </main>
      </>
    </Router>
  )
}

export default App

// company: 'yoo',
// industry: 'moy',
// departmrnt: 'oilive',
// title: "Developer",
// role: "soft",
// revenue: "8908",
// address: '9-32-234',
// city: "lhr",
// state: 'pu',
// zip: '3523',
// country: 'Uk',