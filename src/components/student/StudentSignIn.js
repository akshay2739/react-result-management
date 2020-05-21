import React, { Component } from 'react';
import { useRouteMatch } from 'react-router-dom';

const StudentSignIn = () => {

        let { path, url } = useRouteMatch();
        console.log(path,url)
        return (
            <div>
                <form action=""  className="w-50 p-10">
                    <div className="form-group  bg-dark text-white">
                        <label htmlFor="">Email</label>
                        <input type="text" id="email"  className="form-control"/>
                        <label htmlFor="">password</label>
                        <input type="text" id="password"  className="form-control"/>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                </form>
            </div>
        );
    
}

export default StudentSignIn;
