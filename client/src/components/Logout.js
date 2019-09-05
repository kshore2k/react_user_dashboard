import React from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            loading: true
        };
    };

    componentDidMount(){
        fetch('/api/logout')
            .then(res => {
                res.text()
                .then(res => {
                    console.log(res)
                    this.setState({ loading: false })
                })  
            })
            .catch(err => console.log(err))
    }

    render(){
        if(!this.state.loading){
            return <Redirect to='/' />
        } else {
            return <p>Logging Out...</p>
        }
        
    };
};

export default Logout;