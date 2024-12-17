import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import { Store } from './Store/Store'
import Home from './Components/Home.jsx'
import AddItem from './Components/AddItem.jsx'
import { BrowserRouter, Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import UpdateItem from './Components/UpdateItem.jsx'
const todoRoute=createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<App/>}>
  <Route path="/" element={<Home/>}/>
  <Route path='/add' element={<AddItem/>}/>
  <Route path='/update' element={<UpdateItem/>}/>

  </Route>

  ))


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
  <RouterProvider router={todoRoute}/>
  </Provider>
)
