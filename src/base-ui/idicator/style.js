import styled from "styled-components";

export const IndicatorWrapper = styled.div`

  .itemList{
    overflow: hidden;
    display: flex;
    .item{
      text-align: center;
      flex-shrink: 0;
      width: 30px;
      height: 30px;
      background-color: #fff;
      border-radius: 50%;
      border: 1px solid #dce0e0;
      margin: 0 5px;
      cursor: pointer;
      &.active{
        background-color: #008489;
        color: #fff;
      }
    }
  }
`;