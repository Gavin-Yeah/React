import React, {Component} from 'react';
import Search from "./components/search/Search";
import List from "./components/list/List";
class App extends Component {
    state = {

        keyWord:''// keyWord is used by List

    }
    setKeyWord = (keyWord)=>{
        this.setState({keyWord});
    }


    render() {
        return (
            <div id="app">
                <div className="container">
                    <Search setKeyWord={this.setKeyWord}/>
                    <List keyWord={this.state.keyWord}/>
                </div>
            </div>
        );
    }
}

export default App;