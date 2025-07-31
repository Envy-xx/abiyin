import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getEntireAll } from '@/services/modules/index'

export const fetchEntireAllAction = createAsyncThunk('getEntireAll', async ({ offset, size }) => {
    const res = await getEntireAll(offset, size)
    return res
})

const EntireSlice = createSlice({
    name: 'entire',
    initialState: {
        entireAll: {},
        currentPage: 1,
        size: 20,
        totalCount: 0,
        loading: false,
        error: null
    },
    reducers: {
        changeEntireAllAction(state, action) {
            state.entireAll = action.payload
        },
        changePageAction(state, action) {
            state.currentPage = action.payload
        },
        resetPageAction(state) {
            state.currentPage = 1
        },
        clearErrorAction(state) {
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEntireAllAction.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchEntireAllAction.fulfilled, (state, action) => {
                state.entireAll = action.payload
                state.totalCount = action.payload.totalCount || 0
                state.loading = false
                state.error = null
            })
            .addCase(fetchEntireAllAction.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || '数据加载失败'
            })
    }
})

export const { changeEntireAllAction, changePageAction, resetPageAction, clearErrorAction } = EntireSlice.actions
export default EntireSlice.reducer