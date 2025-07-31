import styled from 'styled-components'

export const AppHeaderWrapper = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #eee;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &.fixed{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }
  
  &.search-visible{
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
  
  .content{
    display: flex;
    align-items: center;
    height: 80px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    
    .search-tabs-overlay{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
      opacity: 0;
      animation: fadeInTabs 0.3s ease forwards;
    }
  }
  
  @keyframes fadeInTabs {
    from {
      opacity: 0;
      transform: translate(-50%, -50%) translateY(10px);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) translateY(0);
    }
  }
  
  .search-area{
    background-color: #fff;
    border-bottom: 1px solid #eee;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    
    &.hidden{
      height: 0;
    }
    
    &.visible{
      height: 80px;
    }
    
    .search-content-container{
      max-width: 1200px;
      margin: 0 auto;
      padding: 15px 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  }
  
  .cover{
    position: absolute;
    top: 180px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 98;
    animation: fadeIn 0.3s ease;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`