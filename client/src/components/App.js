import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './Home';
import Secret from './Secret';
import Login from './Login';
import Users from './Users';
import Logout from './Logout';
import withAuth from './withAuth';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {

        };
    };

    render(){
        return (
            <BrowserRouter>
                <div>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/secret">Secret</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/all-users">Users</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </div>

                <Route exact path="/" component={Home} />
                <Route path="/secret" component={withAuth(Secret)} />
                <Route path="/login" component={Login} />
                <Route path="/all-users" component={withAuth(Users)} />
                <Route path="/logout" component={Logout} />
            </BrowserRouter>
        );
    };
};

export default App;