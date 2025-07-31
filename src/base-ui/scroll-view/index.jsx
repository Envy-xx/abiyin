import React, { memo,useState,useRef,useEffect } from 'react'
import { ScrollViewWrapper } from './style'
import { CaretLeftFilled,CaretRightFilled } from '@ant-design/icons'

const ScrollView = memo((props  ) => {
  const[showRight,setShowRight] = useState(false)
  const[showLeft,setShowLeft] = useState(false)
  const[posIndex,setPosIndex] = useState(0)
  const distanceTotal = useRef(0)
  const contentRef = useRef()
  
  useEffect(()=>{
    // 检查 contentRef 是否存在，避免空引用错误
    if (!contentRef.current) return
    
    // 获取内容(.tabs)的实际宽度
    const contentWidth = contentRef.current.scrollWidth
    // 获取外层容器(.slot)的宽度作为可视区域
    const clientWidth = contentRef.current.parentElement.clientWidth
    const distance = contentWidth - clientWidth
    distanceTotal.current = distance
    
    setShowRight(distance > 0)
    setShowLeft(false)
    setPosIndex(0)
  },[props.children])
  
  const handleClick = (right) => {
    if (!contentRef.current || !contentRef.current.children) return
    
    const newPosIndex = right ? posIndex + 1 : posIndex - 1
    const childrenLength = contentRef.current.children.length
    
    // 边界检查
    if (newPosIndex < 0 || newPosIndex >= childrenLength) return
    
    const newEl = contentRef.current.children[newPosIndex]
    if (!newEl) return
    
    const newOffsetLeft = newEl.offsetLeft
    contentRef.current.style.transform = `translateX(-${newOffsetLeft}px)`
    setShowRight(distanceTotal.current > newOffsetLeft)
    setShowLeft(newOffsetLeft > 0)
    setPosIndex(newPosIndex)
  }
  
  return (
    <ScrollViewWrapper>
      {showLeft && (
        <div className="lArrow" onClick={()=>handleClick(false)}>
          <CaretLeftFilled />
        </div>
      )}
      {showRight && (
        <div className="rArrow" onClick={()=>handleClick(true)}>
          <CaretRightFilled />
        </div>
      )}
      <div className="slot">
       <div className="tabs" ref={contentRef}>
        {props.children}
       </div>
      </div>
    </ScrollViewWrapper>
  )
})

export default ScrollView