import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Home extends Component {
    
    state = {
        link:null
    }

    handleClick = (e) => {
        this.setState({
            link:e.target.id
        })
    }
    
    render() {
        if(this.state.link){
            return(<Redirect to={this.state.link} />)
        }
        return (
            <div className="w-100 d-flex justify-content-around align-items-center bg-dark h-100 ">
                <button type="button" className="btn btn-primary btn-lg h-25 w-25" id="/admindashboard" onClick={this.handleClick}>Admin</button>
                <button type="button" className="btn btn-success btn-lg h-25 w-25" id="/facultydashboard" onClick={this.handleClick}>Faculty</button>
                <button type="button" className="btn btn-warning btn-lg h-25 w-25" id="/studentdashboard" onClick={this.handleClick}>Student</button>
            </div>
        );
    }
}

export default Home;
