import React, { memo,useState } from 'react'
import { EntiresFilterWrapper } from './style'
const EntiresFilter = memo(() => {
  const [filterList,setFilterList]=useState([])
  const filterShow=['位置区域','整套房屋','房客推荐','洗衣机','空调','无线网络','可以做饭','独栋/半独栋房屋','自助入住','热水浴缸']
  const handleFilter=(item)=>{
    const newFilterList = [...filterList]
    if(newFilterList.includes(item)){
      newFilterList.splice(newFilterList.indexOf(item),1)
    }else{
      newFilterList.push(item)
    }
    setFilterList(newFilterList)
  }
  return (
    <EntiresFilterWrapper>
      <div className="filter">
        <div className="filter-all">筛选条件</div>
        <div className={'filter-item'}>
          {filterShow.map((item,index)=>{
            return <div className={`item ${filterList.includes(item) ? 'active' : ''}`} key={index} onClick={()=>handleFilter(item)}>{item}</div>
          })}
        </div>
      </div>
    </EntiresFilterWrapper>
  )
})

export default EntiresFilter