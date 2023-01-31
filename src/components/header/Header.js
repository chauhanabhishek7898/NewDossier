

import React from "react";
import "./Header.css";
export default function Header(props) {
  return (
    <div className="header">
      <div className="main_headeer">
        <div className="container-xl">
          <div className="top_header">
            <div className="left_header">
              <span>
                <img className="image-footer" src="../../assets/images/bottom text logo.png" alt="" />
              </span>
              <span className="span-in">
                <img className="image-footer" src="../../assets/images/since_1999.png" alt="" />
              </span>
            </div>
            <div className="right_header">
              <div className="blank-div">

              </div>
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