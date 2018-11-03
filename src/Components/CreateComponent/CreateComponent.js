import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import CreateAccount from '../Startup/CreateAccount';
import CreateEvent from '../admin/CreateEvent/CreateEvent'
export default class CreateComponent extends Component{
    render(){
        return (
            <Switch>
                <Route path={this.props.match.url+"/event"} component={CreateEvent}/>
                <Route path={this.props.match.url} component={CreateAccount}/>
            </Switch>
        );
    }
}