import React, { Component } from "react";
import "./withSplashScreen.scss";

function LoadingDots() {
    return (
        <div className="splashScreen">
            <div className="growDot"></div>
            <div className="loadingDots">
                <div className="splashDot1"></div>
                <div className="splashDot2"></div>   
                <div className="splashDot3"></div>
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
            }, 600000)
        };

        render() {
            if (this.state.loading) return LoadingDots();

            return <WrappedComponent {...this.props} />;
        };
    };
};

export default withSplashScreen;
