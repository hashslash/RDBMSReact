import React, {Component} from 'react';
import axios from 'axios';
import {List, Button, ListItem, ListItemText, Typography} from '@material-ui/core';

class EventsAvailable extends Component {
    state = {
        events: []
    }
    componentDidMount = () => {
        var uid = localStorage.getItem('uid')
        axios.post('/get/events', {
            uid: uid
        })
            .then((res) => {
                this.setState({
                    events: res.data.events
                })
            })
            .catch(e => {
                alert(e);
            });
    }
    select = (item) => {
        localStorage.setItem('eid', item);
        alert(item);
        this.props.history.push('/home');
    };

    render() {
        var eventlist = this.state.events.map((item) => {
            return (
                <ListItem button onClick={()=>this.select(item.EID)}>
                    <ListItemText primary={item.name}/>
                </ListItem>);
        });
        return (
            <div>
                <Typography color="inherit">Available Events</Typography>
                <List component="nav">
                    {eventlist}
                </List>
                <Button onClick={this.addevent}>Add Event</Button>
            </div>
        );
    }

    addevent = (e) => {
        this.props.history.push('/create/event');
    };
}


export default EventsAvailable;