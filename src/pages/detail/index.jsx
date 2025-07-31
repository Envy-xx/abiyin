import React, { memo, useEffect } from 'react'
import {DetailWrapper} from './style'
import { useSearchParams } from 'react-router-dom'
import AppHeader from '@/components/app-header'
import { useDispatch,useSelector } from 'react-redux'
import { changeIsFixedAction } from '@/store/modules/main'
import { shallowEqual } from 'react-redux'
const Detail = memo(() => {
  const [searchParams] = useSearchParams()
  const roomId = searchParams.get('id')
  const dispatch = useDispatch()
  const isFixed = useSelector(state => state.main.isFixed,shallowEqual)
  useEffect(() => {
    dispatch(changeIsFixedAction(false))
    window.scrollTo(0,0)
  }, [])
  
  return (
    <DetailWrapper>
      <AppHeader isFixed={isFixed ? 'fixed' : ''} />
      <h1>房间详情页</h1>
      {roomId && <p>房间ID: {String(roomId)}</p>}
    </DetailWrapper>
  )
})

export default Detail