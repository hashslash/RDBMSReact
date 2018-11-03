import React, {Component} from 'react';
import {TextField, Button} from "@material-ui/core";
import axios from "axios";


class CreateAccount extends Component {
    state = {
        name: '',
        username: '',
        password: '',
        cpwd: ''
    };
    handlechange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    render() {
        return (
            <div className="CreateAccount">
                <TextField type="text" placeholder="Full Name" value={this.state.name}
                           onChange={this.handlechange('name')}/><br/>
                <TextField type="text" placeholder="Username" value={this.state.username}
                           onChange={this.handlechange('username')}/><br/>
                <TextField type="password" placeholder="Password" value={this.state.password}
                           onChange={this.handlechange('password')}/><br/>
                <TextField type="password" placeholder="Confirm Password" value={this.state.cpwd}
                           onChange={this.handlechange('cpwd')}/><br/>
                <Button onClick={this.submit}>Create</Button>
            </div>
        );
    }

    submit = () => {
        if (this.state.password === this.state.cpwd) {
            if (this.state.password.length > 5) {
                if (this.state.name.length !== 0) {
                    if (this.state.username.length !== 0) {


                        axios.post("/create/account", {
                            name: this.state.name,
                            usn: this.state.username,
                            pwd: this.state.password
                        })
                            .then((res) => {
                                alert(res.data.success);
                                this.props.history.push('/login');
                            })
                            .catch((err) => {
                                alert(err);
                            })
                    } else {
                        alert('Username Cannot be empty');
                    }
                } else {
                    alert('Name is Empty');
                }
            } else {
                alert('Password should be atleast 6 char long');
            }
        } else {
            alert('Passwords Doesnt Match');
        }
    }
}

export default CreateAccount;