import React, { Component } from 'react';


class Nearby extends Component {

    render() {
        return <div>
            <button onClick={() => { this.props.history.push('/Mine') }}>我的</button>
            <button onClick={() => { this.props.history.push('/') }}>首页</button>
            <div>我是附近</div>
        </div>
    }

}
export default Nearby;