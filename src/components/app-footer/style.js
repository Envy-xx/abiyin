import styled from "styled-components";

export const AppFooterWrapper = styled.div`
  background-color: #f7f7f7;
  border-top: 1px solid #dddddd;
  margin-top: 60px;

  .footer-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 40px;
    
    @media (min-width: 1600px) {
      max-width: 1500px;
      padding: 0 60px;
    }
  }

  .footer-banner {
    padding: 48px 0;
    border-bottom: 1px solid #dddddd;
    
    .banner-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      h2 {
        font-size: 22px;
        font-weight: 600;
        color: #222222;
        margin: 0;
      }
      
      .nav-arrows {
        display: flex;
        gap: 8px;
        
        button {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid #dddddd;
          background: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          transition: all 0.2s;
          
          &:hover {
            border-color: #222222;
            background-color: #f7f7f7;
          }
        }
      }
    }
  }

  .footer-links {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 60px;
    padding: 48px 0;
    border-bottom: 1px solid #dddddd;
    
    @media (min-width: 1400px) {
      gap: 80px;
    }
    
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
    }
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 32px;
    }
    
    .footer-section {
      h3 {
        font-size: 14px;
        font-weight: 600;
        color: #222222;
        margin: 0 0 16px 0;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        
        li {
          margin-bottom: 12px;
          
          a {
            color: #717171;
            text-decoration: none;
            font-size: 14px;
            line-height: 18px;
            transition: color 0.2s;
            
            &:hover {
              color: #222222;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }

  .footer-bottom {
    padding: 24px 0 32px 0;
    
    .footer-bottom-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      
      @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
        align-items: flex-start;
      }
      
      .footer-legal {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        color: #717171;
        
        a {
          color: #717171;
          text-decoration: none;
          
          &:hover {
            color: #222222;
            text-decoration: underline;
          }
        }
      }
      
      .footer-settings {
        display: flex;
        align-items: center;
        gap: 24px;
        
        .language-currency {
          display: flex;
          gap: 16px;
          
          button {
            background: none;
            border: none;
            font-size: 14px;
            color: #222222;
            cursor: pointer;
            text-decoration: underline;
            padding: 0;
            
            &:hover {
              color: #717171;
            }
          }
        }
        
        .social-icons {
          display: flex;
          gap: 16px;
          
          .social-icon {
            width: 18px;
            height: 18px;
            background-color: #222222;
            color: white;
            text-decoration: none;
            border-radius: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: bold;
            transition: background-color 0.2s;
            
            &:hover {
              background-color: #717171;
            }
          }
        }
      }
    }
    
    .footer-certificate {
      p {
        font-size: 12px;
        color: #717171;
        line-height: 16px;
        margin: 0;
        word-break: break-all;
      }
    }
  }
`