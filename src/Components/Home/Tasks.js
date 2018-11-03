import React,{Component} from 'react';
import {List,ListItem,ListItemText} from '@material-ui/core'

export default class Tasks extends Component{
    render(){
        var list = this.props.tasks;
        list=list.map((item)=>{
            return(
                <div>
                    <ListItem>
                        <ListItemText primary={item.name} secondary={item.team} />
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