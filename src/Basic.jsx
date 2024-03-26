import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import DataPage from './DataPage';


function Basic({ takingData, data }) {
  AOS.init();
  let email, name, status, tracking;
  let value_email, value_name, value_status, value_tracking;

  let arr = []



  const handle_Email = (e) => {
    value_email = e.target.value;
    // console.log(value_email);
  }
  const handle_Name = (e) => {
    value_name = e.target.value;
    // console.log(value_name);
  }
  const handle_Status = (e) => {
    value_status = e.target.value;
    // console.log(value_status);
  }
  const handle_Tracking = (e) => {
    value_tracking = e.target.value;
    // console.log(value_tracking);
  }
  let submit = () => {
    email = value_email
    name = value_name
    status = value_status
    tracking = value_tracking
    if (email === undefined || name === undefined || status === undefined || tracking === undefined) {
      alert("Completly fill the form.")
    }
    else if (!email.endsWith("@gmail.com") && !email.endsWith("@hotmail.com") && !email.endsWith("@yahoo.com")) {
      alert("email is wrong.")
    }
    else {
      let obj = {
        id: 1,
        name: name,
        email: email,
        status: status,
        tracking: tracking
      }
      console.log(`Your name is ${name}.\nEmail: ${email}\nStatus: ${status}\nTracking: ${tracking}`)
      arr.push(obj)
    }
    takingData(arr)
  }



  return (
    <>
      <div data-aos="fade-right">
        <h1 className="heading">Basic Information</h1>
        <div className="content">
          <div className='inpt-box' id="email">
            <h2 className="sub-heading">Email</h2>
            <input onInput={(event) => handle_Email(event)} type="text" name="" id="" />
          </div>
          <div className='inpt-box' id="first-name">
            <h2 className="sub-heading">First Name</h2>
            <input type="text" name="" id="" />
          </div>
          <div className='inpt-box' id="last-name">
            <h2 className="sub-heading">Last Name</h2>
            <input type="text" name="" id="" />
          </div>
          <div className='inpt-box' id="full-name">
            <h2 className="sub-heading">Full Name</h2>
            <input onInput={(event) => handle_Name(event)} type="text" name="" id="" />
          </div>
          <div className='inpt-box' id="status">
            <h2 className="sub-heading">Status</h2>
            <input onInput={(event) => handle_Status(event)} type="text" name="" id="" />
          </div>
          <div className='inpt-box' id="tracking">
            <h2 className="sub-heading">Tracking</h2>
            <input onInput={(event) => handle_Tracking(event)} type="text" name="" id="" />
          </div>
        </div>
        <button onClick={() => submit()} className='btn btn-primary submit'>Submit</button>
      </div>
    </>
  )
}

export default Basic
