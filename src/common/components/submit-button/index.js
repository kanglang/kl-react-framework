/*
 * @Author: kanglang
 * @Date: 2020-07-14 08:52:07
 * @LastEditors: kanglang
 * @LastEditTime: 2020-10-12 21:58:46
 * @Description: button组件
 */
import React, { Component } from 'react';
import '../css/submit-button.scss';
import {PropTypes} from 'prop-types';

class SubmitButton extends Component {
  static propTypes = {
    btnBgColor: PropTypes.string,
    btnText: PropTypes.string,
    onClick: PropTypes.func
  };
  static defaultProps = {
    btnBgColor: '',
    btnText: ''
  }

    submit = () => {
      this.props.onClick && this.props.onClick()
    }
    render () {
      const { btnText, btnBgColor } = this.props;
      return (
        <>
          <div className="submit">
            <div
              className="submit-btn"
              onClick={this.submit}
              style={btnBgColor && { background: btnBgColor}}
            >
              {btnText ? btnText : '提交'}
            </div>
          </div>
        </>
      )

    }

}
export default SubmitButton;
