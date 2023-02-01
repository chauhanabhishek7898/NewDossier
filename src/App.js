// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import "./style.css";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <div className="allcontent">
        <div className="app-header">
          <Header className="app-header" title="My header" subtitle="subtitle2" />
        </div>

        <div className="app-main">
          <Main message="My content" />
        </div>

        <div className="app-footer">
          <Footer note="Footer Note" />
        </div>
      </div>


    </div>
  );
}
export default App;