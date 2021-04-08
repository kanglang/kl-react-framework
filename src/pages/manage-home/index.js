/*
 * @Author: kanglang
 * @Date: 2020-07-14 08:52:07
 * @LastEditors: kanglang
 * @LastEditTime: 2021-04-08 21:24:02
 * @Description: 入口页
 */
import React, { Component } from 'react';
import './css/manageHome.scss';
import { requestGet, requestPost } from '../../https';
import baseHosts from '../../https/baseConfig';
import Lunbo from './components/Lunbo';
import { keys, SubmitButton } from '../../common';

class ManageHome extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    setTimeout(() => {
      const token = localStorage.getItem(keys.APP_TOKEN);
      if (token) {
        this.props.history.push('/')
      } else {
        this.props.history.push('/')
      }
    }, 3000);
  }

  nowPlay = () => {
    this.props.history.push('/Mine')
  }
  render() {
    let arr = [
      { title: '我们是共产主义接班人' },
      { title: '让我们荡起双桨' },
      { title: '让我们一起拥抱伟大祖国' },
      { title: '向伟大祖国致敬！' }
    ]
    return <div className="home">
      <Lunbo />
      {
        arr.map((item, index) => (
          <div key={index} className="home-title">{item.title}</div>
        ))
      }
      <SubmitButton
        btnText="立即体验"
        onClick={this.nowPlay}
      />
    </div>
  }

}
export default ManageHome;
