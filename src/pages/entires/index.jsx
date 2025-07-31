import React, { memo,useEffect } from 'react'
import {EntireWrapper} from './style'
import EntiresFilter from './d-cpns/entires-filter'
import EntiresContent from './d-cpns/entires-content'
import EntiresPagination from './d-cpns/entires-pagination'
import AppHeader from '@/components/app-header'
import { useDispatch,useSelector,shallowEqual  } from 'react-redux'
import { changeIsFixedAction } from '@/store/modules/main'
const Entire = memo(() => {
  const dispatch = useDispatch()
  const isFixed = useSelector(state => state.main.isFixed,shallowEqual)
  useEffect(() => {
    dispatch(changeIsFixedAction(true))
  }, [])
  return (
    <EntireWrapper>
      <AppHeader isFixed={isFixed ? 'fixed' : ''} />
      <EntiresFilter />
      <EntiresContent />
      <EntiresPagination />
    </EntireWrapper>
  )
})

export default Entire