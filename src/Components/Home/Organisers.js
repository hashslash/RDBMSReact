import React,{Component} from 'react';
import {List,ListItem,ListItemText} from '@material-ui/core';

export default class Organisers extends Component{
    render(){
        var list = [];
        this.props.members.forEach((item)=>{
           list.push(item.team);
        });
        var set = new Set(list);
        list=this.props.members;
        var teamlist=[];
        set.forEach((item)=>{
            var tlist=[];
            list.forEach((oitem)=>{if(oitem.team===item)tlist.push(oitem.name)});
            teamlist.push(tlist);
        });
        list = teamlist.map((item,index)=>{
            item=item.map((oitem)=>{
                return(
                    <ListItem>
                        <ListItemText primary={oitem}/>
                    </ListItem>
                );
            });
            return(
                <List>
                    <ListItem selected >
                        <ListItemText primary={set[index]}/>
                    </ListItem>
                    {item}
                </List>
            );
        });
        return(
          <div>
              {list}
          </div>
        );
    }
}