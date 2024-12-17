import { createSlice,nanoid } from "@reduxjs/toolkit"

const initialState={
todoArr:[],
pageno:1,
updateItem:{},
}

const todoSlice=createSlice({
name:'todo',
initialState,
reducers:{
initialLoad:(state,action)=>{
const objKeyadded=action.payload.map((item)=>item["desc"]="Chiranjeev is a very nice boy")
state.todoArr=[...action.payload]
},
addPageno:(state,action)=>{
if(state.pageno<=4){
state.pageno+=action.payload;
}
},
addTodoElement:(state,action)=>{
state.todoArr.unshift({completed:false,desc:action.payload.second,id:nanoid(),title:action.payload.first})
},
deleteElement:(state,action)=>{
const toDel=confirm("Are you sure you want to delete this item");
if(toDel===true){
const updateArr=state.todoArr.filter((item)=>item.id!==action.payload);
state.todoArr=[...updateArr]
}
},
takeId:(state,action)=>{
console.log(action.payload)
state.updateItem={...action.payload}
},
updateTitleDesc:(state,action)=>{
const itemInd=state.todoArr.findIndex((todo)=>todo.id===state.updateItem.id);
state.todoArr[itemInd]={...state.todoArr[itemInd],title:action.payload.title,desc:action.payload.desc}
}
}
})

export default todoSlice.reducer
export const {initialLoad,addPageno,addTodoElement,deleteElement,takeId,updateTitleDesc}=todoSlice.actions
