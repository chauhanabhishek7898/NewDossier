import React from "react";
import "./Main.css";
export default function Header(props) {
  return (
    <div className="main">
      <div>
        <img src={require("../../assets/images/banner.jpg")} alt="Banner" />
      </div>




      <div className="container-xll">
        <div className="delivery_city">
          <div className="delivery_heading">
            <h2 style={{ color: '#000', fontSize: 28 }}>Service Availability In Cities</h2>
          </div>
          <div className="delivery_box">
            <div className="row">
              <div className="in-row">
                <div className="col-xl-3">
                  <img src={require("../../assets/images/delhi.jpg")} alt="" style={{ width: "100%", marginBottom: 10, verticalAlign: "middle", borderStyle: "none" }} />

                </div>
                <div className="col-xl-3">
                  <img src={require("../../assets/images/bengloar.jpg")} alt="" style={{ width: "100%", marginBottom: 10, verticalAlign: "middle", borderStyle: "none" }} />

                </div>
                <div className="col-xl-3">
                  <img src={require("../../assets/images/hydrabad.jpg")} alt="" style={{ width: "100%", marginBottom: 10, verticalAlign: "middle", borderStyle: "none" }} />

                </div>
                <div className="col-xl-3">
                  <img src={require("../../assets/images/kochin.jpg")} alt="" style={{ width: "100%", marginBottom: 10, verticalAlign: "middle", borderStyle: "none" }} />

                </div>
              </div>

              <div className="in-row">
                <div className="col-xl-3">
                  <img src={require("../../assets/images/pune.jpg")} alt="" style={{ width: "100%", marginBottom: 10, verticalAlign: "middle", borderStyle: "none" }} />

                </div>
                <div className="col-xl-3">
                  <img src={require("../../assets/images/chennai.jpg")} alt="" style={{ width: "100%", marginBottom: 10, verticalAlign: "middle", borderStyle: "none" }} />

                </div>
                <div className="col-xl-3">
                  <img src={require("../../assets/images/trivandrum.jpg")} alt="" style={{ width: "100%", marginBottom: 10, verticalAlign: "middle", borderStyle: "none" }} />

                </div>
                <div className="col-xl-3">
                  <img src={require("../../assets/images/kolkata.jpg")} alt="" style={{ width: "100%", marginBottom: 10, verticalAlign: "middle", borderStyle: "none" }} />
                </div>
              </div>

              <div className="col-xl-3">
                <img src={require("../../assets/images/mumbai.jpg")} alt="" style={{ width: "25%", marginBottom: 10, verticalAlign: "middle", borderStyle: "none" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}