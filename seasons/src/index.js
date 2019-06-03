import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// Class component
class App extends React.Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        console.log("Component was rendered to screen");

        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({ errorMessage: err.message }) 
        );
    }

    componentDidUpdate() {
        console.log("Component was rendered again");
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage} </div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            //return <div> Latitude: {this.state.lat}<br /> </div>
            return <SeasonDisplay lat={this.state.lat} />
        }

       return <Spinner message="Please accept location request"/>;
    }

    // React says we have to define render, to return JSX
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector("#root")
);
