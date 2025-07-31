import styled from "styled-components";

export const SearchTabsWrapper = styled.div`
  .tabs{
    display: flex;
    justify-content: center;
    gap: 32px;
    
    .tab-item{
      color: #666;
      padding: 6px 0;
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      position: relative;
      
      &:hover{
        color: #333;
      }
      
      &.active{
        color: #333;
        font-weight: 600;
        
        &::after{
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background-color: #ff385c;
          border-radius: 1px;
        }
      }
    } 
  }
`
