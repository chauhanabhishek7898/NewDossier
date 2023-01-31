import React from "react";
import "./Footer.css";
export default function Header(props) {
    return (
        <div className="footer">
            <div className="below-footer">
                <div className="footer_logo">
                    <b className="b-tag">Dossier</b>
                </div>
                <div className="footer_links">
                    <ul>
                        <span style={{ paddingTop: 5 }}>Support</span>
                        <li style={{ paddingTop: 2 }}>About Us</li>
                        <li style={{ paddingTop: 2 }}>Contact Us</li>
                        <li style={{ paddingTop: 2 }}>Privacy Policy</li>
                        <li style={{ paddingTop: 2 }}>Refund and Cancellation Policy</li>
                        <li style={{ paddingTop: 2 }}>Delivery & Shipping Ploicy</li>
                        <li style={{ paddingTop: 2 }}>Terms and Conditions</li>
                        <li style={{ paddingTop: 2 }}>FAQs</li>
                    </ul>
                    <ul>

                        {/* <img src={imageName} /> */}
                        <li><span className="app_image"><img className="image-footer" src={require("../../assets/images/googleplay.png")} alt="Google Play" /></span>
                        </li>
                        <li><span className="app_image"><img className="image-footer" src={require("../../assets/images/AppStore-logo-1.png")} alt="App Store" /></span></li>
                    </ul>
                </div>
                <div className="footer-head">
                    <p className="para-footer">© 2022 Dossier Courier Pvt. Ltd.</p>
                </div>
            </div>

        </div>
    );
}