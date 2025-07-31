import React, { memo } from 'react'
import { HomePlusWrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
const PlusHome = memo((props) => {
  const {plus} = props
  return (
    <HomePlusWrapper>
      <SectionHeader title={plus?.title} subtitle={plus?.subtitle} />
      <SectionRooms roomList={plus?.list} itemWidth="25%" />
    </HomePlusWrapper>
  )
})

export default PlusHome