import React from 'react'
import "../footer/Footer.css";
import "../main/Main.css";
import "../../style.css";
export default function AboutUs() {
  return (
    <div >



      <section>
        <div class="container-lg terms_box">
          <div class="terms_head">
            <h1>About Us</h1>
          </div>

          <div class="term_details">
            <p> We DOSSIER take this opportunity to introduce ourselves one of the leading Messenger / Intra
              City Urgent service providers for the Pickup & Delivery of valuable documents on call basis
              services for the past 22 years to our many customers like, SOTC Business/Leisure Travels, BCD
              Travels, American Express GBT Travel Division & Card Division etc.</p>
            <p> Dossier is fully compliance Company. We provide PAN INDIA services, and our operation is
              fully equipped at Mumbai, Chennai, Bangalore, Hyderabad, Pune, Cochin, Trivandrum and
              Delhi NCR locations. We hereby mention our company profile for your record/reference.</p>
            <p style={{ marginBottom: 0 }}><b>Name:</b> Dossier Courier Pvt. Ltd.,</p>
            <p><b> Address:</b> D-46, F.F. Complex, Jhandewalan, New Delhi-110055. India</p>
            <p style={{ marginBottom: 0 }}><b style={{ fontSize: 13 }}>Contact Persons:</b><br />
              <span style={{ fontSize: 13 }}>Sunil Shukla</span>
              <br />Mobile No.: +91-9811665965
              <br />Email Id: <a href="mailto:skshukla@dossierexpress.com" style={{ fontSize: 12 }}>skshukla@dossierexpress.com</a>
            </p>
            <p><span style={{ fontSize: 13, marginTop: 10, display: 'inline-flex' }} >B. Ganesh</span>
              <br /> Mobile No.: +91-9811319344
              <br />Email Id: <a href="mailto:ganesh@dossierexpress.com" style={{ fontSize: 13 }}>ganesh@dossierexpress.com</a></p>
            <p style={{ marginBottom: 0 }}> <b>Helpline Number:</b>+91 9810314826</p>
            <p style={{ marginBottom: 0 }}><b> PAN No:</b> AABCD4347H</p>
            <p style={{ marginBottom: 0 }}><b> GST No:</b> 07AABCD4347H1ZS</p>
            <p style={{ marginBottom: 0 }}><b>Certificate of Incorporation No:</b> U63013DL1999PTC101412</p>
            <p> <b>Date of incorporation:</b> 02/09/1999</p>
            <p style={{ marginBottom: 0 }}> <b>PF & ESI compliance.</b></p>
            <p style={{ marginBottom: 0 }}><b> ESI Regd. No.:</b> 11001234670000999</p>
            <p style={{ marginBottom: 0 }}><b>PF Regd. No.:</b> DLCPM1562560000</p>
            <p style={{ marginBottom: 0 }}><b>DIN No:</b> 00969173 - Sunil Shukla</p>
            <p ><b>DIN No:</b> 00996874 - B.Ganesh</p>
            <p style={{ marginBottom: 0 }}><b>Our Bank:</b><br /> Canara Bank Ltd. , Rani Jhansi Road Jhandewalan,</p>
            <p> A/c No. CA 90231010005578, IFSC Code: CNRB0019023</p>
            <p style={{ marginBottom: 0 }}><b>Mail:</b> <a href="mailto:dossierdcpl@gmail.com"> dossierdcpl@gmail.com</a></p>
            <p> <b>Website:</b> <a href="https://dossierexpress.com"> www.dossierexpress.com</a></p>
            <p> Regarding our Business Continuity Plan - We have alternate resources available to take care of
              the key positions. In case of contingency, we have alternate office space available. We keep the
              business data backup/stored at a place different from present office.</p>
            <p style={{ marginBottom: 0 }}>Warm Regards,</p>
            <p style={{ marginBottom: 0, fontSize: 14 }}><b>Dossier Courier Pvt. Ltd.</b></p>
            <p style={{ marginBottom: 0 }}> B. Ganesh & Sunil Shukla</p>
            <p style={{ textAlign: 'center', width: "13%" }}><b>Directors</b></p>
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
