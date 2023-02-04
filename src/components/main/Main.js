import React from "react";
import "./Main.css";
export default function Header(props) {
  return (
    <div className="main">
      <div>
        <img src={require("../../assets/images/banner.jpg")} alt="Banner" />
      </div>

      {/* middle */}
















      <section>
        <div className="courier_box">
          <div className="container courier_warp_box">
            <div className="left_courier_box">
              <img className="img-css" src={require("../../assets/images/delivery.jpg")} alt="" />
            </div>
            <div className="right_courier_box">
              <div className="courier_head">
                <h2 className="htwo-css" >Rent a Two Wheeler</h2>
              </div>
              <div className="courier_details">
                <div className="fare">
                  <p className="para-tag">A reasonable and economical mode of traveling that does not tie up with complex tariff plans.</p>
                </div>
                <div className="fare_details">
                  <ul className="ul-css">
                    <li className="li-css">A convenient way of transportation and ease of use</li>
                    <li className="li-css">Fastest Delivery</li>
                    <li className="li-css">Pricing may vary based on your locality</li>
                    <li className="li-css">Much Improved Navigation Skills</li>
                  </ul>
                </div>
                <div className="capacity">
                  <p className="para-tag">Capacity: <b className="b-css">upto 20 KGs</b></p>
                  <p className="para-tag">Size(lxbxh): <b className="b-css">40 CMs x 40 CMs x 40 CMs</b></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





      <section>
        <div className="product_to_deliver">
          <div className="container-lg">


            <div className="product_headng">
              <h2>For any type of business,
                we know how to help</h2>
            </div>


            <div className="medium-row">

              <div className="first-block">


                <div className="col-xl-4 col-sm-4 col-6">
                  <div className="product_box">
                    <div className="product_image">
                      <img src={require("../../assets/images/flowers.jpg")} alt="" />
                    </div>
                    <div className="product_deatils">
                      <h2>Flowers</h2>
                      <p>Make Birthdays, Anniversaries and Congratulatory occasions even more special with our same-day delivery service of flower bouquets that can be delivered.</p>
                    </div>
                  </div>
                </div>


                <div className="col-xl-4 col-sm-4 col-6">
                  <div className="product_box">
                    <div className="product_image">
                      <img src={require("../../assets/images/clothes_and_shoes.jpg")} alt="" />
                    </div>
                    <div className="product_deatils">
                      <h2>Clothes and Shoes</h2>
                      <p> Overall cost-effectiveness. Avoidance of damage, through careful and limited handling.</p>
                    </div>
                  </div>
                </div>


                <div className="col-xl-4 col-sm-4 col-6">
                  <div className="product_box">
                    <div className="product_image">
                      <img src={require("../../assets/images/documents.jpg")} alt="" />
                    </div>
                    <div className="product_deatils">
                      <h2>Documents</h2>
                      <p> The most important aspect that separates from others is the speed of delivery and efficiency of delivery.</p>
                    </div>
                  </div>
                </div>


              </div>





              <div className="second-block">


                <div className="col-xl-4 col-sm-4 col-6">
                  <div className="product_box">
                    <div className="product_image">
                      <img src={require("../../assets/images/e_shop.jpg")} alt="" />
                    </div>
                    <div className="product_deatils">
                      <h2>e-Shop items</h2>
                      <p>All fragile and delicate items are handled with maximum care and attention.</p>
                    </div>
                  </div>
                </div>


                <div className="col-xl-4 col-sm-4 col-6">
                  <div className="product_box">
                    <div className="product_image">
                      <img src={require("../../assets/images/gifts.jpg")} alt="" />
                    </div>
                    <div className="product_deatils">
                      <h2>Gifts</h2>
                      <p>Our delivery speed on each shipment with us will be delivered faster than you previously thought was possible.</p>
                    </div>
                  </div>
                </div>


                <div className="col-xl-4 col-sm-4 col-6">
                  <div className="product_box">
                    <div className="product_image">
                      <img src={require("../../assets/images/grocery.jpg")} alt="" />
                    </div>
                    <div className="product_deatils">
                      <h2>Groceries</h2>
                      <p>We deliver packages upto 20 kgs with easy payment options.</p>
                    </div>
                  </div>
                </div>


              </div>








            </div>
          </div>
        </div>
      </section>








      {/* <section>
        <div className="offers">
          <div className="offer_box">
            <div className="container-lg">
              <div className="section_heading">
                <h2>Provides an efficient system for order and customer management with</h2>
              </div>
              <div className="offer_list">
                <div className="offer_list_box">
                  <p className="offer_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                      className="bi bi-receipt" viewBox="0 0 16 16">
                      <path
                        d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                      <path
                        d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                    </svg>
                  </p>
                  <h3>Effective Pricing</h3>
                  <p className="offer_details">Relish the utmost reasonable prices in the City with our effective pricing</p>
                </div>
                <div className="offer_list_box">
                  <p className="offer_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                      className="bi bi-geo" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z" />
                    </svg>
                  </p>
                  <h3>Instantaneous Tracking</h3>
                  <p className="offer_details">Track your belongings movement across the city with our APP</p>
                </div>
                <div className="offer_list_box">
                  <p className="offer_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                      className="bi bi-smtopwatch" viewBox="0 0 16 16">
                      <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
                      <path
                        d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
                    </svg>
                  </p>
                  <h3>Same Day Delivery</h3>
                  <p className="offer_details">Get it guaranteed delivered at your doorstep on the same day of your Goods</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}





      {/* <section>
        <div className="solutions_box">
          <div className="background_image">
            <img src={require("../../assets/images/background_circule.jpg")} alt="" />
          </div>
          <div className="container-lg">
            <div className="section_heading">
              <h2 className="solution_head">
                Offer convenience that customers expect and Stay on top of industry trends
              </h2>
            </div>

            <ul className="solution_list">
              <li>
                <div className="list_head">
                  <span className="list_number">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      className="bi bi-pin-angle-fill" viewBox="0 0 16 16">
                      <path
                        d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z" />
                    </svg>
                  </span>
                </div>
                <div className="list_details">
                  <h2>Flexible Timing</h2>
                  <p>Schedule your goods for a specific date and time, delivery that will be completed ASAP</p>
                </div>
              </li>
              <li>
                <div className="list_head">
                  <span className="list_number">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      className="bi bi-pin-angle-fill" viewBox="0 0 16 16">
                      <path
                        d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z" />
                    </svg>
                  </span>
                </div>
                <div className="list_details">
                  <h2>Focussed Support</h2>
                  <p>The support team is equipped to response all your questions daily from 6:30 AM till 10 PM.</p>
                </div>
              </li>
              <li>
                <div className="list_head">
                  <span className="list_number">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      className="bi bi-pin-angle-fill" viewBox="0 0 16 16">
                      <path
                        d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z" />
                    </svg>
                  </span>
                </div>
                <div className="list_details">
                  <h2>Collective Orders</h2>
                  <p>Delivery is quicker and economical when multiple orders are combined and are sent with a single parcel.</p>
                </div>
              </li>

            </ul>
          </div>
          <div className="background_image_2">
            <img src={require("../../assets/images/background_circule.jpg")} alt="" />
          </div>
        </div>
      </section> */}
















      {/* middle */}


      {/* image cities */}
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
      {/* image cities */}

      {/* srikant section */}
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
      {/* srikant section */}
    </div>
  );
}