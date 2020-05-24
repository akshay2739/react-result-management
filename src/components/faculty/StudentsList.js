import React from 'react';
import Addmarks from './AddMarks'




const StudentsList = (props) => {

    const students = props.students
    const studentList = students.map( (student) => {
        return(<Addmarks key={student.id} student={student}/>)
    } )
   // console.log(props.students)
    return (
        <div>
            {studentList}
            <input type="submit"/>
        </div>
    );
}

export default StudentsList;
