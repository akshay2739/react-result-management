import React, { Component } from 'react'

export default class AddSubject extends Component {
    
    state = {
        subjectcode:'',
        subjectname:''
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    
    render() {
        return (
            <div className="w-50 mx-auto shadow-lg mt-5 d-flex justify-content-center">
            <form className="p-1 w-50 " onSubmit = {this.handleSubmit}>
                <div className="form-group">
                    <label >Subject code code</label>
                    <input type="text" className="form-control" id="subjectcode" aria-describedby="emailHelp" onChange={this.handleChange}/>
                    
                </div>
                <div className="form-group">
                    <label >Subject Name</label>
                    <input type="text" className="form-control" id="subjectname" aria-describedby="emailHelp" onChange={this.handleChange}/>
                    
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        )
    }
}
