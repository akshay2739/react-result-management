import React from 'react'

export default function AddMarks() {
    return (
        <div className="w-50 mx-auto shadow-lg mt-5 d-flex justify-content-center">
                <form className="p-1 w-50 " onSubmit = {this.handleSubmit}>
                    <div className="form-group d-flex">
                        <label>ID NO</label>  
                        <p>{this.props.student.idno}</p>    
                    </div>
                    <div className="form-group">
                        <label>marks</label>
                        <input type="password" className="form-control" id="password" onChange={this.handleChange}/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
       
    )
}
