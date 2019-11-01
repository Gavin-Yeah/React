import React, {Component} from 'react';

class Search extends Component {
    keyWordRef = React.createRef();
    search = ()=>{
        let {setKeyWord} = this.props
        //1.get input
        let keyWord = this.keyWordRef.current.value.trim();
        //pass keyword to list
        setKeyWord(keyWord)
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