import React, {Component} from 'react';
import Item from "../item/Item";
import axios from 'axios'
class List extends Component {

    state = {
        isFirst: true,
        users: [],
        isLoading: false,
        errorMsg: ''
    }

    async UNSAFE_componentWillReceiveProps({keyWord}) {
        this.setState({
            isFirst: false,
            isLoading: true,
            users:[],
            errMsg:'',
        })
        const url =  `https://api.github.com/search/users?q=${keyWord}`
       try{
            let response = await axios.get(url);
            let users = response.data.items.map((item,index)=>{
                return {
                    avatar_url: item.avatar_url,
                    html_url: item.html_url,
                    login: item.login

                }
           })
           this.setState({
               isFirst: false,
               isLoading: false,
               users,
               errMsg:'',
           })
       }catch (e) {
           this.setState({
               isFirst: false,
               isLoading: false,
               users:[],
               errMsg:e.toString(),
           })
       }



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