import React,{Component} from 'react';
import {List,ListItem,ListItemText} from '@material-ui/core'

class Schedule extends Component{
    render(){

        var list = this.props.schedule;
        list=list.map((item)=>{
            return(
                    <ListItem>
                        <ListItemText primary={item.name} secondary={item.time} />
                    </ListItem>
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

export default Schedule;