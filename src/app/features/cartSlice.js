import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addCart: (state, action) => {
            state.push(action.payload);
        },
        removeCart: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    },
})

// Action creators are generated for each case reducer function
export const { addCart, removeCart } = cartSlice.actions
export default cartSlice.reducer