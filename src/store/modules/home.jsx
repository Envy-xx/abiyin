import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { getHomeGoodPriceInfo ,getHomeHighScoreInfo ,getHomeDiscountInfo,getHomeHotRecommenddest,getHomeLongFor,getHomePlus} from '@/services/modules/index'
export const fetchGoodPriceInfoAction = createAsyncThunk('getGoodPriceInfo',async()=>{
    const res = await getHomeGoodPriceInfo()
    return res
})
export const fetchHighScoreInfoAction = createAsyncThunk('getHighScoreInfo',async()=>{
    const res = await getHomeHighScoreInfo()
    return res
})
export const fetchDiscountInfoAction = createAsyncThunk('getDiscountInfo',async()=>{
    const res = await getHomeDiscountInfo()
    return res
})
export const fetchHotRecommenddestAction = createAsyncThunk('getHotRecommenddest',async()=>{
    const res = await getHomeHotRecommenddest()
    return res
})
export const fetchLongForAction = createAsyncThunk('getLongFor',async()=>{
    const res = await getHomeLongFor()
    return res
})
export const fetchPlusAction = createAsyncThunk('getPlus',async()=>{
    const res = await getHomePlus()
    return res
})
const HomeSlice = createSlice({
    name: 'home',
    initialState: {
        goodPriceInfo:{},
        highScoreInfo:{},
        discountInfo:{},
        hotRecommenddest:{},
        longFor:{},
        plus:{},
    },
    reducers: {
        changeGoodPriceInfoAction(state,action){
            state.goodPriceInfo = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGoodPriceInfoAction.fulfilled, (state, action) => {
            state.goodPriceInfo = action.payload
        })
        builder.addCase(fetchHighScoreInfoAction.fulfilled, (state, action) => {
            state.highScoreInfo = action.payload
        })
        builder.addCase(fetchDiscountInfoAction.fulfilled, (state, action) => {
            state.discountInfo = action.payload
        })
        builder.addCase(fetchHotRecommenddestAction.fulfilled, (state, action) => {
            state.hotRecommenddest = action.payload
        })
        builder.addCase(fetchLongForAction.fulfilled, (state, action) => {
            state.longFor = action.payload
        })
        builder.addCase(fetchPlusAction.fulfilled, (state, action) => {
            state.plus = action.payload
        })
    }
})

export const { changeGoodPriceInfoAction } = HomeSlice.actions
export default HomeSlice.reducer