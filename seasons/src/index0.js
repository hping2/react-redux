import React from 'react';
import ReactDOM from 'react-dom';

// Class component
class App extends React.Component {

    constructor(props) {
        super(props);

        // This is THE ONLY TIME we do direct assignment to this state. 
        this.state = {lat: null, errorMessage: ''};

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);

                // we called setState!!!!
                this.setState({lat: position.coords.latitude});

                // we did not !!!!
                // this.state.lat = position.coords.latitude;
            },

            (err) => {
                console.log(err);
                this.setState({ errorMessage: err.message }); 
            }
        );

    }

    componentDidMount() {
        console.log("Component was rendered to screen");
    }

    componentDidUpdate() {
        console.log("Component was rendered again");
    }

    // React says we have to define render, to return JSX
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return (
            <div> Error: {this.state.errorMessage} </div>
            )
        }

        if (!this.state.errorMessage && this.state.lat) {
            return (
            <div> Latitude: {this.state.lat}<br /> </div>
            )
        }

       return <div>Loading</div>;
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector("#root")
);
