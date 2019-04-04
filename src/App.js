import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Nav from "./components/Nav";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ScrollToTop from 'react-router-scroll-top'
import * as d3 from "d3";

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    this.UpdateDimensions = this.UpdateDimensions.bind(this);
  };

  render() {
    return (
      <Router>
        <div>
          <ScrollToTop>
            <Nav />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/main" component={Main} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </ScrollToTop>
        </div>
      </Router>
    )
  }

  componentDidMount() {
    this.Canvas();
    this.interval = setInterval(() => {
      this.Circles()
    }, 5000);
    window.addEventListener("resize", this.UpdateDimensions);
  };

  UpdateDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    this.Canvas();
  };

  Canvas() {
    //remove existing svg canvas
    d3.select(".d3").remove();
    //Sets up the dimensions of the canvas
    var width = 100, height = 100;

    //Creating the SVG and appending it to the page
    var svg = d3.select("body")
      .append("svg")
      .attr("class", "d3")
      .attr("width", width + "%")
      .attr("height", height + "%")

    this.Circles();
  }

  //Declaring lifecycle function
  Circles() {
    //Creating data properties
    var data = [];
    var numCircles,
      circleX = this.state.width,
      circleY = this.state.height,
      maxRadius = 50

    //Function to generate random numbers
    function random(num) {
      return Math.floor(Math.random() * num);
    };

    //Generating random values
    function randomValues() {
      data = [];
      numCircles = random(20);
      for (var i = 0; i < numCircles; i++) {
        data.push({
          x: random(circleX),
          y: random(circleY),
          r: random(maxRadius) + 20,
          fill: d3.rgb(random(255), random(0), random(125)),
          opacity: (Math.random() + 0.01) * 0.4
        });
      };
    };
    //Calling the random values function
    randomValues();
    //Creating the circles
    var circle = d3.select("svg.d3")
      .selectAll("circle")
      .data(data);
    //Enter && update selections
    circle.enter()
      .append("circle")
      .attr("r", 0)
      .attr("cx", random(circleX))
      .attr("cy", random(circleY))
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

  // //Calling the update function
  // update();

  // setInterval(() => {
  //   update()
  // }, 5000);


  componentWillUnmount() {
    window.removeEventListener("resize", this.UpdateDimensions);
    clearInterval(this.interval);
  }

};

export default App;