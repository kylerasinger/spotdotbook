import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListSpotComponent from './components/ListUserComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateSpotComponent from './components/CreateSpotComponent'; //make sure it works
import ViewSpotComponent from './components/ViewSpotComponent'; //make sure it works

function App(){
  return(
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path = "/" element = {<ListSpotComponent/>}></Route>
            <Route path = "/spots" element = {<ListSpotComponent />}></Route>
            
            {/* <Route path = "/add-employee/:id" component = {CreateSpotComponent}></Route>
            <Route path = "/view-employee/:id" component = {ViewSpotComponent}></Route> */}
            {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>

  )
}

export default App;

// import logo from './logo.svg';
// import './App.css';
// import React, { Component } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
