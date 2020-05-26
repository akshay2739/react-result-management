import React, { Component } from 'react'

export default class Faculty extends Component {
    render() {
       // console.log(this.props.faculty)
        return (
            <div>
                <p>{this.props.faculty.name}</p>
            </div>
        )
    }
}
