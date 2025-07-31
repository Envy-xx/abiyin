import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@mui/styled-engine': '@mui/styled-engine-sc'
    }
  },
  optimizeDeps: {
    include: [
      '@mui/styled-engine-sc',
      '@mui/material',
      '@mui/system',
      'styled-components'
    ]
  },
  define: {
    // 确保styled-components正确处理
    'process.env.SC_ATTR': JSON.stringify('data-styled'),
    'process.env.SC_DISABLE_SPEEDY': 'false'
  }
})
