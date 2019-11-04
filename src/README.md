### use react router
npm install -save react-router-dom
 ```
 import {HashRouter,BrowserRouter,}from 'react-router-dom';
 ...
   <BrowserRouter>
        <App/>
    </BrowserRouter>
 ```
 ```
 import {NavLink,Link,Route,Redirect,Switch} from 'react-router-dom'
 ...
 <NavLink className="list-group-item" activeClassName="demo" to='/home' >Home</NavLink>
  ...
           <Switch>
  <Route path='/about' component={About}/>
  ...
           <Switch>
 ```