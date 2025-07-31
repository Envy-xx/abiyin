import React, { memo } from 'react'
import { HeaderCenterWrapper } from './style'
import { Input } from 'antd'

const HeaderCenter = memo((props) => {
  const { isScrolled, onSearchClick } = props
  
  return (
    <HeaderCenterWrapper className={isScrolled ? 'scrolled' : ''}>
      <div className="search-bar" onClick={!isScrolled ? onSearchClick : undefined}>
        <div className="text">
          <Input 
            placeholder='搜索房源和体验'
            readOnly
          />
        </div>
      </div>
    </HeaderCenterWrapper>
  )
})

export default HeaderCenter