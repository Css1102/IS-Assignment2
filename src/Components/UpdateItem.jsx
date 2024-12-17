import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { updateTitleDesc } from '../Store/todoSlice'
function UpdateItem() {
const dispatch=useDispatch()
const navigate=useNavigate()
const updateObj=useSelector((state)=>state.todo.updateItem)
const[titleval,setTitleval]=useState(updateObj.title)
const[descval,setDescval]=useState(updateObj.desc)
const handleUpdate=(e)=>{
e.preventDefault()
const actionObj={
title:titleval,
desc:descval,
}
dispatch(updateTitleDesc(actionObj))
navigate('/')
}
  return (
    <div className='w-full min-h-screen bg-slate-950'>
    <div className=" h-[600px] w-[80%] flex flex-col justify-around items-center">
    <form action="" className='h-[100%] w-[100%] mt-20' onSubmit={handleUpdate}>
    <label htmlFor="title"  className='mr-2 text-white font-light'>title:</label>
    <input type="text" id="title"
    value={titleval}
    onChange={(e)=>setTitleval(e.target.value)}
     className="text-white text-base font-bold w-[80%] h-[30px] 
     rounded-lg border bg-slate-950 border-white mb-10 cursor-pointer"/><br/>
    <label htmlFor="description" className='mr-2 relative bottom-[190px] text-white font-light'>description:</label>
    <textarea type="text" aria-rowspan='10' id="description" 
    value={descval}
    onChange={(e)=>setDescval(e.target.value)}
    className="text-white  text-base font-bold w-[80%] cursor-pointer h-[200px] mr-8 bg-slate-950  rounded-lg border border-white mb-2" />
    <button type='submit' className='w-[80px] h-[40px] mt-10 border border-white rounded-xl text-white bg-violet-700'>Update</button>
    </form>
    </div>
    </div>

  )
}

export default UpdateItem