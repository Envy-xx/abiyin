import React, { memo ,useRef,useEffect} from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const {total,currentIndex} = props
  const itemListRef = useRef()
  useEffect(() => {
    const selectItem = itemListRef.current.children[currentIndex]
    const itemLeft = selectItem.offsetLeft
    const itemWidth = selectItem.clientWidth
     
    const containerWidth = itemListRef.current.clientWidth
    const containerScrollWidth = itemListRef.current.scrollWidth
    
    // 计算让当前item居中的距离
    let distance = itemLeft + itemWidth * 0.5 - containerWidth * 0.5
    
    // 边界处理：不能小于0（不能向右移）
    if(distance < 0) distance = 0
    
    // 边界处理：不能超过最大可滚动距离（不能向左移太多）
    const maxScroll = containerScrollWidth - containerWidth
    if(distance > maxScroll) distance = maxScroll
    
    console.log('currentIndex:', currentIndex, 'distance:', distance, 'maxScroll:', maxScroll)
    
    itemListRef.current.style.transform = `translateX(${-distance}px)`;
    itemListRef.current.style.transition = `transform 0.3s ease-in-out`
  }, [currentIndex,total])
  return (
    <IndicatorWrapper>
      <div className="itemList" ref={itemListRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

export default Indicator