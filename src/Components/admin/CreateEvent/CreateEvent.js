import React, {Component} from 'react';
import axios from 'axios';
import {TextField, Divider, Button, List, ListItem, ListItemText} from '@material-ui/core';
import {Redirect} from "react-router-dom";

class CreateEvent extends Component {
    state = {
        name: '',
        location: '',
        date: '',
        time: '',
        guests: [],
        gname: '',
        schedule: [],
        cschedulename: '',
        cscheduletime: '',
        members: [],
        member: '',
        done:-1
    }
    handlechange = name => event => {
        this.setState({
            [name]: event.target.value
        })
    }

    render() {
        return (
            <div>

                <TextField type="text" placeholder="Name" value={this.state.name} onChange={this.handlechange('name')}/><br/>
                <TextField type="text" placeholder="Location" value={this.state.location}
                           onChange={this.handlechange('location')}/><br/>
                <TextField type="date" value={this.state.date} onChange={this.handlechange('date')}/><br/>
                <TextField type="time" value={this.state.time} onChange={this.handlechange('time')}/><br/>

                <Divider/>
                <GuestList guest={this.state.guests}/>
                <form>
                    <TextField id="guestName" type="text" placeholder="Name" value={this.state.gname}
                               onChange={this.handlechange('gname')}/><br/>
                    <Button onClick={this.addGuest}>Add</Button><br/>
                </form>
                <Divider/>
                <ScheduleList schedules={this.state.schedule}/>
                <TextField type="text" placeholder="Session" value={this.state.cschedulename}
                           onChange={this.handlechange('cschedulename')}/><br/>
                <TextField type="time" placeholder="Start Time" value={this.state.cscheduletime}
                           onChange={this.handlechange('cscheduletime')}/><br/>
                <Button onClick={this.addSchedule}>ADD</Button>
                <Divider/>
                <AddedMembers members={this.state.members}/>
                <TextField type="text" placeholder="Name" value={this.state.member}
                           onChange={this.searchmember()}/><br/>
                <MemberList text={this.state.member}/>
                <Button onClick={this.addMember}>Add Member</Button><br/>
                <Button onClick={this.SubmitEvent}>Submit</Button>
                {this.state.done===1&&<Redirect to='/events' />}
            </div>
        );
    }

    addGuest = () => {
        var list = this.state.guests;
        list.push(this.state.gname);
        this.setState({
            gname: '',
            guests: list
        });
    }
    addSchedule = () => {
        var list = this.state.schedule;
        list.push({
            name: this.state.cschedulename,
            time: this.state.cscheduletime
        });
        this.setState({
            schedule: list,
            cschedulename: '',
            cscheduletime: ''
        });
    }
    addMember = () => {
        var list = this.state.members;
        list.push(this.state.member);
        this.setState({
            members: list,
            member: ''
        });
    }

    searchmember = () => {
        return e => {
            this.setState({
                member: e.target.value
            });
        }
    }
    SubmitEvent = () => {
       axios.post('/create/event', {
           name: this.state.name,
           location: this.state.location,
           date: this.state.date,
           time: this.state.time,
           guests: this.state.guests,
           schedule: this.state.schedule,
           members: this.state.members
       })
           .then((res) => {
               alert("Successfull");
           }).catch((e) => {
           throw e
       });
    }

}

class GuestList extends Component {
    render() {
        var guests = this.props.guest;
        guests = guests.map((item) => {
            return (<ListItem>
                <ListItemText primary={item}/>
            </ListItem>);
        });
        return (
            <div>
                <List component="nav">
                    {guests}
                </List>
            </div>
        );
    }
}

class ScheduleList extends Component {
    render() {
        var schedule = this.props.schedules;
        schedule = schedule.map((value) => {
            return (
                <ListItem>
                    <ListItemText primary={value.name} secondary={value.time}/>
                </ListItem>
            );
        });
        return (
            <div>
                <List component='nav'>
                    {schedule}
                </List>
            </div>
        );
    }
}

class AddedMembers extends Component {
    render() {
        var members = this.props.members;
        members = members.map((value) => {
            return (
                <ListItem>
                    <ListItemText primary={value}/>
                </ListItem>
            );
        });
        return (
            <div>
                <List>
                    {members}
                </List>
            </div>
        );
    }
}

class MemberList extends Component {
    render() {
        var list;
        //axios.get("/get/members/"+this.props.text)
        //    .then((res)=>{
        //        list=res.data.members;
        //    })
        //    .catch((e)=>{
        //        throw e;
        //});
        list = [{name: this.props.text, uid: 0}];//dummy
        list = list.map((v) => {
            return (
                <ListItem button>
                    <ListItemText primary={v.name} secondary={v.uid}/>
                </ListItem>
            );
        });
        return (
            <div>
                <List>{list}</List>
            </div>
        );
    }
}

export default CreateEvent;