

import React from 'react'
import "./Header.css";
import logo from "../../assets/images/since_1999.png"

export default function Header(props) {
  return (
    <div className="header">
      <div className="main_headeer">
        <div className="container-xl">
          <div className="top_header">
            <div className="left_header">
              <span>
                <img className="image-footer" src={require("../../assets/images/bottom text logo.png")} alt="Dossier" ></img>
              </span>
              <span className="span-in">
                <img className="image-footer-2" src={logo} alt="Since_1999" />
              </span>
            </div>
            <div className="right_header">
              <div className="blank-div">

              </div>

              {/* <Routes>
              <Route path="/" element={<Home />} />
               <Route exact path="/home" name="Home" element={<Home />} />
                <Route exact path="/about" name="About Us" element={<AboutUs />} />
                <Route exact path="/contact" name="Contact Us" element={<ContactUs />} />

              </Routes> */}

              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>
                </li>
              </ul>
              <div className="btn-sign-up">
                <button className="log-in-buton" >
                  Driver's Signup
                </button>
                <button className="log-in-buton" >
                  Customer's Signup
                </button>
                <button className="log-in-buton" >
                  Corporate's Signup
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

