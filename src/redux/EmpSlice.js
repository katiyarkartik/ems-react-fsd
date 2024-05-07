import { createSlice } from "@reduxjs/toolkit";
console.log('empSlice');
const empSlice = createSlice({
    name: 'emp',
    initialState : { 
        empObj: '',
        empDataList:[]
    },
    reducers : { // more methods 
        setEmpObj : (state, action) => {
            console.log(action.payload);
            state.empObj = action.payload;
        },
        setAllEmps:(state,action)=>{
            console.log(action.payload);
            state.empDataList=action.payload;

        }

    }
});
export default empSlice.reducer;

export const {setEmpObj,setAllEmps} = empSlice.actions;

// const empSlice = createSlice({
//     name: 'empObj',
//     initialState : '',
//     reducers : {
        
//     }
// });




// import { createSlice } from "@reduxjs/toolkit";
// import Employee from "../components/Employee";

// const EmpSlice = createSlice({
//     name: 'em',
//     initialState: '',
//     reducers : {
//         abc: (state, action) => {
//             state.em = action.payload;
//         }
//     },
// });

// // export default 
// export const {abc}  = EmpSlice.actions;
// export default EmpSlice.reducer;

// // const EmpReducer = createReducer(
// //     {
        
// //     }

// //     );