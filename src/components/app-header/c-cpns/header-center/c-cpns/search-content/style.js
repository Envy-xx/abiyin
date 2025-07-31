import styled from "styled-components";

export const SearchContentWrapper = styled.div`
.desc{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  
  .item{
    padding: 0 10px;
    border-radius: 16px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    border: 1px solid #ddd;
    font-size: 12px;
    color: #666;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover{
      border-color: #ff385c;
      color: #ff385c;
    }
  }
}
`