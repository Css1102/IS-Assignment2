import React,{useRef,useState,useEffect,useCallback} from 'react'
import pencil_img from '../assets/pencil.png'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import chevron_icon from '../assets/chevron-down.png'
import plus from '../assets/plus.png'
import minus from '../assets/minus.png'
import {addPageno} from '../Store/todoSlice'
import { deleteElement } from '../Store/todoSlice'
import {takeId} from '../Store/todoSlice'

const Home = () => {
  const navigate=useNavigate()
  const[toggle,setToggle]=useState(false)
  const dispatch=useDispatch()
  const barref=useRef(null)
  const arrayTodo=useSelector((state)=>state.todo.todoArr)
  const addVal=1;
  function handleUpdate(elem){
  dispatch(takeId({...elem}))
  navigate('/update')
  }
  const handleDelete=(Id)=>{
  console.log(Id)
  dispatch(deleteElement(Id))
  }
  const handleAdd=()=>{
  navigate('/add')
  }
  const[loading,setLoading]=useState(false)
  const checkref=useRef()
  const observer=useRef()
const lastPostref=useCallback(
(node)=>{
if(loading){
return;
}
if(observer.current){
  observer.current.disconnect()
}
observer.current=new IntersectionObserver((entries)=>{
if(entries[0].isIntersecting){
dispatch(addPageno(addVal))
}
}

)
if(node){
observer.current.observe(node)
}
},
[loading]
)

  return (
    <div className="w-full min-h-screen m-0 p-0 bg-slate-950">
    <div className="text-white font-extrabold text-3xl ml-20 pt-20">TO-DO LIST</div>
    <button className="w-[45px] h-[30px] bg-pink-600 mt-8 relative left-[335px]" onClick={handleAdd}><img src={plus} 
    alt="didn't get plus icon" className="h-[50%] w-[50%] ml-2.5" /></button>
    <div className='w-[80%] h-[80%] mx-20 my-10 flex flex-col justify-evenly items-center'>
    {console.log(arrayTodo)}
    
    {arrayTodo.map((elem)=>(
    <div key={elem.id} value={elem.id} ref={lastPostref} className={`w-[100%] max-h-[400px] h-[60px] flex justify-between items-center mb-4`}>
    <div className="ml-32">
    <input type="checkbox" className="ml-1 mr-2.5" ref={checkref} />
    <button onClick={()=>handleUpdate(elem)} className="h-[30px] w-[45px] relative top-2  bg-yellow-500"><img src={pencil_img} alt='image didnt come' className="h-[50%] w-[50%] ml-2.5" /></button>
    </div>
    <div value={elem.id} ref={barref} className={`w-[600px] h-[30px] border border-yellow-500  relative right-10 mt-2 cursor-pointer rounded-xl flex justify-between items-center`}>
    <div className="font-semibold text-lg text-white ml-2 ">{elem.title}</div>
    <button value={elem.id} className='z-10' ><img src={chevron_icon} alt="" className="mr-2" /></button>
     {/* {toggle && <div className='h-[100px] w-[600px] border border-black bg-white text-slate-900
    mt-40 text-left'>
    {elem.desc}
    </div>} */}
    </div>
    <button onClick={()=>handleDelete(elem.id)} className="h-[30px] w-[45px] relative top-1 right-20 bg-red-500"><img src={minus} alt='image didnt come' className="h-[50%] w-[50%] ml-2.5" /></button>
    </div>
    ))
    }
    </div>
    </div>
  )
}
// ${(checkref.current.id===elem.id && checkref.current.checked)?'border-green-600':'border-yellow-500'}
export default Home