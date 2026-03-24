import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 배포 시 repo 이름에 맞춰 base 변경
// 예: yurim-web.github.io/resume → base: '/resume/'
export default defineConfig({
  plugins: [react()],
  base: '/resume/',
})
