import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './todoSlice.js'
export const Store=configureStore({
reducer:{
todo:todoSlice,
}
})