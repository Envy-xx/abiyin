import React, { memo } from 'react'
import { SearchTabsWrapper } from './style'
const SearchTabs = memo((props) => {
  const {searchInfo,setCurrentTab,currentTab} = props
  const searchTitles = searchInfo.map(item => item.title)
  
  return (
    <SearchTabsWrapper>
      <div className="tabs">
        {searchTitles.map((item,index) => {
          return (
            <div className={`tab-item ${index === currentTab ? 'active' : ''}`} key={index} onClick={() => setCurrentTab(index)}>
              {item}
            </div>
          )
        })}
      </div>
    </SearchTabsWrapper>
  )
})

export default SearchTabs