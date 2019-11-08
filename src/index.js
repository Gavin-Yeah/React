import React from 'react';
import {render} from 'react-dom';
import {HashRouter,BrowserRouter}from 'react-router-dom';
import App from './App'
// BrowserRouter 对css文件路径要求严格，./会从当前文件开始找  所以用公用css时 用/css/bootstraps 或 %PUBLIC_URL%/css/bootstrap.css 不能用./"

render(
    <HashRouter>
        <App/>
    </HashRouter>,
    document.getElementById('root')
)
