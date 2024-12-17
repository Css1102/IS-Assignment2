import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'
import {useDispatch,useSelector} from 'react-redux'
import { initialLoad} from './Store/todoSlice'
import { Store } from './Store/Store'
import {Provider} from 'react-redux'
import {Outlet} from 'react-router-dom'

function App() {
const dispatch=useDispatch();
const pageNo=useSelector((state)=>state.todo.pageno)
useEffect(()=>{
  getAPIdata()
  },[pageNo])
  
const getAPIdata=async()=>{
try{
let response=await axios.get('https://jsonplaceholder.typicode.com/todos/')
if(response){
dispatch(initialLoad(response.data.splice(0,5*pageNo)))
}
}
catch(e){
console.log("response not available",e);
}
}
  return (
    <div className="w-full m-0 p-0 h-screen">
    <main className='bg-slate-950'>
    <Outlet/>
    </main>
    </div>
  )
}

export default App
