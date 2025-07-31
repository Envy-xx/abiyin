import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionRoomsWrapper } from './style'
import RoomItem from '../room-item'
const SectionRooms = memo((props) => {
  const {roomList,itemWidth='25%',sliceNum=8,onItemClick} = props
  return (
    <SectionRoomsWrapper>
        <div className="list">
          <div className="list-item">
            {
              roomList?.slice(0,sliceNum).map((item,index) => {
                return <RoomItem roomInfo={item} key={index} itemWidth={itemWidth} onItemClick={onItemClick} />
              })
            }
          </div>
        </div>
    </SectionRoomsWrapper>
  )
})

SectionRooms.propTypes = {
  roomList:PropTypes.array
}

export default SectionRooms