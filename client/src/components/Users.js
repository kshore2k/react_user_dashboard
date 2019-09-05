import React from 'react';

class Users extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            users: null
        };
    };

    componentDidMount(){
        fetch('/api/users')
            .then(response => response.json())
            .then(json => {
                this.setState({ users: json });
            })
            .catch(err => {
                console.log("Error fetching Users ", err)
            })
    }

    render(){
        if(this.state.users){

            let mappedUsers = this.state.users.map((user) => {
                return <li key={user._id}>{user.email}</li>
            })
    
            return (
                <ul>
                    {mappedUsers}
                </ul>
            )
        } else {
            return <p>Loading...</p>
        }

    };
};

export default Users;