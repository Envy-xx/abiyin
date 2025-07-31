import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'
const Tabs = memo((props) => {
  const { destList, onTabChange } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  // 直接处理 dest_list 对象
  const cityList = destList ? Object.keys(destList) : []
  const handleClick = (city, index) => {
    setSelectedIndex(index)
    // 获取选中城市的房源数据
    const selectedRooms = destList[city] || []
    onTabChange && onTabChange(selectedRooms, city, index)
  }
  return (
    <TabsWrapper>
      <ScrollView >
        {cityList.map((city, index) => (
          <div 
            key={city} 
            className={`tab-item ${selectedIndex === index ? 'active' : ''}`}  
            onClick={() => {
              handleClick(city, index)
            }}
          >
            {city}
          </div>
        ))}
      </ScrollView>
    </TabsWrapper>
  )
})

Tabs.propTypes = {
  destList: PropTypes.object,
  onTabChange: PropTypes.func
}

export default Tabs 