import React, { Component } from 'react';

class FacultySignIn extends Component {
    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit} className="w-50 p-10">
                    <div className="form-group  bg-dark text-white">
                        <label htmlFor="">Email</label>
                        <input type="text" id="email" onChange={this.handleChange} className="form-control"/>
                        <label htmlFor="">password</label>
                        <input type="text" id="password" onChange={this.handleChange} className="form-control"/>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default FacultySignIn;
