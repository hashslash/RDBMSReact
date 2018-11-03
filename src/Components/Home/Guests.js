import React,{Component} from 'react';
import {List,ListItem,ListItemText} from '@material-ui/core'

export default class Guests extends Component{
    render(){
        var list = this.props.guests;
        list=list.map((item)=>{
            return(
                <div>
                    <ListItem>
                        <ListItemText primary={item.name}/>
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