import { createTheme } from '@mui/material/styles'

// 创建Material UI主题
export const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#222222', // 使用你现有主题的颜色
    },
    secondary: {
      main: '#00848A',
    },
    text: {
      primary: '#484848',
      secondary: '#222222'
    }
  },
  typography: {
    fontSize: 14,
  }
})
