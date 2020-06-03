import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                {/* {console.log("main:",this.props.children)} */}
            </div>
        )
    }
}
