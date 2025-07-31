import React, { memo, useState,useEffect } from 'react'
import Indicator from '../../base-ui/idicator'
import { DemoWrapper } from './style'
const Demo = memo(() => {
  const data = ['aa','bb','cc','dd','ee','ff','gg']
  const [currentIndex,setCurrentIndex] = useState(0)
  const handleClick = (right) => {
    const newIndex = right ? currentIndex + 1 : currentIndex - 1
    const count = data.length
    if(newIndex < 0){
      setCurrentIndex(count - 1)
    }else if(newIndex >= count){
      setCurrentIndex(0)
    }else{
      setCurrentIndex(newIndex)
    }
    
  }
  useEffect(() => {
    console.log(currentIndex);
  }, [currentIndex])
  return (
    <DemoWrapper>
      <button onClick={()=>handleClick(false)}>上一个</button>
      <button onClick={()=>handleClick(true)}>下一个</button>
      <Indicator total={data.length} currentIndex={currentIndex}>
        {
          data.map((item,index) => {
            return (
              <div key={index} className={`item ${currentIndex === index ? 'active' : ''}`}>{item}</div>
            )
          })
        }
      </Indicator>
    </DemoWrapper>
  )
})

export default Demo