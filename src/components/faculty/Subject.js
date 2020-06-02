import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Subject extends Component {
    render() {
        console.log(this.props.match.params.subjectcode)
        return (
            <div>
                <NavLink to="/facultydashboard/studentlist">Add students</NavLink>
                <br/>
                <NavLink to="/facultydashboard/addmarks">Add Marks</NavLink>
            </div>
        )
    }
}
