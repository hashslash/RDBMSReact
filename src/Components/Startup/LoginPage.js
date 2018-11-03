import React, {Component} from 'react';
import axios from 'axios';
import './LoginPage.css';
import {TextField, Button} from '@material-ui/core';
import {Redirect} from 'react-router-dom';

class LoginPage extends Component {
    state = {
        back: -1,
        usn: '',
        pwd: ''
    };
    redirect = () => {
        this.setState({
            back: 1
        })
    }
    handlechange = name => event => {
        this.setState({
            [name]: event.target.value
        })
    }

    render() {
        return (
            <div className="LoginPage">
                <TextField type="text" placeholder="Username" value={this.state.usn}
                           onChange={this.handlechange('usn')}/><br/>
                <TextField type="password" placeholder="Password" value={this.state.pwd}
                           onChange={this.handlechange('pwd')}/><br/>
                <Button onClick={this.submit}>Submit</Button>
                <Button onClick={this.redirect}>Back</Button>
                {this.state.back === 1 && <Redirect to="/"/>}
            </div>
        );
    }
    submit = ()=>{
        console.log('submitted');
         axios.post('/login', {
            usn: this.state.usn,
            pwd: this.state.pwd
        })
            .then((res) => {
                if (res.data.success) {
                    localStorage.setItem('uid', res.data.uid);
                    alert('yepp'+res.data.uid);
                    this.props.history.replace('/events');
                }
                else{
                    alert(res.data.reason)
                }
            })
            .catch((e) => {
                alert(e.message);
            });
    }
}

export default LoginPage;