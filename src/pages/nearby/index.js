/*
 * @Author: kanglang
 * @Date: 2020-07-14 08:57:21
 * @LastEditors: kanglang
 * @LastEditTime: 2021-05-06 16:28:30
 * @Description: 
 */
import React, { Component } from 'react';
import { SubmitButton } from '@common'

class Nearby extends Component {

  render() {
    return <div>
      <div style={{ height: '100%', width: '100%', background: '#d6f7d6' ,textAlign:'center'}}>我是附近</div>
      <SubmitButton
        btnText="我的"
        onClick={() => { this.props.history.push('/Mine') }}
        btnBgColor={'red'}
      />
      <SubmitButton
        btnText="首页"
        onClick={() => { this.props.history.push('/') }}
        btnBgColor={'blue'}
      />
    </div>
  }

}
export default Nearby;
