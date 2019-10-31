import React, {Component} from 'react'
import axios from 'axios'

export default class App extends Component {
    state = {
        isLoading: true,
        repoName: '',
        repoUrl: '',
        errMsg: ''

    }
    keyWord = 'v';

    async componentDidMount() {

        const url = `https://api.github.com/search/repositories?q=${this.keyWord}&sort=stars`
        // try{
        //     let response = await axios.get(url);
        //     let repoInfo = response.data.items[0];
        //     console.log(response)
        //     this.setState({
        //
        //         isLoading: false,
        //         repoName: repoInfo.name,
        //         repoUrl: repoInfo.html_url,
        //         errMsg:''
        //     })
        // }catch (e) {
        //     this.setState({
        //
        //         isLoading: false,
        //         repoName: "",
        //         repoUrl: "",
        //         errMsg:e.toString()
        //     })
        //
        // }


        //    await axios.get(url).then((response)=>{
        //        let repoInfo = response.data.items[0];
        //            this.setState({
        //                isLoading: false,
        //                repoName: repoInfo.name,
        //                repoUrl: repoInfo.html_url,
        //                errMsg:''
        //            })
        //    }).catch((err)=>[
        //            this.setState({
        //
        //                isLoading: false,
        //                repoName: "",
        //                repoUrl: "",
        //                errMsg:err.toString()
        //            })
        //    ])


        //fetch

        fetch(url)
            .then(result => {
                //if the server connected, succeed, but if the routing failed, it still succeed.
                // console.log(result)


                if (result.ok) {
                    return result.json;
                } else {
                    return Promise.reject('resource does not exist');
                }
                return result.json();
            })
            .then(function (data) {
                let repoInfo = data.items[0];
                this.setState({
                    isLoading: false,
                    repoName: repoInfo.name,
                    repoUrl: repoInfo.html_url,
                    errMsg: ''
                })
            })
            .catch(function (err) {
                console.log(err.message)
                this.setState({

                    isLoading: false,
                    repoName: "",
                    repoUrl: "",
                    errMsg: err.toString()
                })

            })

    }

    render() {
        let {repoName, repoUrl, errMsg, isLoading} = this.state
        if (isLoading) {
            return <h3>loading...</h3>
        } else if (errMsg) {
            return <h3>{errMsg}</h3>
        } else {
            return (
                <h2>The most starred repo with name of {this.keyWord} in all repos is <a href={repoUrl}>{repoName}</a>
                </h2>
            )
        }

    }

}