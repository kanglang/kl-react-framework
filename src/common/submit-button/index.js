/*
 * @Author: kanglang
 * @Date: 2020-07-14 08:52:07
 * @LastEditors: kanglang
 * @LastEditTime: 2021-05-06 14:35:17
 * @Description: button组件
 */
import React from 'react';
import './css/submit-button.scss';

const SubmitButton = ({ btnText, btnBgColor, onClick }) => {

  const submit = () => {
    onClick && onClick()
  }

  return (
    <div className="submit">
      <div
        className="submit-btn"
        onClick={submit}
        style={btnBgColor ? { background: btnBgColor } : {}}
      >
        {btnText ? btnText : '提交'}
      </div>
    </div>
  )

}
export default SubmitButton;
