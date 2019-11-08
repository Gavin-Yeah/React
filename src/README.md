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
 use of switch:
 if it finds the route, it will immediately return that route and will not continue search 
 
 
 functional routing 
 *  use button to switch page (goBack() replace(path) push(path))
 
 user link to pass parameter
 ```
  <Link to={`/home/message/detail/${item.mid}`}>{item.content}</Link>&nbsp;&nbsp;
  
   <Route path={"/home/message/detail/:id"} component={HomeMessageDetail}/>
   
   
   
   
   in child component
     let {id} = this.props.match.params;
 ```