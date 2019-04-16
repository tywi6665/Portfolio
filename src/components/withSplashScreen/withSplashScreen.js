import React, { Component } from "react";
import "./withSplashScreen.scss";

function LoadingDots() {
    return (
        <div className="splashScreen">
            <div className="loading">
                {/* <div className="growDot"></div> */}
                <div className="loadingDots">
                    <div className="splashDot1">T</div>
                    <div className="splashDot2">C</div>
                    <div className="splashDot3">W</div>
                </div>
                <div className="loadingText">
                    Awesomeness is on its way!!!
                </div>
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
            setTimeout(() => {
                this.setState({
                    loading: false
                });
            }, 3000)
        };

        render() {
            if (this.state.loading) return LoadingDots();

            return <WrappedComponent {...this.props} />;
        };
    };
};

export default withSplashScreen;
