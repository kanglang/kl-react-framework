/*
 * @Author: kanglang
 * @Date: 2020-07-14 08:57:14
 * @LastEditors: kanglang
 * @LastEditTime: 2021-05-06 16:21:02
 * @Description: 我的
 */
import React, { Component } from 'react';
import SubmitButton from '@common/submit-button';

class Mine extends Component {

  goHome = () => {
    this.props.history.push('/')
  }
  
  goNearby=()=>{
    this.props.history.push('/Nearby')
  }

  render() {
    return <div style={{ height: '100%', width: '100%', background: '#d6f7d6' }}>
      <div style={{ height: '200px', fontSize: '1.4rem', color: 'pink', padding: '30px 0', textAlign: 'center' }}>我的</div>
      <SubmitButton
        btnText="立即体验"
        onClick={this.goHome}
        btnBgColor={'red'}
      />
      <SubmitButton
        btnText="去附近"
        onClick={this.goNearby}
        btnBgColor={'blue'}
      />
    </div>
  }

}
export default Mine;
