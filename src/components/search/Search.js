import React, {Component} from 'react';
import axios from 'axios'
class Search extends Component {
    keyWordRef = React.createRef();
    search = ()=>{
      // //  let {updateAppState} = this.props
      //   //获取用户输入
      //   let keyWord = this.keyWordRef.current.value.trim();
      //   //发送请求
      //   updateAppState({
      //       isFirst: false,
      //       isLoading: true,
      //       users:[],
      //       errMsg:'',
      //   })
      //   const url =  `https://api.github.com/search/users?q=${keyWord}`
      //   axios.get(url)
      //       .then((result)=>{
      //           console.log(result)
      //           let users = result.data.items
      //           updateAppState({
      //               isFirst: false,
      //               isLoading: false,
      //               users,
      //               errMsg:'',
      //           })
      //
      //       })
      //       .catch((err)=>{
      //           updateAppState({
      //               isFirst: false,
      //               isLoading: false,
      //               users:[],
      //               errMsg:err.toString(),
      //           })
      //       })
      //
      //   //维护数据到状态
        //1.get input
        let keyWord = this.keyWordRef.current.value.trim();
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