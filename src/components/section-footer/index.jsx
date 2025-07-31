import React, { memo } from 'react'
import { SectionFooterWrapper } from './style'
import { useNavigate } from 'react-router-dom'
const SectionFooter = memo((props) => {
  const {name} = props
  const message = name ? `更多${name}城市的信息>` : "更多信息>"
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/entire`)
  }
  return (
    <SectionFooterWrapper>
      <div className="meassage" onClick={handleClick}>
        {message}
      </div>
    </SectionFooterWrapper>
  )
})

export default SectionFooter