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
import CustomerSignup from "./components/navpages/CustomerSignup";
import DriverSignup from "./components/navpages/DriverSignup";
import CorporateSignup from "./components/navpages/CorporateSignup";
function App() {
  return (
    <div className="app">
      <Router>
        <div className="allcontent">
          <div className="app-header">
            <Header className="app-header" title="My header" subtitle="subtitle2" />
          </div>
        </div>

        <Routes>
          <Route exact path="/about" element={
            <div className="app-main">
              <AboutUs />
            </div>
          }>
          </Route>
          <Route exact path="/contact" element={
            <div className="app-main">
              <ContactUs />
            </div>
          }>
          </Route>
          <Route exact path="/" element={
            <div className="app-main">
              <Main />
            </div>
          }>
          </Route>
          <Route exact path="/customersignup" element={
            <div className="app-signup">
              <CustomerSignup />
            </div>
          }>
          </Route>
          <Route exact path="/driversignup" element={
            <div className="app-signup">
              <DriverSignup />
            </div>
          }>
          </Route>
          <Route exact path="/corporatesignup" element={
            <div className="app-signup">
              <CorporateSignup />
            </div>
          }>
          </Route>
        </Routes>
      </Router>

      <div className="app-footer">
        <Footer note="Footer Note" />
      </div>
    </div>
  );
}
export default App;