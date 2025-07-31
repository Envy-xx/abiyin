import styled from 'styled-components'
export const HeaderRightWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  flex: 1;
  align-items: center;
  .btns{
    display: flex;
    align-items: center;
    .btn{
      font-size: 12px;
      font-weight: 700;
      padding: 6px;
      cursor: pointer;
      border-radius: 14px;
      ${props => props.theme.mixin.boxShadow}
    }
    .profile{
      display: flex;
      align-items: center;
      padding: 6px;
      cursor: pointer;
      }
    }
  .panel{
    font-size: 14px;
    font-weight: 600;
    position: absolute;
    right: 0;
    top: 60px;
   
    padding: 1px 120px 0 0;
    .item{
      padding: 10px 0;
      color: white;
    }
  }
`