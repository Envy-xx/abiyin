import styled from 'styled-components'

export const HeaderCenterWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  
  .search-bar{
    cursor: pointer;
    transition: all 0.3s ease;
    opacity: 1;
    transform: scale(1);
    
    &:hover{
      transform: scale(1.02);
    }
    
    .text{
      .ant-input{
        width: 300px;
        height: 48px;
        border-radius: 24px;
        border: 1px solid #ddd;
        padding: 0 20px;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.2s ease;
        
        &:hover{
          border-color: #ff385c;
          box-shadow: 0 2px 8px rgba(255, 56, 92, 0.1);
        }
        
        &:focus{
          border-color: #ff385c;
          box-shadow: 0 2px 8px rgba(255, 56, 92, 0.2);
        }
      }
    }
  }
  
  &.scrolled{
    .search-bar{
      opacity: 0;
      transform: scale(0.9);
      pointer-events: none;
    }
  }
`