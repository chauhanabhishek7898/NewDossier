import React from "react";
import "./Main.css";
export default function Header(props) {
  return (
    <div className="main">
     <div>
      <img src={require("../../assets/images/banner.jpg")} alt="Banner"/>
     </div>
    </div>
  );
}