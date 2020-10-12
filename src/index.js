/*
 * @Author: kanglang
 * @Date: 2020/7/16
 * @Description: 项目入口，路由入口
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, withRouter, BrowserRouter } from 'react-router-dom';
import routers from './routers';
import Exception from './global/404';
import './global/base.scss';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // forceRefresh 在导航过程中强制刷新整个页面
        // 在不支持 HTML5 history API 的浏览器
        const supportsHistory = 'pushState' in window.history;
        return (
            <BrowserRouter forceRefresh={!supportsHistory}>
                <Switch>
                    {
                        routers.map((item, index) => {
                            return <Route exact path={item.path} component={withRouter(item.component)} key={index} />
                        })
                    }
                    <Route component={Exception} />
                </Switch>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);