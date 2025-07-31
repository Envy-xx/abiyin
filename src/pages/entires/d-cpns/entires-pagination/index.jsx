import React, { memo, useCallback } from 'react'
import { EntiresPaginationWrapper } from './style'
import { Pagination } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { fetchEntireAllAction, changePageAction } from '@/store/modules/entire'

/**
 * DetailPagination 分页组件
 * 负责处理分页逻辑和页面跳转
 */
const EntiresPagination = memo(() => {
  const dispatch = useDispatch()
  const { currentPage, size, totalCount, loading } = useSelector((state) => state.entire)
  
  // 计算总页数
  const totalPages = Math.ceil(totalCount / size)
  
  // 获取数据的函数       
  const fetchData = useCallback((page) => {
    const offset = (page - 1) * size
    dispatch(fetchEntireAllAction({ offset, size }))
  }, [dispatch, size])
  
  // 处理页面切换
  const handlePageChange = (event, page) => {
    // 防止重复点击当前页
    if (page === currentPage) return
    
    dispatch(changePageAction(page))
    fetchData(page)
    
    // 平滑滚动到顶部
    window.scrollTo(0,0)
  }
  
  // 如果总页数小于等于1，不显示分页组件
  if (totalPages <= 1) {
    return null
  }
  
  return (
    <EntiresPaginationWrapper>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        disabled={loading}
      />
    </EntiresPaginationWrapper>
  )
})

EntiresPagination.displayName = 'EntiresPagination'

export default EntiresPagination