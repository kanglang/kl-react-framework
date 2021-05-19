/*
 * @Author: kanglang
 * @Date: 2021-04-07 18:12:46
 * @LastEditors: kanglang
 * @LastEditTime: 2021-05-08 14:40:25
 * @Description: 登录页面   localStorage.setItem('jwToken',token)
 */

import React, { Component } from 'react';
import { Keys, SubmitButton, Toast } from '@common';
import userApi from '@api/user';

class Login extends Component {

    render() {
        return <div style={{ height: '100%', width: '100%', background: '#d6f7d6' }}>
            <div style={{
                height: '200px', fontSize: '1.4rem',
                color: 'pink', padding: '30px 0', textAlign: 'center'
            }}
            >
                登录页面
                <SubmitButton
                    btnText="立即登录"
                    onClick={this.login}
                />
            </div>

        </div>
    }

    login = () => {
        // Toast.info('普通的Tofff滚滚滚ast！！', false, 300000);
        // Toast.success('操作成功', true, 30000);
        // Toast.error('程序异常', false, 300000);
        Toast.loading("支付中...")
        // Toast.warning('爆炸警告', false, 300000);
        // Toast.show('加载中d顶都掉的顶顶顶...', false, 0);
        // const timer = setTimeout(() => {
        //     Toast.hide();
        //     clearTimeout(timer);
        // }, 3000);
        // api.user.getUserInfo().then(res => {
        //     console.log("==========================>", res)
        // });
        // 掉登录接口 登录成功后保存token
        // localStorage.setItem(Keys.APP_TOKEN, "jdfsfsdfkkkkKKKkldfldsfdsf78899sdfsfs")
        // this.props.history.push('/')

        // userApi.loginPwd({ mobile: '16687770123', password: '1234456' }).then(loginRes => {
        //     if (loginRes.success) {
        //         alert('成功')
        //     } else {

        //     }
        // });
    }

}
export default Login;
