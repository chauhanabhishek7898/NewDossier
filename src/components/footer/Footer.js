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
                        <span>Support</span>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>Refund and Cancellation Policy</li>
                        <li>Delivery & Shipping Ploicy</li>
                        <li>Terms and Conditions</li>
                        <li>FAQs</li>
                    </ul>
                    <ul>
                        <li><span class="app_image"><img className="image-footer" src="../../assets/images/googleplay.png" alt="" /></span>
                        </li>
                        <li><span class="app_image"><img className="image-footer" src="../../assets/images/AppStore-logo-1.png" alt="" /></span></li>
                    </ul>
                </div>
                <div className="footer-head">
                    <p className="para-footer">© 2022 Dossier Courier Pvt. Ltd.</p>
                </div>
            </div>

        </div>
    );
}