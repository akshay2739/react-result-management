import React from 'react'

export default function AddMarks(props) {
    return (
        <div className="mt-2  w-50 mx-auto">
            <div className=" p-2 d-flex w-100 justify-content-between mx-auto mb-2">
                <label>ID </label>
                <p>{props.student.id}</p>
                <label >Name</label>
                <p>{props.student.name}</p>
                <label>Mark</label>
                <input type="text" />
            </div>
        </div>
       
    )
}
