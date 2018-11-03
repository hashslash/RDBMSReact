import React,{Component} from 'react';
import {List,ListItem,ListItemText} from '@material-ui/core'

export default class Meetings extends Component{
    render(){
        var list = this.props.schedule;
        list=list.map((item)=>{
            return(
                <div>
                    <ListItem>
                        <ListItemText primary={item.name} secondary={item.time}/><ListItemText primary={item.date} secondary={item.location}/>
                    </ListItem>
                </div>
            );
        });
        return (
            <div>
                <List>
                    {list}
                </List>
            </div>
        );
    }
}