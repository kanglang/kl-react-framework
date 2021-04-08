/*
 * @Author: kanglang
 * @Date: 2020-07-14 08:57:14
 * @LastEditors: kanglang
 * @LastEditTime: 2021-04-07 18:16:28
 * @Description: 我的
 */
import React, { Component } from 'react';
import SubmitButton from '../../common/submit-button';

class Mine extends Component {

  render () {
    return <div style={{height: '100%', width: '100%', background: '#d6f7d6'}}>
      <div style={{height: '200px', fontSize: '1.4rem', color: 'pink', padding: '30px 0', textAlign: 'center'}}>我的</div>
      <SubmitButton
        btnText="立即体验"
        onClick={() => {this.props.history.push('/')}}
        btnBgColor={'red'}
      />
    </div>
  }

}
export default Mine;
