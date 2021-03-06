import React from "react";

class Secret extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            message: "Loading..."
        };
    };

    componentDidMount(){
        // GET message from server using fetch api
        fetch('/api/secret')
            .then(res => res.text())
            .then(res => this.setState({ message: res }));
    };

    render(){
        return (
            <div>
                <h1>Secret</h1>
                <p>{this.state.message}</p>
            </div>
        );
    };
};

export default Secret;