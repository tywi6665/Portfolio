import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Nav from "./components/Nav";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import * as d3 from "d3";

const App = () => (

  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  </Router>

)

//Sets up the dimensions of the canvas
var width = 100, height = 100;

//Creating the SVG and appending it to the page
var svg = d3.select("body")
  .append("svg")
  .attr("class", "d3")
  .attr("width", width + "%")
  .attr("height", height + "%")

//Creating data properties
var data = [];
var numCircles,
  circleX = 1500,
  circleY = 615,
  maxRadius = 50
 
//Function to generate random numbers
function random(num) {
  return Math.floor(Math.random() * num);
};

//Generating rnadom values
function randomValues() {
  data = [];
  numCircles = random(20);
  for (var i = 0; i < numCircles; i++) {
    data.push({
      x: random(circleX),
      y: random(circleY),
      r: random(maxRadius) + 20,
      fill: d3.rgb(random(255), random(0), random(125)),
      opacity: (Math.random() + 0.01) * 0.5
    });
  };
};

//Declaring lifecycle function
function update() {
  //Calling the random values function
  randomValues();
  console.log(data);
  //Creating the circles
  var circle = d3.select("svg.d3")
    .selectAll("circle")
    .data(data);

  //Enter && update selections
  circle.enter()
    .append("circle")
    .attr("r", 0)
    .attr("cx", width / 2)
    .attr("cy", height / 2)
    .style("fill", "black")
    .merge(circle)
    .transition()
    .duration(1500)
    .attr("cx", function (d) { return d.x; })
    .attr("cy", function (d) { return d.y; })
    .attr("r", function (d) { return d.r; })
    .style("fill", function (d) { return d.fill; })
    .style("opacity", function (d) { return d.opacity; })

  //Exit selection
  circle.exit()
    .transition()
    .duration(1500)
    .attr("r", 0)
    .style("opacity", 0)
    .remove()
};

//Calling the update function
update();
setInterval(() => {
  update()
}, 5000);

export default App;
