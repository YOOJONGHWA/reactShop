import { configureStore, createSlice, createAsyncThunk  } from '@reduxjs/toolkit'
import axios from 'axios';

// 리덕스 쓰는 이유 
// 컴포넌트간 state 공유 편해짐

let user = createSlice({
    name : 'user',
    initialState : 'kim'
})

let stock = createSlice({
    name : 'stock',
    initialState : [10, 11, 12] 
})

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ] 
})

export default configureStore({
  reducer: { 
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer
  }
}) 


