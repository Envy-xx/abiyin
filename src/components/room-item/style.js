import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  width: ${props => props.$itemWidth};
  padding: 0 12px;
  box-sizing: border-box;
  .inner{
    width: 100%;
    cursor: ${props => props.$enableNavigation ? 'pointer' : 'default'};
    .cover{
      position: relative;
      width: 100%;
      padding: 66.66% 8px 0;
      img{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .name{
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    .price{
      font-size: 13px;
      color: #484848;
    }
    .rating{
      display: flex;
      align-items: center;
      .count{
        font-size: 12px;
        color: #999;
      }
    }
  }
`