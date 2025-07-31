import React, { memo } from 'react'
import { HeaderLeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon_logo'
import { useNavigate } from 'react-router-dom'
const HeaderLeft = memo(() => { 
  const navigate = useNavigate()
  const handleLogoClick=()=>{
    navigate('/home')
  }
  return (
    <HeaderLeftWrapper>
    <div className="logo" onClick={()=>handleLogoClick()}>
        <IconLogo/>
    </div>
    </HeaderLeftWrapper>
  )
})

export default HeaderLeft