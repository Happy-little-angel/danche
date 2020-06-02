import React, { Component } from 'react'
import {Row,Col} from 'antd'
import './index.less'
import fromDate from './../../utils/formDate'
export default class Header extends Component {
    state = {}
    componentWillMount() {
        this.setState({
            userName:"河畔一角"
        })
        //设置时间：
        setInterval(() => {
            let sysTime = fromDate.formDate(new Date().getTime());
            this.setState({sysTime})
        })
        // this.getWeatherAPIDATA()
    }
    //获得天气

    render() {
        return (
            <div className='header'>
                <Row className="header-top">
                    <Col span={24}>
                    <span>欢迎，{this.state.userName}</span>
                    <a href="/#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">首页</Col>
                    <Col span={20} className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-detail">晴转多云</span>
                    </Col>
                </Row>
            </div>
        )
    }
}
