import React, {Component} from 'react';
import Item from "../item/Item";
import axios from 'axios'
import PubSub from 'pubsub-js'
class List extends Component {

    state = {
        isFirst: true,
        users: [],
        isLoading: false,
        errorMsg: ''
    }

 componentDidMount() {
        PubSub.subscribe('updateListState',(msg,newState)=>{
           this.setState({...newState})

        })
 }

    render() {
        let {isFirst, isLoading, users, errMsg} = this.state
        if (isFirst) {
            return <h2>input and search</h2>

        } else if (isLoading) {
            return <h2>loading...</h2>
        } else if (errMsg) {
            return <h2>{errMsg}</h2>
        } else {
            return (
                <div className="row">
                    {
                        users.map((item) => {
                            return <Item key={item.login} {...item}/>
                        })
                    }

                </div>
            );
        }

    }
}

export default List;