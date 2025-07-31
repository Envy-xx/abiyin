import styled from "styled-components";

  export const EntiresPaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  padding: 20px 0;
  
  .pagination-info {
    margin-top: 16px;
    color: #666;
    font-size: 14px;
  }
  
  /* 自定义MUI分页组件样式 */
  .MuiPagination-ul {
    gap: 4px;
  }
  
  .MuiPaginationItem-root {
  
    font-weight: 500;
    transition: all 0.2s ease;
    
    &:hover {
      background-color: gray;
      transform: translateY(-1px);
    }
  }
  
  .MuiPaginationItem-page.Mui-selected {
    color: white;
    background-color: #222222;
    
    &:hover {
      background-color: #484848;
    }
  }
`