import React, {Component} from 'react';
import {NavLink,Link,Route,Redirect, Switch} from 'react-router-dom'
import About from "./pages/About";
import Home from "./pages/Home";

class App extends Component {


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">

                            {/*原生html中用a标签实现页面的切换，页面刷新要准备多个页面*/}

                            {/*<a className="list-group-item" href="./about.html">About</a>
                            <a className="list-group-item active" href="./home.html">Home</a>*/}

                        {/*    用react中的路由_______-路由切换*/}
                            <NavLink className="list-group-item" activeClassName="demo" to='/about'>About</NavLink>
                            <NavLink className="list-group-item" activeClassName="demo" to='/home' >Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">

                                {/*即将展示的不同内容 对于原生html的写法，不同内容酒对应不同的页面*/}
                                {/*<h3>我是Home的内容</h3>*/}
                                {/*<h3>我是About的内容</h3>*/}

                            {/*    定义路由与组件的对应关系*/}
                            <Switch>
                                <Route path='/about' component={About}/>
                                <Route path='/home' component={Home}/>
                                <Redirect to='/about'/>
                            </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;