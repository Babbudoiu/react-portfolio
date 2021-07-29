import './App.css';
import React from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
  return(
    <div>
  <Router>
  <Navbar />
      <div className="container">
        <div className="children-container">
       <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contacts" component={Contacts} />
      </Switch>
      </div>
      <Footer /> 
      </div>
    </Router>
    </div>
  );
};

export default App;
