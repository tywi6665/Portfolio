import React, { Component } from "react";
import "./withSplashScreen.scss";

function LoadingDots() {
    return (
        <div className="loading-dots">
            ...
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
