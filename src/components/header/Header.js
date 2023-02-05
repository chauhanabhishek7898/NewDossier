

import React from 'react'
import "./Header.css";
import logo from "../../assets/images/since_1999.png"
import { Link } from "react-router-dom";

// import AboutUs from "../navpages/AboutUs";
// import Home from "../navpages/Home";
// import ContactUs from "../navpages/ContactUs";
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

              {/* <Router>

                <div>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/aboutus" >AboutUs</Link>
                    </li>
                    <li>
                      <Link to="/contactus" >ContactUs</Link>
                    </li>
                  </ul>

                  <hr />
                  <Routes>
                    <Route exact path="/" element={<Home />} component={Home} />
                    <Route path="/about" element={<AboutUs />} component={AboutUs} />
                    <Route path="/contactus" element={<ContactUs />} component={ContactUs} />

                  </Routes>
                </div>
              </Router>; */}

              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about" >AboutUs</Link>
                </li>
                <li>
                  <Link to="/contact" >ContactUs</Link>
                </li>
              </ul>

              {/* <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>
                </li> 
              </ul>  */}
              <div className="btn-sign-up">
                <button className="log-in-buton" >
                  <Link to="/customersignup" >Driver's Signup</Link>

                </button>
                <button className="log-in-buton" >
                  <Link to="/driversignup" >Customer's Signup</Link>

                </button>
                <button className="log-in-buton" >
                  <Link to="/corporatesignup" >Corporate's Signup</Link>

                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

