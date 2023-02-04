import React from "react";
import "./style.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
// import RouteButton from "./components/routebutton/RouteButton";
// import Home from "./components/navpages/Home";
import AboutUs from "./components/navpages/AboutUs";
import ContactUs from "./components/navpages/ContactUs";
function App() {
  return (
    <div className="app">
      <Router>
        <div className="allcontent">
          <div className="app-header">

            <Header className="app-header" title="My header" subtitle="subtitle2" />



            {/* <Header className="app-header" title="My header" subtitle="subtitle2" /> */}
          </div>


          {/* <div className="app-main">
          <RouteButton message="My content" />
        </div> */}


          {/* <div className="app-main">
            <Main message="My content" />
          </div>
          
          <div className="app-footer">
            <Footer note="Footer Note" />
          </div> */}
        </div>

        <Routes>
          <Route exact path="/about" element={
            <div className="app-main">
              <AboutUs />
            </div>
          }>
            {/* <AboutUs /> */}
          </Route>
          <Route exact path="/contact" element={
            <div className="app-main">
              <ContactUs />
            </div>
          }>
            {/* <ContactUs /> */}
          </Route>
          <Route exact path="/" element={
            <div className="app-main">
              <Main />
            </div>
          }>
            {/* <Home /> */}
          </Route>
        </Routes>
      </Router>
      {/* <div className="app-main">
        <Main message="My content" />
      </div> */}

      <div className="app-footer">
        <Footer note="Footer Note" />
      </div>
    </div>
  );
}
export default App;