import React from 'react';

class Login extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    };

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        fetch('/api/authenticate', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if(res.status === 200){
                this.props.history.push('/');
            } else {
                const error = new Error(res.error);
                throw error;
            }
        })
        .catch(err => {
            console.error(err);
            alert("Error loggin in please try again");
        });
    };

    render(){
        return (
            <div>
                <h1>Login Below!</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Enter email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required
                    />
                    <input 
                        type="password" 
                        name="password"
                        placeholder="Enter password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    };
};

export default Login;