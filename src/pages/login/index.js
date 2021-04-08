/*
 * @Author: kanglang
 * @Date: 2021-04-07 18:12:46
 * @LastEditors: kanglang
 * @LastEditTime: 2021-04-07 18:14:50
 * @Description: 登录页面   localStorage.setItem('jwToken',token)
 */

import React, { Component } from 'react';

class Login extends Component {

    render() {
        return <div style={{ height: '100%', width: '100%', background: '#d6f7d6' }}>
            <div style={{
                height: '200px', fontSize: '1.4rem',
                color: 'pink', padding: '30px 0', textAlign: 'center'
            }}
                onClick={this.login}
            >
                登录页面
           </div>

        </div>
    }

    login = () => {
        // 掉登录接口 登录成功后保存token
        localStorage.setItem('jwToken',token)
    }

}
export default Login;
