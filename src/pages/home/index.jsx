import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import SectionHeader from '@/components/section-header'
import { fetchGoodPriceInfoAction, fetchHighScoreInfoAction, fetchDiscountInfoAction, fetchHotRecommenddestAction,fetchLongForAction,fetchPlusAction} from '@/store/modules/home'
import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'
import Tabs from '@/components/section-tabs'
import SectionRooms from '@/components/section-rooms'
import HomeLongFor from './c-cpns/home-longfor'
import PlusHome from './c-cpns/home-plus'
import SectionFooter from '@/components/section-footer'
import AppHeader from '@/components/app-header'
import { changeIsFixedAction } from '@/store/modules/main'
const Home = memo(() => {
  const dispatch = useDispatch()
  const [discountRooms, setDiscountRooms] = useState([])
  const [hotRecommendRooms, setHotRecommendRooms] = useState([])
  const isFixed = useSelector(state => state.main.isFixed,shallowEqual)
  useEffect(() => {
    dispatch(fetchGoodPriceInfoAction())
    dispatch(fetchHighScoreInfoAction())
    dispatch(fetchDiscountInfoAction())
    dispatch(fetchHotRecommenddestAction())
    dispatch(fetchLongForAction())
    dispatch(fetchPlusAction())
  }, [dispatch])
  useEffect(() => {
    dispatch(changeIsFixedAction(true))
  }, [])

  // 获取数据 useSelector
  const goodPriceInfo = useSelector(state => state.home.goodPriceInfo, shallowEqual
    
  )
  const highScoreInfo = useSelector(state => state.home.highScoreInfo, shallowEqual)
  const discountInfo = useSelector(state => state.home.discountInfo, shallowEqual)
  const hotRecommenddest = useSelector(state => state.home.hotRecommenddest, shallowEqual)
  const longFor = useSelector(state => state.home.longFor, shallowEqual)
  const plus = useSelector(state => state.home.plus, shallowEqual)
  // 初始化默认显示第一个城市的数据
  useEffect(() => {
    if (discountInfo.dest_list) {
      const firstCity = Object.keys(discountInfo.dest_list)[0]
      if (firstCity) {
        setDiscountRooms(discountInfo.dest_list[firstCity] || [])
      }
    }
  }, [discountInfo.dest_list])
  
  useEffect(() => {
    if (hotRecommenddest.dest_list) {
      const firstCity = Object.keys(hotRecommenddest.dest_list)[0]
      if (firstCity) {
        setHotRecommendRooms(hotRecommenddest.dest_list[firstCity] || [])
      }
    }
  }, [hotRecommenddest.dest_list])
  
  // 处理 discount tabs 切换
  const handleDiscountTabChange = (selectedRooms) => {
    setDiscountRooms(selectedRooms)
  }
  
  // 处理 hot-recommend tabs 切换
  const handleHotRecommendTabChange = (selectedRooms) => {
    setHotRecommendRooms(selectedRooms)
  }
  return (
    <HomeWrapper>
      <AppHeader isFixed={isFixed ? 'fixed' : ''} />
      <HomeBanner />
      <div className="content">
        <div className="discount">
          <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle} />
          <Tabs destList={discountInfo.dest_list} onTabChange={handleDiscountTabChange} />
          <SectionRooms roomList={discountRooms} itemWidth="33.33%" />
          <SectionFooter name="折扣" />
        </div>
        <div className="hot-recommend">
          <SectionHeader title={hotRecommenddest.title} subtitle={hotRecommenddest.subtitle} />
          <Tabs destList={hotRecommenddest.dest_list} onTabChange={handleHotRecommendTabChange} />
          <SectionRooms roomList={hotRecommendRooms} itemWidth="33.33%" />
          <SectionFooter name="热门" />
        </div>
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title} subtitle={goodPriceInfo.subtitle} />
          <SectionRooms roomList={goodPriceInfo?.list} />
          <SectionFooter name="低价" />
        </div>
        <div className="high-score">
          <SectionHeader title={highScoreInfo.title} subtitle={highScoreInfo.subtitle} />
          <SectionRooms roomList={highScoreInfo?.list} />
          <SectionFooter name="高星" />
        </div>
        <div className="longfor">
          <HomeLongFor longFor={longFor} />
          <SectionFooter name="向往" />
        </div>
        <div className="plus">
          <PlusHome plus={plus} />
          <SectionFooter name="PLUS" />
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home