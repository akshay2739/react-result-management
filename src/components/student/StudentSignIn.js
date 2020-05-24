import React from 'react';
import { useRouteMatch } from 'react-router-dom';

const StudentSignIn = () => {

        let { path, url } = useRouteMatch();
        console.log(path,url)
        return (
            <div className="w-50 mx-auto shadow-lg mt-5 d-flex justify-content-center">
                <form className="p-1 w-50 ">
                    <div className="form-group">
                        <label htmlfor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                    </div>
                    <div className="form-group">
                        <label htmlfor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    
}

export default StudentSignIn;
