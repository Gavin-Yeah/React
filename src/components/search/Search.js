import React, {Component} from 'react';
import axios from "axios";
import PubSub from 'pubsub-js'
class Search extends Component {
    keyWordRef = React.createRef();





    search = ()=>{

        //1.get input
        let keyWord = this.keyWordRef.current.value.trim();
        //publish msg, let list update state
        PubSub.publish('updateListState',
            {
                isFirst: false,
                isLoading: true,
                users:[],
                errMsg:''
            })
        const url =  `https://api.github.com/search/users?q=${keyWord}`

             axios.get(url).then((response)=>{
                 let users = response.data.items.map((item,index)=>{
                     return {
                         avatar_url: item.avatar_url,
                         html_url: item.html_url,
                         login: item.login

                     }
                 });

                 PubSub.publish('updateListState',
                     {
                         isFirst: false,
                         isLoading: false,
                         users:users,
                         errMsg:''
                     })


                 }




             ).catch((e)=>{
                PubSub.publish('updateListState',
                    {
                        isFirst: false,
                        isLoading: false,
                        users:[],
                        errMsg:e.toString()
                    })
            })







        //clear input
        this.keyWordRef.current.value='';
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name" ref={this.keyWordRef}/>
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        );
    }
}

export default Search;