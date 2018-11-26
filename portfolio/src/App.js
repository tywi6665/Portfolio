import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Main from "./pages/Main";

const App = () => (

  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/main" component={Main} />
      </Switch>
    </div>
  </Router>

)


export default App;
