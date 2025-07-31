
import { createSlice } from '@reduxjs/toolkit'

const MainSlice = createSlice({
    name: 'main',
    initialState: {
      isFixed:false,
    },
    reducers: {
        changeIsFixedAction(state,action){
            state.isFixed = action.payload
        }
    }
})
export const {changeIsFixedAction} = MainSlice.actions
export default MainSlice.reducer  