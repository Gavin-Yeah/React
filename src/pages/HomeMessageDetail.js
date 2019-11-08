import React, {Component} from 'react';

class HomeMessageDetail extends Component {
    state = {
        messageDetails:[
             {id:1, title:'message01',
                content:"message1"},
                {id:2,title:'message02',
                    content:"message2"},
                {id:3,title:'message03',
                    content:"message3"},
                {id:4,title:'message04',
                    content:"message4"},


        ]
    }
    render() {
       let {id} = this.props.match.params;
       let {messageDetails} = this.state;
      let data =  messageDetails.find((item)=>{
         return  item.id === id*1;
       })
        return (
          <ul>
              <li>ID:{data.id}</li>
              <li>TITLE:{data.title}</li>
              <li>CONTENT:{data.content}</li>
          </ul>
        );
    }
}

export default HomeMessageDetail;