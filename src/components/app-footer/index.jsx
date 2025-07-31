import React, { memo } from 'react'
import { AppFooterWrapper } from './style'
import footerData from '@/assets/data/footer.json'

const AppFooter = memo(() => {

  return (
    <AppFooterWrapper>
      <div className="footer-content">
        <div className="footer-banner">
          <div className="banner-content">
            <h2>为未来的度假行程寻找灵感</h2>
          </div>
        </div>
        
        <div className="footer-links">
          {footerData.map((section, index) => (
            <div key={index} className="footer-section">
              <h3>{section.name}</h3>
              <ul>
                {section.list.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-legal">
              <span>© 2025 Airbnb, Inc.</span>
              <span>·</span>
              <a href="#">隐私</a>
              <span>·</span>
              <a href="#">条款</a>
              <span>·</span>
              <a href="#">网站地图</a>
            </div>
            
            <div className="footer-settings">
              <div className="language-currency">
                <button className="language-btn">
                  简体中文 (CN)
                </button>

              </div>
              <div className="social-icons">
             </div>
            </div>  
          </div>
          
          <div className="footer-certificate">
            <p>
              京ICP备16017121号·京ICP证 160773号·京公网安备 11010502032345号·安彼迎网络（北京）有限公司·营业执照·全国旅游投诉渠道 12345·违法和不良信息举报邮箱 jubao@airbnb.com
            </p>
          </div>
        </div>
      </div>
    </AppFooterWrapper>
  )
})

export default AppFooter