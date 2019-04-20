import React, { Component } from "react";
import * as d3 from "d3";
import "./withSplashScreen.scss";

function LoadingDots() {
    return (
        <div className="splashScreen">
            <div className="loading">
                <div id="canvas"></div>
                <div className="loadingDots">
                    <div className="splashDot1">T</div>
                    <div className="splashDot2">Y</div>
                    <div className="splashDot3">W</div>
                    <div className="splashDot4">I</div>
                </div>
                {/* <div className="loadingText">
                    Awesomeness is on its way!!!
                </div> */}
            </div>
        </div>
    );
};

function withSplashScreen(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true
            };
        };

        componentDidMount() {
            this.movingArcs();
            setTimeout(() => {
                this.setState({
                    loading: false
                });
            }, 4500)
        };

        movingArcs() {
            // d3.select(".d3splash").remove();
            
            var height = 500,
                width = 500,
                twoPi = 2 * Math.PI,
                formatPercent = d3.format(".0%"),
                curvePercent = [0.1, 0.25, 0.35, 0.50, 0.75, 1.0, 0.80, 0.50, 0.35, 0.25, 0.1];

            var color = d3.scaleSequential(d3.interpolatePuRd)
            var colorValue = function (d, i) { return d; };
      
            var svg = d3.select("#canvas")
                .append("svg")
                .attr("height", `${height}px`)
                .attr("width", `${width}px`)

            var pathArc = d3.arc()
                .innerRadius(width / 4)
                .outerRadius(width / 4 + 5)

            var curves = svg.append("g")
                .attr("transform", `translate(${width / 2}, ${height / 2})`);

            curves.selectAll("path")
                .data(curvePercent)
                .enter()
                .append("path")
                .each(arcs)
                .style("fill", d => color(colorValue(d)))

            function arcs(d, i) {
                return d3.select(this)
                    .transition()
                    .ease(d3.easeBounce)
                    .duration(1500)
                    .attr("class", "arc")
                    .attr("d", pathArc.startAngle(Math.random(twoPi)).endAngle(Math.random(twoPi) + twoPi * curvePercent[i]))
                    .attr("transform", "scale(1." + i + ")")
                    .on("end", animateArcs)
            }

            function animateArcs() {
                return d3.selectAll(".arc")
                    .transition()
                    .ease(d3.easeExp)
                    .duration(3000)
                    .attr("transform", `translate(0, 0) rotate(${90})`)
            }
        }

        render() {
            if (this.state.loading) return LoadingDots();

            return <WrappedComponent {...this.props} />;
        };
    };
};

export default withSplashScreen;
