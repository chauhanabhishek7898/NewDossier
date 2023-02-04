import React from 'react'
import "../footer/Footer.css";
import "../main/Main.css";
import "../../style.css";
export default function ContactUs() {
    return (
        <div>



            <section>
                <div class="container-xl">
                    <div class="contact_us_heading">
                        <h1>Contact Us</h1>

                    </div>
                    <div class="contact_us_details">

                        <div class="contact_us_box">
                            <h2>CONTACT US</h2>
                            <p> Dossier Courier Pvt. Ltd.</p>
                            <p> D-46, F.F, Complex Road, Jhandewalan, </p>
                            <p> New Delhi - 110055, India.</p>
                            <p> Mobile Nos: +91-9811665965 / +91-981139344 / +91-7827043008 </p>
                            <p> Email Id: <a href="mailto:admin@dossierexpress.com">admin@dossierexpress.com </a></p>
                            <p> Time: Monday to Friday (10 a.m. to 6 p.m.)</p>

                        </div>
                    </div>
                </div>
            </section>




            <section>
                <div class="pickup">
                    <div class="container-lg pickup_wrap_box">
                        <div class="left_pickup_box">
                            <ul>
                                <li>
                                    <div>
                                        <h3 class="title_heading">Pickup and Drop anywhere within the City</h3>
                                        <p class="title">Choose your pickup & drop location from within the city</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="right_pickup_box">
                            <div class="app_img_box">
                                <p class="title-img">Download the Dossier APP on</p>
                                <span class="app_image"><img src={require("../../assets/images/googleplay.png")} alt="" /></span>
                                <span class="app_image"><img src={require("../../assets/images/AppStore-logo-1.png")} alt="" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section>
                <div class="solutions_box">

                    <div class="container-lg">
                        <h2 class="solution_head solution_head_3">
                            Payment Methods
                        </h2>
                        <ul class="solution_list_2">
                            <li>
                                <div class="list_head">
                                    <span class="list_number">1</span>
                                </div>
                                <div class="list_details">
                                    <div class="list_icon">
                                        <img src={require("../../assets/images/cash.png")} alt="" />
                                    </div>
                                    <p class="list_icon_text">Cash</p>
                                </div>
                            </li>
                            <li>
                                <div class="list_head"><span class="list_number">2</span></div>
                                <div class="list_details">
                                    <div class="list_icon">
                                        <img src={require("../../assets/images/onlinepay.png")} alt="" />
                                    </div>
                                    <p class="list_icon_text">Online Payment</p>
                                </div>
                            </li>

                        </ul>
                    </div>


                </div>
            </section>
        </div>

    )
}
