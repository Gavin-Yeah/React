import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import HomeMessageDetail from "./HomeMessageDetail";

class HomeMessage extends Component {
    state ={
        messages:[

        ]
    }
    componentDidMount() {
       this.timeId= setTimeout(()=>{
this.setState({
           messages:[ {mid:1,
                content:"message1"},
            {mid:2,
                content:"message2"},
            {mid:3,
                content:"message3"},
            {mid:4,
                content:"message4"},

        ]}
        )
        },2000)
    }
  pushShow = (path)=>{
        this.props.history.push(path)
    }
    replaceShow = (path)=>{
        this.props.history.replace(path)
    }
    back = () =>{
        this.props.history.goBack()
    }
componentWillUnmount() {
        console.log("im homeMessage component, i am passing away and i want to terminate timer");
        clearTimeout(this.timeId);
}

    render() {
        let {messages} = this.state
        return (
            <div>
                <ul>
                    {messages.map((item) => {
                        return (
                            <li key={item.mid}>
                            <Link to={`/home/message/detail/${item.mid}`}>{item.content}</Link>&nbsp;&nbsp;
                            <button onClick={()=>{return this.pushShow(`/home/message/detail/${item.mid}`)}}>push查看</button>
                            &nbsp;&nbsp;
                            <button onClick={ ()=>{return this.replaceShow(`/home/message/detail/${item.mid}`)} }>replace查看</button>
                        </li>)
                    })
                    }
                </ul>
                <button onClick={this.back}>回退</button>
                <hr/>
                <Route path={"/home/message/detail/:id"} component={HomeMessageDetail}/>
            </div>
        );
    }
}

export default HomeMessage;