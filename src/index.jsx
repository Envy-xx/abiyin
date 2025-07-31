import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './store/index.jsx'
import { Provider } from 'react-redux'
import './assets/styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { muiTheme } from './assets/theme/material'
import theme from './assets/theme'
import { ConfigProvider } from 'antd';
// React 19 兼容性补丁
import '@ant-design/v5-patch-for-react-19'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={muiTheme}>
          <CssBaseline />
          <ConfigProvider theme={{
            components: {
              Carousel: {
                arrowSize: 28,
              }
            }
          }}>
            <BrowserRouter>
              <Suspense fallback={<div>Loading...</div>}>
                <App/>
              </Suspense>
            </BrowserRouter>
          </ConfigProvider>
        </MuiThemeProvider>
      </ThemeProvider>  
    </Provider>
) 