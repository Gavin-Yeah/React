import React, {Component} from 'react';
import {NavLink,Route, Redirect} from 'react-router-dom'
import HomeMessage from "./HomeMessage";
import HomeNews from "./HomeNews";
import MyNavLink from "../components/MyNavLink"
class Home extends Component {
    render() {
        return (
            <div><h2>Home组件内容</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to="/home/news">News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to="/home/message">Message</MyNavLink>
                        </li>
                    </ul>
                    <Route path="/home/news" component={HomeNews}/>
                    <Route path="/home/message" component={HomeMessage}/>
                    <Redirect to={"/home/news"}></Redirect>

                </div>
            </div>
        );
    }
}

export default Home;