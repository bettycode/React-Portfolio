import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav/Nav'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import F from "./components/F/F";



function App() {
  return (
    <Router>
        <div>
          <Nav />,
          <Wrapper>
            {/* <Route exact path="/React-Portfolio" component={Header} /> */}
            <Route exact path="/React-Portfolio" component={Header} />
            <Route exact path="/PORTFOLIO" component={Portfolio} />
            <Route exact path="/CONTACT" component={Contact} />
          </Wrapper>
          <F />
        </div>
    </Router>
  );
}

export default App;
 