import React, { memo } from 'react'
import { SearchContentWrapper } from './style'
const SearchContent = memo((props) => {
  const {searchInfo} = props
  const searchInfos = searchInfo.searchInfos
  
  return (
    <SearchContentWrapper>
      <div className="desc">
        {
          searchInfos.map((item,index) => {
            return (
              <div className="item" key={index}>
                {item.desc}
              </div>
            )
          }) 
        }
      </div>
    </SearchContentWrapper>
  )
})

export default SearchContent