import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Nav from "./components/Nav";
import Main from "./pages/Main";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";

const App = () => (

  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/main" component={Main} />
        {/* <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} /> */}
      </Switch>
    </div>
  </Router>

)


export default App;
