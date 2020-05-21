import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Home extends Component {
    
    state = {
        link:null
    }

    handleClick = (e) => {
        console.log(e.target.id)
        this.setState({
            link:e.target.id
        })
    }
    
    render() {
        if(this.state.link){
            return(<Redirect to={this.state.link} />)
        }
        return (
            <div className="w-100 align-items-center  bg-dark ">
                <button type="button" className="btn btn-primary btn-lg mr-50" id="/admindashboard" onClick={this.handleClick}>Admin</button>
                <button type="button" className="btn btn-success btn-lg" id="/facultydashboard" onClick={this.handleClick}>Faculty</button>
                <button type="button" className="btn btn-warning btn-lg" id="/studentdashboard" onClick={this.handleClick}>Student</button>
            </div>
        );
    }
}

export default Home;
