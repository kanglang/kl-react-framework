/*
 * @Author: kanglang
 * @Date: 2020-07-14 08:52:07
 * @LastEditors: kanglang
 * @LastEditTime: 2020-10-09 12:03:18
 * @Description: 入口页
 */
import React, { Component } from 'react';
import './css/manageHome.scss';
import { requestGet, requestPost } from "../../common/https/network";
import baseHosts from '../../../config';
import Lunbo from './components/Lunbo';
import SubmitButton from '../../common/components/submit-button';

class ManageHome extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log(baseHosts)

    }
    nowPlay = () => {
        this.props.history.push('/Mine')
    }
    render() {
        let arr = [
            { title: "我们是共产主义接班人" },
            { title: "让我们荡起双桨" },
            { title: "让我们一起拥抱伟大祖国" },
            { title: "向伟大祖国致敬！" }
        ]
        return <div className="home">
            <Lunbo />
            {
                arr.map((item, index) => {
                    return (
                        <div key={index} className="home-title">{item.title}</div>
                    );
                })
            }
            <SubmitButton
                btnText="立即体验"
                onClick={this.nowPlay}
            />
        </div>
    }

};
export default ManageHome;