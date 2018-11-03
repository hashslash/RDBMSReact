import React, {Component, Fragment} from 'react';
import './App.css';
import LoginPage from './Components/Startup/LoginPage';
import CreateComponent from './Components/CreateComponent/CreateComponent';
import {Route, Switch, Link, Redirect} from 'react-router-dom';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import EventsAvailable from './Components/EventList/EventsAvailable';
import Home from './Components/Home/Home';

class App extends Component {
    state = {
        validlogin:-1
    }
    componentDidMount = ()=>{
        if(localStorage.getItem('uid')===undefined){
            this.setState({
                validlogin:-1
            })
        }else{
            this.setState({
                validlogin:1
            })
        }
    }
    render() {
        return (
            <div className="App">

                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Events
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className='body'>
                    <Switch>
                        <Route path="/events" component={EventsAvailable}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/create" component={CreateComponent}/>
                        <Route path="/start" component={() =>
                            <Fragment>
                                <Link to="/login">Login</Link><br/>
                                <Link to="/create">Register</Link>
                            </Fragment>}/>
                        {this.state.validlogin !== 1 && <Redirect to={"/start"}/>}
                        {this.state.validlogin === 1 && <Redirect to={"/events"}/>}
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
