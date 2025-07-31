import React, { memo } from 'react'
import { SectionHeaderWrapper } from './style'
const SectionHeader = memo((props) => {
  const {title,subtitle} = props
  return (
    <SectionHeaderWrapper>
      <div className="title">
        {title}
      </div>
     {subtitle && <div className="subtitle">
        {subtitle}
      </div>}
    </SectionHeaderWrapper>
  )
})
export default SectionHeader