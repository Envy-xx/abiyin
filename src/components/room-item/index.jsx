import React, { memo } from 'react'
import { RoomItemWrapper } from './style'
import { Rating } from '@mui/material'
import { Carousel } from "antd";

const RoomItem = memo((props) => {
  const {roomInfo, itemWidth, onItemClick} = props
  
  // 添加安全检查
  if (!roomInfo || typeof roomInfo !== 'object') {
    return null
  }
  
  // 移除调试信息
  
  const {picture_urls, picture_url} = roomInfo
  // 如果有picture_urls就使用picture_urls，否则使用picture_url（需要转换为数组）
  const pictureList = picture_urls?.length > 0 ? picture_urls : (picture_url ? [picture_url] : [])
  
  // 处理点击事件
  const handleItemClick = () => {
    // 如果传递了onItemClick函数，则调用它
    if (onItemClick && typeof onItemClick === 'function') {
      onItemClick(roomInfo)
    }
  }
  
  try {
    return (
    <RoomItemWrapper $itemWidth={itemWidth} $enableNavigation={!!onItemClick}>
      <div className="inner" onClick={handleItemClick}>
        <div className="slide">
          <Carousel arrows={true} dots={false}>
            {
              pictureList?.map((item, index) => {
                return (
                  <div key={item || index} className="cover">
                    <img src={item || ""} alt="" />
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <div className="desc" style={{color:roomInfo?.verify_info?.messages?.length > 0 ? "#008489" : "#999"}}>
          {(() => {
            const messages = roomInfo?.verify_info?.messages;
            if (Array.isArray(messages) && messages.length > 0) {
              // 确保数组中的每个元素都是字符串
              const stringMessages = messages.filter(msg => 
                typeof msg === 'string' || typeof msg === 'number'
              ).map(msg => String(msg));
              return stringMessages.join("·");
            }
            return "";
          })()}
        </div>
        <div className="name">{String(roomInfo?.name || "")}</div>
        <div className="price">{String(roomInfo?.price_format || "")}/晚</div>
        <div className="rating">
          <Rating value={roomInfo?.star_rating ?? 4.5} precision={0.1} readOnly  sx={{fontSize:12,color:"#008489"}}/>
          <span className="count">评论{Number(roomInfo?.reviews_count) || 0}</span>
        </div>
      </div>
    </RoomItemWrapper>
    )
  } catch (error) {
    console.error('RoomItem渲染错误:', error, roomInfo)
    return (
      <RoomItemWrapper $itemWidth={itemWidth} $enableNavigation={false}>
        <div className="inner">
          <div>房间数据加载失败</div>
        </div>
      </RoomItemWrapper>
    )
  }
})

export default RoomItem