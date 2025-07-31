import React, { memo} from 'react'
import { Routes, Route } from 'react-router-dom'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import routes from './routers/route'
const App = memo(() => {
  return (
        <div className='App'>
          <div className="header">
          {/* <AppHeader/> */}
          </div>
          <div className="content">
            <Routes>
              {
                routes.map((item)=>(
                  <Route key={item.path} path={item.path} element={item.element}/>
                ))
              }
            </Routes>
          </div>
          <div className="footer">
            <AppFooter/>
          </div>
        </div>
  )
})

export default App
