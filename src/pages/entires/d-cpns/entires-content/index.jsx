import React, { memo, useEffect, useCallback } from 'react'
import { EntiresContentWrapper } from './style'
import { useSelector, useDispatch } from 'react-redux'
import { fetchEntireAllAction, clearErrorAction } from '@/store/modules/entire'
import SectionRooms from '@/components/section-rooms'
import { CircularProgress, Button, Alert } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const EntiresContent = memo(() => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { entireAll, currentPage, size, loading, error } = useSelector((state) => state.entire)
  const detailList = Array.isArray(entireAll?.list) ? entireAll.list : []
  
  // 移除调试信息
  
  // 获取数据的函数
  const fetchData = useCallback((page) => {
    const offset = (page - 1) * size
      dispatch(fetchEntireAllAction({ offset, size }))
  }, [dispatch, size])
  
  // 处理房间项点击事件
  const handleRoomItemClick = useCallback((roomInfo) => {
    // 跳转到详情页，传递房间ID
    navigate(`/detail?id=${roomInfo.id || roomInfo._id || ''}`)
  }, [navigate])
  
  // 初次加载数据
  useEffect(() => {
    fetchData(currentPage)
    window.scrollTo(0,0)
  }, [currentPage, fetchData])
  
  // 重试加载
  const handleRetry = () => {
    dispatch(clearErrorAction())
    fetchData(currentPage)
  }
  
  // 加载状态
  if (loading) {
    return (
      <EntiresContentWrapper>
        <div className="loading-container">
          <CircularProgress size={40} />
          <div style={{ marginTop: '16px', color: '#666' }}>正在加载数据...</div>
        </div>
      </EntiresContentWrapper>
    )
  }
  
  // 错误状态
  if (error) {
    return (
      <EntiresContentWrapper>
        <div className="loading-container">
          <Alert 
            severity="error" 
            action={
              <Button color="inherit" size="small" onClick={handleRetry}>
                重试
              </Button>
            }
            sx={{ maxWidth: 400 }}
          >
            {typeof error === 'string' ? error : '数据加载失败，请重试'}
          </Alert>
        </div>
      </EntiresContentWrapper>
    )
  }

  return (
    <EntiresContentWrapper>
      <SectionRooms roomList={detailList} itemWidth='20%' sliceNum={20} onItemClick={handleRoomItemClick} />
    </EntiresContentWrapper>
  )
})

export default EntiresContent