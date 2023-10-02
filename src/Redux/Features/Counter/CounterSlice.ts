import { createSlice } from '@reduxjs/toolkit'


export interface CounterState {
     value: number
}

const initialState: CounterState = {
     value: 0
}

const counterSlice = createSlice({
     name: 'counter',
     initialState,
     reducers: {}
})

export default counterSlice.reducer;