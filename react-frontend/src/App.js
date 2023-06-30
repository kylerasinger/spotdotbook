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
            <Route path = "/" exact element = {<ListSpotComponent/>}></Route>
            <Route path = "/spots" element = {<ListSpotComponent />}></Route>
            <Route path = "/add-spot/:id" element = {<CreateSpotComponent/>}></Route>
            <Route path = "/view-spot/:id" element = {<ViewSpotComponent/>}></Route>

          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>

  )
}

export default App;
