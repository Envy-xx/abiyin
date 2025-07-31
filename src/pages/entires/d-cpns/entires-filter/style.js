import styled from "styled-components";
export const EntiresFilterWrapper = styled.div`
  .filter {
    display: flex;
    align-items: center;
    .filter-all {
     
      font-size: 16px;
      font-weight: 600;
      margin-right: 10px;
      height: 72px;
      line-height: 72px;
      cursor: pointer;
    }
    .filter-item{
    
        display: flex;
        .item{
          padding: 10px 16px;
          border: 1px solid #dce0e0;
          border-radius: 20px;
          margin-right: 10px;
          cursor: pointer;
          &.active{
            background-color:rgb(0, 132, 137);
            color:white
          }
          }
      }
  }
`