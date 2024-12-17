import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {addTodoElement} from '../Store/todoSlice'
import { useNavigate } from 'react-router'

const AddItem = () => {
  const navigate=useNavigate()
const[titleval,setTitleval]=useState("")
const[descval,setDescval]=useState("")

const dispatch=useDispatch()
const handleSubmit=(e)=>{
e.preventDefault()
const titleIs=document.getElementById('title').value;
const descIs=document.getElementById('description').value;
const actionObj={
first:titleIs,
second:descIs,
}
dispatch(addTodoElement(actionObj))
navigate('/')

}
  return (
    <div className='w-full min-h-screen bg-slate-950'>
    <div className=" h-[600px] w-[80%] flex flex-col justify-around items-center">
    <form action="" className='h-[100%] w-[100%] mt-20' onSubmit={handleSubmit}>
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
    <button type='submit' className='w-[80px] h-[40px] mt-10 border border-white rounded-xl text-white bg-blue-800'>Submit</button>
    </form>
    </div>
    </div>
  )
}

export default AddItem