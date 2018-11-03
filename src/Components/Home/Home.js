import React, {Component} from 'react';
import axios from 'axios';
import {Button, Divider} from '@material-ui/core';
import Schedule from "./Schedule";
import Guests from "./Guests";
import Tasks from "./Tasks";
import Meetings from "./Meetings";
import Organisers from "./Organisers";

class Home extends Component {
    state = {
        name:''
    }
    componentDidMount = ()=> {
        alert("Home Mounted");
        axios.post('/get/home',{
            uid:localStorage.getItem('uid'),
            eid:localStorage.getItem('eid')
        }).then((res) => {
            this.setState(res.data);
        }).catch((e) => {
            alert(e)
        });
    };

    render() {
        alert(this.state.name);
        return (
            <div>
                <h1>Welcome {this.state.name}</h1>
                <h2>Event:{this.state.eventname}</h2>
                <h2>Location:{this.state.location}</h2>
                <h2>On:{this.state.time}</h2>
                <h2>Time:{this.state.time}</h2>
                {this.state.admin===1?
                <div>
                    <Button onClick={this.meeting}>Call Meeting</Button>
                    <Button onClick={this.tasks}>Assign a Task</Button>
                </div>:
                <div>
                    <h1>You cant edit unless you are admin</h1>
                </div>
                }
                <br/>
                <Divider/>
                <h1>Schedule</h1>
                <Schedule schedule={this.state.schedule}/>
                <divider/>
                <h1>Guests</h1>
                <Guests guests={this.state.guests}/>
                <divider/>
                <h1>Organisers</h1>
                <Organisers members={this.state.members}/>
                <divider/>
                <h1>Meetings</h1>
                <Meetings meetings={this.state.meetings}/>
                <divider/>
                <h1>Tasks</h1>
                <Tasks tasks={this.state.task}/>
                <divider/>
            </div>
        );
    }
    task = () => {
        this.props.history.push('/create/tasks');
    }
    meeting = () => {
        this.props.history.push('/create/meeting');
    }
}
export default Home;