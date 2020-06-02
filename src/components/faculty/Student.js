import React, { Component } from 'react';

class Student extends Component {
    render() {
        return (
            <div className="w-50 mx-auto shadow-lg mt-5 d-flex justify-content-center">
                <form className="p-1 w-50 " onSubmit = {this.handleSubmit}>
                    <div className="form-group d-flex justify-content-between">
                        <label>ID NO</label>  
                        <p>{this.props.student.idno}</p>  
                        <button type="submit" className="btn btn-primary">Add</button>  
                    </div>  
                </form>
            </div>
        );
    }
}

export default Student;
