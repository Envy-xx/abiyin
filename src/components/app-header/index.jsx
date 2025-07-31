import React, { memo, useState, useEffect } from 'react'
import { AppHeaderWrapper } from './style'
import { useLocation } from 'react-router-dom'

import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import SearchTabs from './c-cpns/header-center/c-cpns/search-tabs'
import SearchContent from './c-cpns/header-center/c-cpns/search-content'
import searchInfo from '@/assets/data/search_titles.json'

const AppHeader = memo((props) => {
  const {isFixed} = props
  const location = useLocation()
  const isHomePage = location.pathname === '/home' || location.pathname === '/'
  
  const [currentTab, setCurrentTab] = useState(0)
  const [isSearchAreaVisible, setIsSearchAreaVisible] = useState(false)
  const [isSearchExpanded, setIsSearchExpanded] = useState(false)

  useEffect(() => {
    // 只在 home 页面启用滚动效果
    if (!isHomePage) {
      setIsSearchAreaVisible(false)
      setIsSearchExpanded(false)
      return
    }

    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 80) {
        setIsSearchAreaVisible(true)
      } else {
        setIsSearchAreaVisible(false)
        setIsSearchExpanded(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  const handleSearchClick = () => {
    setIsSearchExpanded(!isSearchExpanded)
  }

  return (
    <AppHeaderWrapper className={`${isFixed} ${isSearchAreaVisible ? 'search-visible' : ''} ${isSearchExpanded ? 'expanded' : ''}`}>
     <div className="content">
      <HeaderLeft/>
      <HeaderCenter 
        isScrolled={isHomePage && isSearchAreaVisible}
        onSearchClick={isHomePage ? handleSearchClick : undefined}
      />
      <HeaderRight/>
      {isHomePage && isSearchAreaVisible && (
        <div className="search-tabs-overlay">
          <SearchTabs 
            searchInfo={searchInfo} 
            setCurrentTab={setCurrentTab} 
            currentTab={currentTab}
          />
        </div>
      )}
     </div>
     {isHomePage && (
       <div className={`search-area ${isSearchAreaVisible ? 'visible' : 'hidden'}`}>
         <div className="search-content-container">
           <SearchContent searchInfo={searchInfo[currentTab]}/>
         </div>
       </div>
     )}
     {isHomePage && isSearchExpanded && <div className="cover" onClick={() => setIsSearchExpanded(false)}></div>}
    </AppHeaderWrapper>
  )
})

export default AppHeader