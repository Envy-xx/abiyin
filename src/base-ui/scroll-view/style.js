import styled from 'styled-components'

export const ScrollViewWrapper = styled.div`
  position: relative;
  .slot {
    transition: transform 0.3s ease-in-out;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
  
  .lArrow, .rArrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 25px;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    color: #008489;
    cursor: pointer;
    
    &:hover {
      background: rgba(255, 255, 255, 1);
      transform: translateY(-50%) scale(1.1);
    }
  }
  
  .lArrow {
    left: -32px;
  }
  
  .rArrow {
    right: -32px;
  }
  
  .tabs {
    display: flex;
    align-items: stretch; /* 修改为stretch以适应不同高度的内容 */
    transition: transform 0.3s ease-in-out;
    
    /* tab相关样式保持不变 */
    .tab-item {
      flex-basis: 120px;
      flex-shrink: 0;
      padding: 8px 16px;
      margin-right: 16px;
      cursor: pointer;
      border-radius: 3px;
      font-size: 14px;
      line-height: 18px;
      color: #222;
      border: 1px solid #ddd;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
      
      &.active {
        background-color: #008489;
        color: #fff;
        border-color: #008489;
      }
      
      &:last-child {
        margin-right: 0;
      }
    }
    
    /* 支持其他类型的内容 */
    .longfor-list {
      display: flex;
      align-items: stretch;
    }
  }
`