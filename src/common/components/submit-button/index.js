/*
 * @Author: kanglang
 * @Date: 2020-07-14 08:52:07
 * @LastEditors: kanglang
 * @LastEditTime: 2020-10-09 11:59:22
 * @Description: button组件
 */
import React, { Component } from 'react';
import '../css/submit-button.scss';

class SubmitButton extends Component {

    submit = () => {
        this.props.onClick && this.props.onClick()
    }
    render() {
        const { btnText, btnBgColor } = this.props;
        return (
            <>
                <div className="submit">
                    <div
                        className="submit-btn"
                        onClick={this.submit}
                        style={btnBgColor && { background: btnBgColor}}
                    >
                        {btnText ? btnText : "提交"}
                    </div>
                </div>
            </>
        )

    }

};
export default SubmitButton;