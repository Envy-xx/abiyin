import styled from "styled-components";

export const HomeLongForWrapper = styled.div`
  /* ScrollView容器样式优化 */
  .scroll-view-wrapper {
    margin-top: 20px;
  }
  
  /* 直接针对longfor-item设置样式，因为现在它们是ScrollView的直接子元素 */
  .longfor-item {
    /* 固定宽度，适合横向滚动 */
    width: 200px;
    flex-shrink: 0;
    cursor: pointer;
    transition: transform 0.2s ease;
    margin-right: 16px; /* 替代之前的gap */
    
    &:hover {
      transform: translateY(-2px);
    }
    
    /* 最后一个item不需要右边距 */
    &:last-child {
      margin-right: 0;
    }
  }
  
  .inner {
    width: 100%;
    height: 100%;
  }
  
  .cover {
    width: 100%;
    height: 150px;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 8px;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }
  
  .longfor-item:hover .cover img {
    transform: scale(1.05);
  }
  
  .info {
    text-align: center;
    
    .city {
      font-size: 14px;
      font-weight: 500;
      color: #333;
      margin-bottom: 4px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .price {
      font-size: 12px;
      color: #666;
    }
  }
`