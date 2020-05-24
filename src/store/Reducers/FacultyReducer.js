const initstate = {
    students : [
        {id:1, name:'akshay',marks:''},
        {id:2, name:'akshay',marks:''},
        {id:3, name:'akshay',marks:''},
        {id:4, name:'akshay',marks:''},
        {id:5, name:'akshay',marks:''},
        {id:6, name:'akshay',marks:''},
        {id:7, name:'akshay',marks:''},
        {id:8, name:'akshay',marks:''},
        {id:9, name:'akshay',marks:''},
        {id:10, name:'akshay',marks:''}
    ]
}

const FacultyReducer = (state = initstate , action) => {
    switch(action.type){
        default:
            return state
    }
}

export default FacultyReducer