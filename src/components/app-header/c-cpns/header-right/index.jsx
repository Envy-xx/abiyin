import React, { memo, useEffect, useState } from 'react'
import { HeaderRightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon-global'
import IconProfileMenu from '@/assets/svg/icon-profile-menu'
import IconProfileAvatar from '@/assets/svg/icon-profile-avatar'
const HeaderRight = memo(() => {
  const [showPanel,setShowPanel] = useState(false)
  useEffect(() => {
    const handleClick = () => {
      setShowPanel(false)
    }
    window.addEventListener('click',handleClick,true)
    return () => {
      window.removeEventListener('click',handleClick,true)
    }
  }, [])
  const showPanelClickHandler = () => {
    setShowPanel(true)
    }
  const LoginClickHandler = () => {
    alert('登录')
  }
  return (
    <HeaderRightWrapper>
      <div className="btns">
        <span className="btn" onClick={()=>LoginClickHandler()}>登录</span>
        <span className="btn">注册</span>
        <span className="btn">
            <IconGlobal/>
        </span>

        <div className="profile" onClick={(e)=>{
          e.stopPropagation()
          showPanelClickHandler()
        }}>
          <span className="btn">
            <IconProfileAvatar/>
          </span>
          <span className="btn">
            <IconProfileMenu/>
           </span>
        </div>
      </div>
      {showPanel && (
        <div className="panel" onClick={e=>e.stopPropagation()}>
          <div className="top">
            <div className="item">注册</div>
            <div className="item" onClick={()=>LoginClickHandler()}>登录</div>
          </div>
          <div className="bottom">
            <div className="item">出租房源</div>
            <div className="item">开展体验</div>
            <div className="item">帮助</div>
          </div>
        </div>
      )}
    </HeaderRightWrapper>
  )
})

export default HeaderRight