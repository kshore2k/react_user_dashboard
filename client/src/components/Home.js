import React from "react";

class Home extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            message: "Loading..."
        };
    };

    componentDidMount(){
        // GET message from server using fetch api
        fetch('/api/home')
            .then(res => res.text())
            .then(res => this.setState({ message: res }));
    };

    render(){
        return (
            <div>
                <h1>Home</h1>
                <p>{this.state.message}</p>
            </div>
        );
    };
};

export default Home;